"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { fitCheckQuestions } from "../data";

type ResultLabel = {
  slug: string;
  label: string;
};

type Answers = Record<string, string>;

type Contact = {
  name: string;
  email: string;
  phone: string;
};

const initialContact: Contact = {
  name: "",
  email: "",
  phone: "",
};

function getSegment(answers: Answers) {
  const sensitive = answers.sensitive;
  const documentation = answers.documentation;
  const budget = answers.budget;
  const timeline = answers.timeline;
  const region = answers.region;
  const priority = answers.priority;
  const motivation = answers.motivation;
  const profile = answers.profile;
  const family = answers.family;

  if (
    (sensitive && sensitive !== "none") ||
    documentation === "complex" ||
    sensitive === "source-complex"
  ) {
    return "manual-review";
  }

  if (budget === "under-200" || timeline === "research" || profile === "explorer") {
    return "explorer";
  }

  if (
    region === "strategic-hni" ||
    priority === "multi-jurisdiction" ||
    budget === "1000-plus" ||
    family === "multi-gen"
  ) {
    return "strategic-hni";
  }

  if (region === "uae" || priority === "business-base" || motivation === "business") {
    return "uae";
  }

  if (region === "caribbean" || priority === "speed") {
    return "caribbean";
  }

  if (region === "panama") {
    return "panama";
  }

  return "europe";
}

export function FitCheckForm({ resultLabels }: { resultLabels: ResultLabel[] }) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState<Contact>(initialContact);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === fitCheckQuestions.length;
  const segment = useMemo(() => getSegment(answers), [answers]);
  const segmentLabel = resultLabels.find((result) => result.slug === segment)?.label ?? "Private review";
  const contactComplete = contact.name.trim() && contact.email.trim() && contact.phone.trim();

  function updateAnswer(questionId: string, value: string) {
    setAnswers((current) => ({ ...current, [questionId]: value }));
  }

  async function submitFitCheck(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isComplete || !contactComplete || !consent || status === "submitting") {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "fit-check",
          segment,
          contact,
          answers,
        }),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      const payload = (await response.json()) as { leadId?: string };
      const leadQuery = payload.leadId ? `?lead=${encodeURIComponent(payload.leadId)}` : "";
      router.push(`/results/${segment}${leadQuery}`);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]" onSubmit={submitFitCheck}>
      <aside className="soft-card h-fit lg:sticky lg:top-28">
        <h2 className="font-serif text-3xl text-[#183b32]">Your private assessment</h2>
        <p className="mt-4 text-sm leading-7 text-[#52564f]">
          {answeredCount} of {fitCheckQuestions.length} questions answered.
        </p>
        <div className="mt-6 rounded-lg border border-[#b7954a]/30 bg-[#fffaf0] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a743d]">
            Current route
          </p>
          <p className="mt-2 font-serif text-2xl text-[#183b32]">{segmentLabel}</p>
        </div>
        <p className="mt-5 text-xs leading-6 text-[#706657]">
          Sensitive answers are routed to manual private review before any calendar access.
        </p>
      </aside>

      <div className="space-y-5">
        {fitCheckQuestions.map((question, index) => (
          <fieldset key={question.id} className="soft-card">
            <div className="flex items-start gap-4">
              <span className="number-pill shrink-0">{index + 1}</span>
              <div className="flex-1">
                <legend className="text-xl font-semibold text-[#183b32]">{question.question}</legend>
                {question.helper ? (
                  <p className="mt-2 text-sm leading-6 text-[#706657]">{question.helper}</p>
                ) : null}
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {question.options.map((answer) => {
                    const active = answers[question.id] === answer.value;
                    return (
                      <button
                        key={answer.value}
                        className={`answer-chip ${active ? "answer-chip-active" : ""}`}
                        type="button"
                        aria-pressed={active}
                        onClick={() => updateAnswer(question.id, answer.value)}
                      >
                        {answer.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </fieldset>
        ))}

        <fieldset className="soft-card" id="private-result">
          <div className="flex items-start gap-4">
            <span className="number-pill shrink-0">{fitCheckQuestions.length + 1}</span>
            <div className="flex-1">
              <legend className="text-xl font-semibold text-[#183b32]">
                Where should Mahroo send your private result brief?
              </legend>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <label className="field-label">
                  Full name
                  <input
                    className="field-input"
                    required
                    value={contact.name}
                    onChange={(event) => setContact({ ...contact, name: event.target.value })}
                  />
                </label>
                <label className="field-label">
                  Email
                  <input
                    className="field-input"
                    required
                    type="email"
                    value={contact.email}
                    onChange={(event) => setContact({ ...contact, email: event.target.value })}
                  />
                </label>
                <label className="field-label">
                  WhatsApp number
                  <input
                    className="field-input"
                    required
                    value={contact.phone}
                    onChange={(event) => setContact({ ...contact, phone: event.target.value })}
                  />
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <label className="flex items-start gap-3 rounded-lg border border-[#b7954a]/30 bg-[#fffaf0] p-4 text-sm leading-6 text-[#52564f]">
          <input
            className="mt-1 accent-[#183b32]"
            checked={consent}
            required
            type="checkbox"
            onChange={(event) => setConsent(event.target.checked)}
          />
          I consent to Mahroo reviewing these answers to prepare my private result brief.
          No partial quiz data is submitted before this step.
        </label>

        {status === "error" ? (
          <p className="rounded-lg border border-[#b7954a]/40 bg-[#fffaf0] p-4 text-sm text-[#6a562a]">
            The submission did not go through. Please check the fields and try again.
          </p>
        ) : null}

        <button className="btn w-full sm:w-auto" disabled={!isComplete || !contactComplete || !consent || status === "submitting"} type="submit">
          {status === "submitting" ? "Preparing your result..." : "Obtain My Private Result"}
        </button>
      </div>
    </form>
  );
}
