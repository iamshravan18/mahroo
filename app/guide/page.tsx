import Link from "next/link";
import { AssetImage, Eyebrow, PageShell, Section } from "../components";

const guideItems = [
  ["Residency first", "A right to live, renew, or build presence in another jurisdiction. It may or may not lead to citizenship later."],
  ["Citizenship route", "A direct or eventual nationality outcome. Indian families must review Indian citizenship and OCI implications before proceeding."],
  ["Documentation readiness", "Most serious delays begin with source-of-funds, family records, tax history, or unclear business ownership trails."],
  ["Program fit", "The best route depends on your objective, family size, capital range, timeline, and tolerance for relocation or renewals."],
];

export default function GuidePage() {
  return (
    <PageShell>
      <main>
        <Section tone="dark">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <Eyebrow>Private Mobility Starter Guide</Eyebrow>
              <h1 className="font-serif text-5xl leading-tight text-[#f7f2e8] sm:text-6xl">
                Start with the basics before choosing a country.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#d8cfbf]">
                If your budget, timing, or documentation is still forming, the
                right next step is education. Use this guide to understand the
                difference between residency, citizenship, and documentation readiness.
              </p>
            </div>
            <AssetImage
              filename="mahroo-result-explorer.webp"
              alt="Private mobility education guide on a calm advisory desk."
              className="aspect-[4/3]"
              priority
            />
          </div>
        </Section>

        <Section>
          <div className="grid gap-5 md:grid-cols-2">
            {guideItems.map(([title, copy]) => (
              <article className="soft-card" key={title}>
                <h2 className="font-serif text-3xl text-[#183b32]">{title}</h2>
                <p className="mt-4 leading-7 text-[#52564f]">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-[#b7954a]/30 bg-[#fffaf0] p-7">
            <h2 className="font-serif text-3xl text-[#183b32]">When to re-take the fit check</h2>
            <p className="mt-4 max-w-3xl leading-7 text-[#52564f]">
              Return when you have a clearer timeline, a defined investment range,
              and basic family/source-of-funds documents ready for a serious review.
            </p>
            <Link className="btn mt-6" href="/fit-check">
              Re-Take the Fit Check
            </Link>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
