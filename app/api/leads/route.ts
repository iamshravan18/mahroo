import { NextResponse } from "next/server";

type LeadBody = {
  source?: string;
  segment?: string;
  contact?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  answers?: Record<string, string>;
  qualifier?: Record<string, string>;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: LeadBody;

  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const contact = body.contact;
  const name = contact?.name?.trim() ?? "";
  const email = contact?.email?.trim() ?? "";
  const phone = contact?.phone?.trim() ?? "";

  if (!name || !isEmail(email) || !phone) {
    return NextResponse.json({ error: "Name, valid email, and phone are required" }, { status: 400 });
  }

  const lead = {
    leadId: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    source: body.source ?? "website",
    segment: body.segment ?? "unsegmented",
    contact: { name, email, phone },
    answers: body.answers ?? {},
    qualifier: body.qualifier ?? {},
  };

  console.info("Mahroo lead submission", lead);

  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (error) {
      console.error("Lead webhook delivery failed", error);
    }
  }

  return NextResponse.json({ ok: true, leadId: lead.leadId });
}
