import { AssetImage, Eyebrow, PageShell, Section } from "../components";

export default function PrivacyPage() {
  return (
    <PageShell>
      <main>
        <Section tone="dark">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <Eyebrow>Privacy and disclaimer</Eyebrow>
              <h1 className="font-serif text-5xl leading-tight text-[#f7f2e8] sm:text-6xl">
                Confidential intake. Careful advice. No shortcuts or guarantees.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#d8cfbf]">
                Information shared through this website is used only to assess fit,
                route relevance, and documentation readiness for residency or
                citizenship planning.
              </p>
            </div>
            <AssetImage
              filename="mahroo-privacy-disclaimer.webp"
              alt="Confidential advisory documents in a private folder."
              className="aspect-[4/3]"
            />
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-4xl space-y-6 text-lg leading-8 text-[#52564f]">
            <p>
              This website provides preliminary advisory information only. It is not
              legal, tax, investment, or immigration advice. Government authorities
              decide all applications, and no approval is guaranteed.
            </p>
            <p>
              Residency, permanent residence, and citizenship are different legal
              outcomes. Indian citizens should review Indian citizenship, OCI, tax,
              remittance, and source-of-funds implications with qualified professionals
              before pursuing any citizenship route.
            </p>
            <p>
              Sensitive documents such as passports, financial statements, or identity
              records should not be sent through open website forms. If document review
              is required later, Mahroo will explain the appropriate secure process.
            </p>
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
