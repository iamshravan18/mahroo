import Link from "next/link";
import { Eyebrow, PageShell, Section } from "../components";
import { fitCheckQuestions, results } from "../data";

const answers = [
  ["Easier global travel", "Children's education", "Business expansion", "Family security / Plan B"],
  ["Portugal / Europe", "UAE / Dubai", "Caribbean citizenship", "Panama / Latin America"],
  ["Within 3 months", "3-6 months", "6-12 months", "Researching only"],
  ["USD 200k-350k", "USD 350k-600k", "USD 600k-1M", "USD 1M+"],
];

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
              This front-end preview shows the exact questions and segmentation logic.
              In production, these answers connect to the CRM, email sequence, and booking qualifier.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="soft-card h-fit">
              <h2 className="font-serif text-3xl text-[#183b32]">Result paths</h2>
              <div className="mt-6 space-y-3">
                {results.map((result) => (
                  <Link key={result.slug} className="result-link" href={`/results/${result.slug}`}>
                    {result.label}
                  </Link>
                ))}
              </div>
            </aside>
            <div className="space-y-5">
              {fitCheckQuestions.map((question, index) => (
                <div key={question} className="soft-card">
                  <div className="flex items-start gap-4">
                    <span className="number-pill">{index + 1}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#183b32]">{question}</h3>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {(answers[index % answers.length] ?? answers[0]).map((answer) => (
                          <button key={answer} className="answer-chip" type="button">
                            {answer}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
