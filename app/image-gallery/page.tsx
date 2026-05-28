import Image from "next/image";
import type { Metadata } from "next";
import { Eyebrow, PageShell, Section } from "../components";
import { imageAssets } from "../data";

export const metadata: Metadata = {
  title: "Mahroo Image QA Gallery",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ImageGalleryPage() {
  return (
    <PageShell>
      <main>
        <Section tone="dark">
          <Eyebrow>Image QA gallery</Eyebrow>
          <h1 className="font-serif text-5xl leading-tight text-[#f7f2e8] sm:text-6xl">
            Mahroo Website Image Assets
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8cfbf]">
            Review every generated asset for page fit, brand palette, and absence of
            accidental text, flags, passports, or off-brand visual cues.
          </p>
        </Section>

        <Section>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {imageAssets.map((asset) => (
              <article key={asset.filename} className="gallery-card">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#183b32]/10">
                  <Image
                    src={`/images/${asset.filename}`}
                    alt={asset.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-serif text-2xl text-[#183b32]">{asset.pageUse}</h2>
                    <span className={`status ${asset.status}`}>{asset.status}</span>
                  </div>
                  <p className="mt-3 break-words font-mono text-xs text-[#706657]">{asset.filename}</p>
                  <p className="mt-3 text-sm leading-6 text-[#52564f]">{asset.alt}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#8a743d]">
                    {asset.agentOwner}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
