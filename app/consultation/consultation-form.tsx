"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type FormState = {
  name: string;
  email: string;
  phone: string;
  residence: string;
  citizenship: string;
  occupation: string;
  goal: string;
  regions: string;
  timeline: string;
  capacity: string;
  family: string;
  investmentType: string;
  constraints: string;
  funds: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  residence: "",
  citizenship: "",
  occupation: "",
  goal: "",
  regions: "",
  timeline: "",
  capacity: "",
  family: "",
  investmentType: "",
  constraints: "",
  funds: "",
};

const fields: Array<{
  id: keyof FormState;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
}> = [
  { id: "name", label: "Full name" },
  { id: "email", label: "Email", type: "email" },
  { id: "phone", label: "WhatsApp number", type: "tel" },
  { id: "residence", label: "City and country of residence" },
  { id: "citizenship", label: "Nationality / citizenship held" },
  { id: "occupation", label: "Occupation / business type" },
  { id: "goal", label: "Main goal", type: "textarea" },
  { id: "regions", label: "Preferred regions" },
  { id: "timeline", label: "Timeline" },
  { id: "capacity", label: "Investment capacity range" },
  { id: "family", label: "Family members to include" },
  { id: "investmentType", label: "Preferred investment type" },
  { id: "constraints", label: "Visa refusals or sensitive constraints", type: "textarea" },
  { id: "funds", label: "Source-of-funds readiness", type: "textarea" },
];

export function ConsultationForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submitQualifier(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "consultation-qualifier",
          segment: "consultation-request",
          contact: {
            name: form.name,
            email: form.email,
            phone: form.phone,
          },
          qualifier: form,
        }),
      });

      if (!response.ok) {
        throw new Error("Qualifier submission failed");
      }

      const payload = (await response.json()) as { leadId?: string };
      const leadQuery = payload.leadId ? `?lead=${encodeURIComponent(payload.leadId)}` : "";
      router.push(`/consultation/confirmed${leadQuery}`);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="mt-10" onSubmit={submitQualifier}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map((field) => {
          const value = form[field.id];
          const commonProps = {
            className: "field-input",
            id: field.id,
            required: true,
            value,
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
              updateField(field.id, event.target.value),
          };

          return (
            <label
              key={field.id}
              className={`field-label ${field.type === "textarea" ? "sm:col-span-2 lg:col-span-3" : ""}`}
              htmlFor={field.id}
            >
              {field.label}
              {field.type === "textarea" ? (
                <textarea {...commonProps} rows={4} />
              ) : (
                <input {...commonProps} type={field.type ?? "text"} />
              )}
            </label>
          );
        })}
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-[#52564f]">
        <input className="mt-1 accent-[#183b32]" required type="checkbox" />
        I understand this is an initial qualifier and not legal, tax, investment, or immigration advice.
      </label>

      {status === "error" ? (
        <p className="mt-5 rounded-lg border border-[#b7954a]/40 bg-[#fffaf0] p-4 text-sm text-[#6a562a]">
          The qualifier did not submit. Please review the fields and try again.
        </p>
      ) : null}

      <button className="btn mt-8 w-full sm:w-auto" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Sending qualifier..." : "Submit Private Qualifier"}
      </button>
    </form>
  );
}
