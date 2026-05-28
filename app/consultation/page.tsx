import { AssetImage, Eyebrow, PageShell, Section } from "../components";

const formFields = [
  "Full name",
  "Email",
  "WhatsApp number",
  "City and country of residence",
  "Nationality / citizenship held",
  "Occupation / business type",
  "Main goal",
  "Preferred regions",
  "Timeline",
  "Investment capacity range",
  "Family members to include",
  "Preferred investment type",
  "Visa refusals or sensitive constraints",
  "Source-of-funds readiness",
];

export default function ConsultationPage() {
  return (
    <PageShell>
      <main>
        <Section tone="dark">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <Eyebrow>Qualified consultation</Eyebrow>
              <h1 className="font-serif text-5xl leading-tight text-[#f7f2e8] sm:text-6xl">
                Request a Private Global Mobility Consultation
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#d8cfbf]">
                For Indian families, founders, and investors evaluating legitimate
                residency or citizenship-by-investment routes across Europe, Dubai,
                the Caribbean, Malta, and Panama.
              </p>
              <p className="mt-5 text-sm leading-7 text-[#c8b79c]">
                This is a confidential advisory conversation, not a visa guarantee,
                legal opinion, or shortcut to approval.
              </p>
            </div>
            <AssetImage
              filename="mahroo-consultation-booking.webp"
              alt="Private consultation room prepared for a confidential advisory call."
              className="aspect-[3/2]"
              priority
            />
          </div>
        </Section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="soft-card">
              <h2 className="font-serif text-3xl text-[#183b32]">Who this call is for</h2>
              {[
                "You are considering an investment-backed route within 12 months",
                "You have a realistic capital range for government-approved programs",
                "Your funds can be explained and documented",
                "You want a structured comparison before choosing a country",
                "You are comfortable with due diligence",
              ].map((item) => <p className="check-item mt-4" key={item}>{item}</p>)}
            </div>
            <div className="soft-card">
              <h2 className="font-serif text-3xl text-[#183b32]">Who this call is not for</h2>
              {[
                "You want guaranteed approval",
                "You want unofficial discounts below government pricing",
                "You cannot explain source of funds",
                "You are only looking for free country lists",
                "You want advice on asylum, work permits, student visas, or tourist visas",
              ].map((item) => <p className="check-item mt-4" key={item}>{item}</p>)}
            </div>
          </div>
        </Section>

        <Section tone="white">
          <Eyebrow>Qualifier preview</Eyebrow>
          <h2 className="section-title max-w-3xl">
            Calendar access follows the qualifier, so Mahroo speaks only with serious, suitable inquiries.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {formFields.map((field) => (
              <div key={field} className="soft-card text-sm font-medium text-[#183b32]">
                {field}
              </div>
            ))}
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
