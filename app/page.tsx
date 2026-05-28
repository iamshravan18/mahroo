import Link from "next/link";
import { AssetImage, CTAGroup, Eyebrow, PageShell, Section } from "./components";
import { faqs, programs } from "./data";

const trustSignals = [
  "Independent, program-agnostic advisory",
  "India-aware source-of-funds readiness",
  "Private, appointment-led process",
  "Europe, UAE, Caribbean, Malta, Panama",
];

const method = [
  ["Fit Check", "Share your goals, family structure, budget range, and timeline."],
  ["Shortlist", "Receive a practical comparison of routes that may fit your situation."],
  ["Documentation Review", "Identify source-of-funds, family, tax, and background issues early."],
  ["Application Coordination", "Coordinate with licensed/local counsel and authorized channels where required."],
  ["Ongoing Planning", "Review renewals, family additions, tax-residency considerations, and future pathways."],
];

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="relative overflow-hidden bg-[#183b32] px-5 py-16 text-[#f7f2e8] sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <Eyebrow>Private mobility advisory for Indian HNI families</Eyebrow>
              <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                Private Residency and Citizenship Planning for Indian Families Thinking Beyond One Passport
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#ded5c5]">
                Mahroo Amina Shaikh advises Indian HNI families, entrepreneurs, and
                investors exploring legitimate residency and citizenship-by-investment
                routes across Europe, Dubai, the Caribbean, and Panama. Start with a
                confidential fit check before choosing a program.
              </p>
              <CTAGroup />
              <p className="mt-5 max-w-2xl text-xs leading-6 text-[#c8b79c]">
                Preliminary guidance only. No guarantee of approval. Program rules and
                eligibility depend on current government requirements and due diligence.
              </p>
            </div>
            <AssetImage
              filename="mahroo-private-mobility-hero.webp"
              alt="Indian family in a private advisory meeting for global residency planning."
              className="aspect-[16/10]"
              priority
            />
          </div>
        </section>

        <Section tone="white">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((signal) => (
              <div key={signal} className="soft-card text-sm font-medium text-[#183b32]">
                {signal}
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <AssetImage
              filename="mahroo-family-decision.webp"
              alt="Indian family discussing long-term mobility and education planning at home."
              className="aspect-[3/2]"
            />
            <div>
              <Eyebrow>Why families come to Mahroo</Eyebrow>
              <h2 className="section-title">
                When global mobility becomes a family decision, generic advice is not enough.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#52564f]">
                Most families do not begin with a country. They begin with a concern:
                children may study abroad, business may need a second base, travel may
                be too restrictive, or the family may want a legally clean Plan B.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Education access for children",
                  "Easier business and travel mobility",
                  "Long-term residence or citizenship optionality",
                  "Diversification outside India",
                  "Privacy and continuity for the family",
                  "A compliant path, not a shortcut",
                ].map((item) => (
                  <div key={item} className="check-item">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="programs" tone="dark">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <Eyebrow>Programs covered</Eyebrow>
              <h2 className="section-title text-[#f7f2e8]">Compare routes by purpose, not popularity.</h2>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {programs.map(([name, desc]) => (
                  <div key={name} className="dark-card">
                    <h3 className="font-serif text-2xl">{name}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#d8cfbf]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <AssetImage
              filename="mahroo-program-comparison.webp"
              alt="Abstract program comparison cards for global residency planning."
              className="aspect-[21/12]"
            />
          </div>
        </Section>

        <Section id="method">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <AssetImage
              filename="mahroo-advisory-method.webp"
              alt="Private advisory desk with planning documents and a world map."
              className="aspect-[4/3]"
            />
            <div>
              <Eyebrow>Advisory method</Eyebrow>
              <h2 className="section-title">A private process before a public commitment.</h2>
              <div className="mt-8 space-y-4">
                {method.map(([title, desc], index) => (
                  <div key={title} className="process-row">
                    <span>{index + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section tone="white">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Program-agnostic clarity</Eyebrow>
            <h2 className="section-title">
              Most investment migration conversations begin with a menu of countries.
              Mahroo begins with the family.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#52564f]">
              Why you want optionality, who must be included, how funds will be
              explained, what your children may need ten years from now, and which
              routes create avoidable friction for Indian applicants. Only then does
              the program conversation begin.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="soft-card">
              <h2 className="font-serif text-3xl text-[#183b32]">Good fit</h2>
              {[
                "Indian founders, promoters, exporters, investors, and HNI families",
                "Families with investable capital from clear sources",
                "Parents planning education and global access for children",
                "Business owners considering Dubai, Europe, or a second jurisdiction",
                "Families who value privacy and proper documentation",
              ].map((item) => <p className="check-item mt-4" key={item}>{item}</p>)}
            </div>
            <div className="soft-card border-[#b7954a]/35">
              <h2 className="font-serif text-3xl text-[#183b32]">Not a fit</h2>
              {[
                "Anyone seeking guaranteed approval",
                "Anyone with unexplained funds",
                "Anyone looking for unofficial discounts below government pricing",
                "Anyone expecting legal advice without licensed counsel",
                "Anyone unwilling to complete due diligence",
              ].map((item) => <p className="check-item mt-4" key={item}>{item}</p>)}
            </div>
          </div>
        </Section>

        <Section id="faq" tone="white">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="section-title max-w-3xl">Questions serious Indian families ask before choosing a route.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <details key={question} className="faq-card">
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section tone="dark">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Start quietly. Decide carefully.</Eyebrow>
            <h2 className="section-title text-[#f7f2e8]">
              Before you choose a country, understand what your family actually qualifies for.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#d8cfbf]">
              Review the full cost, the documentation risks, and the family implications before anyone sells you a passport.
            </p>
            <div className="mt-8">
              <Link href="/fit-check" className="btn btn-light">Take the Private Mobility Fit Check</Link>
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
