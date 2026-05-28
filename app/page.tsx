import Link from "next/link";
import { AssetImage, CTAGroup, Eyebrow, PageShell, Section } from "./components";
import { faqs } from "./data";

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

const routePrograms = [
  {
    name: "Portugal",
    signal: "European education optionality",
    desc: "A considered EU path for families thinking about study access, residence rights, and long-term citizenship optionality.",
  },
  {
    name: "Greece",
    signal: "A calm European base",
    desc: "A residence-led route for families who want European access without making relocation the first move.",
  },
  {
    name: "Malta",
    signal: "Structured permanence",
    desc: "Permanent residence and merit-based citizenship discussions handled carefully under current-law expectations.",
  },
  {
    name: "UAE / Dubai",
    signal: "Founder base close to India",
    desc: "A practical regional base for entrepreneurs who want proximity, speed, and long-term family residence options.",
  },
  {
    name: "Caribbean",
    signal: "Direct mobility advantage",
    desc: "Citizenship routes for qualified families where due diligence, official pricing, and documentation strength matter.",
  },
  {
    name: "Panama",
    signal: "Diversification beyond the obvious",
    desc: "A residency diversification route for families exploring USD-linked and Latin American optionality.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="relative overflow-hidden bg-[#183b32] px-5 py-12 text-[#f7f2e8] sm:px-8 lg:py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <Eyebrow>Private mobility advisory for Indian HNI families</Eyebrow>
              <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-[5rem]">
                Private Mobility Planning
              </h1>
              <p className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-[#c8b79c]">
                For Indian families thinking beyond one passport.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#ded5c5]">
                Independent, program-agnostic guidance for Indian HNI families
                comparing residency and citizenship routes across Europe, Dubai,
                the Caribbean, and Panama.
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
              className="aspect-[16/10] lg:aspect-[5/3]"
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
              <Link className="btn mt-8" href="/fit-check">
                Take the Private Mobility Fit Check
              </Link>
            </div>
          </div>
        </Section>

        <Section id="programs" tone="dark" compact>
          <div className="program-dream">
            <div className="relative z-10 max-w-3xl">
              <Eyebrow>Programs covered</Eyebrow>
              <h2 className="section-title text-[#f7f2e8]">Compare routes by purpose, not popularity.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d8cfbf]">
                Mahroo helps families compare the role each route should play:
                EU optionality, a Dubai business base, direct citizenship,
                residency diversification, or a staged family strategy.
              </p>
            </div>
            <div className="route-grid mt-10">
              <div className="route-line" />
              {routePrograms.map((program) => (
                <article key={program.name} className="route-card">
                  <div className="route-icon">
                    <ProgramIcon name={program.name} />
                  </div>
                  <p className="route-signal">{program.signal}</p>
                  <h3>{program.name}</h3>
                  <p>{program.desc}</p>
                </article>
              ))}
              <div className="route-promise">
                <span>One family brief</span>
                <span>Several possible routes</span>
                <span>One clean shortlist</span>
              </div>
            </div>
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
          <div>
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
            <div className="mt-9 rounded-lg border border-[#b7954a]/30 bg-[#fffaf0] p-7 text-center">
              <p className="font-serif text-3xl text-[#183b32]">
                If you are in the good-fit column, start with a private fit check.
              </p>
              <Link className="btn mt-5" href="/fit-check">
                Take the Private Mobility Fit Check
              </Link>
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
          <div className="mt-10 rounded-lg border border-[#b7954a]/30 bg-[#f7f2e8] p-7">
            <h3 className="font-serif text-3xl text-[#183b32]">
              Still comparing options?
            </h3>
            <p className="mt-3 max-w-2xl leading-7 text-[#52564f]">
              The Private Mobility Fit Check is the cleanest starting point before
              any country, cost, or calendar conversation.
            </p>
            <Link className="btn mt-5" href="/fit-check">
              Take the Private Mobility Fit Check
            </Link>
          </div>
        </Section>

        <section className="final-cta-section px-5 py-20 text-[#f7f2e8] sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="final-cta-panel">
              <div className="max-w-3xl">
                <Eyebrow>Start quietly. Decide carefully.</Eyebrow>
                <h2 className="section-title text-[#f7f2e8]">
                  Before you choose a country, understand what your family actually qualifies for.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8cfbf]">
                  Review the full cost, documentation risks, and family implications
                  in a confidential fit check before anyone sells you a program.
                </p>
                <div className="mt-8">
                  <Link href="/fit-check" className="btn btn-light">Take the Private Mobility Fit Check</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

function ProgramIcon({ name }: { name: string }) {
  const common = {
    width: 78,
    height: 78,
    viewBox: "0 0 78 78",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (name === "Portugal") {
    return (
      <svg {...common}>
        <path d="M17 50c9-18 26-27 44-28" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M20 55c10-8 25-9 39-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".58" />
        <circle cx="54" cy="24" r="7" stroke="currentColor" strokeWidth="2.4" />
        <path d="M22 43h20M27 36h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      </svg>
    );
  }

  if (name === "Greece") {
    return (
      <svg {...common}>
        <path d="M19 30l20-11 20 11" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 31v23M34 31v23M44 31v23M54 31v23M20 55h38" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M16 61h46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".55" />
      </svg>
    );
  }

  if (name === "Malta") {
    return (
      <svg {...common}>
        <path d="M22 57V35c0-10 7-18 17-18s17 8 17 18v22" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M30 57V36c0-5 4-9 9-9s9 4 9 9v21" stroke="currentColor" strokeWidth="2" opacity=".62" />
        <path d="M18 57h42M26 21h26" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "UAE / Dubai") {
    return (
      <svg {...common}>
        <path d="M18 58h42" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M24 58V36h8v22M37 58V21h7v37M49 58V31h8v27" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <path d="M40.5 21c1.6 7 1.4 13.4 0 20" stroke="currentColor" strokeWidth="1.8" opacity=".56" />
      </svg>
    );
  }

  if (name === "Caribbean") {
    return (
      <svg {...common}>
        <path d="M18 56c11-5 19-5 30 0 5 2 8 2 12 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M39 54c2-14 4-24 13-34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M52 20c-8 0-13 3-16 9 8 1 14-1 16-9ZM52 20c7 4 9 9 8 16-7-2-11-8-8-16Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M17 48c12-10 32-10 44 0" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M24 48v9M33 43v14M42 43v14M51 48v9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M22 31c9-8 25-8 34 0M27 25c7-5 17-5 24 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      <circle cx="39" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
