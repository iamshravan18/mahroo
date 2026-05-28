import Link from "next/link";
import { notFound } from "next/navigation";
import { AssetImage, Eyebrow, PageShell, Section } from "../../components";
import { results } from "../../data";

export function generateStaticParams() {
  return results.map((result) => ({ segment: result.slug }));
}

export default async function ResultPage({
  params,
}: {
  params: Promise<{ segment: string }>;
}) {
  const { segment } = await params;
  const result = results.find((item) => item.slug === segment);

  if (!result) {
    notFound();
  }

  const ctaHref = result.qualified
    ? "/consultation"
    : result.slug === "manual-review"
      ? "/consultation"
      : "/guide";

  return (
    <PageShell>
      <main>
        <Section tone="dark">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <Eyebrow>{result.label}</Eyebrow>
              <h1 className="font-serif text-5xl leading-tight text-[#f7f2e8] sm:text-6xl">
                {result.headline}
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#d8cfbf]">{result.copy}</p>
              <div className="mt-8">
                <Link
                  className={result.qualified ? "btn btn-light" : "btn btn-secondary-dark"}
                  href={ctaHref}
                >
                  {result.cta}
                </Link>
              </div>
            </div>
            <AssetImage filename={result.image} alt={result.alt} className="aspect-[16/10]" priority />
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-4xl">
            <Eyebrow>What to review next</Eyebrow>
            <div className="grid gap-4 sm:grid-cols-2">
              {result.next.map((item) => (
                <div key={item} className="soft-card text-[#183b32]">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-lg border border-[#b7954a]/30 bg-[#fffaf0] p-7">
              <h2 className="font-serif text-3xl text-[#183b32]">A low-pressure next step</h2>
              <p className="mt-4 leading-7 text-[#52564f]">
                The first review clarifies fit, risks, cost range, documentation
                readiness, and whether you should proceed, wait, or rule certain routes out.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
