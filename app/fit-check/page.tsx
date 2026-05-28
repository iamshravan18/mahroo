import { Eyebrow, PageShell, Section } from "../components";
import { results } from "../data";
import { FitCheckForm } from "./fit-check-form";

export default function FitCheckPage() {
  return (
    <PageShell>
      <main>
        <Section tone="dark">
          <div className="max-w-4xl">
            <Eyebrow>The Private Mobility Fit Check</Eyebrow>
            <h1 className="font-serif text-5xl leading-tight text-[#f7f2e8] sm:text-6xl">
              Find which residency or citizenship route may match your family, budget, and timeline.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8cfbf]">
              Answer a short private assessment. You will receive an initial route
              segment and a next step based on your region, capital range, family
              needs, timeline, and documentation readiness.
            </p>
          </div>
        </Section>

        <Section>
          <FitCheckForm resultLabels={results.map(({ slug, label }) => ({ slug, label }))} />
        </Section>
      </main>
    </PageShell>
  );
}
