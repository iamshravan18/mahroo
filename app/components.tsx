import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[rgba(24,59,50,0.12)] bg-[#f7f2e8]/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl text-[#183b32]">Mahroo Amina Shaikh</span>
          <span className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#706657]">
            Private mobility advisory
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-[#3f443f] md:flex">
          <Link href="/#programs">Programs</Link>
          <Link href="/#method">Method</Link>
          <Link href="/#faq">FAQ</Link>
          <Link className="btn btn-small" href="/fit-check">
            Fit Check
          </Link>
        </nav>
        <Link className="btn btn-small mobile-header-cta" href="/fit-check">
          Fit Check
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#183b32] px-5 py-12 text-[#f7f2e8] sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl">Before you choose a country, choose your strategy.</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#d8cfbf]">
            Independent, program-agnostic residency and citizenship planning for Indian
            HNI families, founders, and investors.
          </p>
        </div>
        <div className="text-sm leading-8 text-[#d8cfbf]">
          <Link className="block" href="/fit-check">Private Mobility Fit Check</Link>
          <Link className="block" href="/consultation">Confidential Consultation</Link>
          <Link className="block" href="/privacy">Privacy and Disclaimer</Link>
        </div>
        <div className="text-sm leading-7 text-[#d8cfbf]">
          <p>Preliminary guidance only.</p>
          <p>No guarantee of approval.</p>
          <p>Licensed/legal/local counsel is coordinated where required.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#202321]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow mb-4 text-xs font-semibold uppercase tracking-[0.24em]">
      {children}
    </p>
  );
}

export function Section({
  id,
  children,
  tone = "light",
  compact = false,
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "light" | "dark" | "white";
  compact?: boolean;
}) {
  const toneClass =
    tone === "dark" ? "section-dark bg-[#183b32] text-[#f7f2e8]" : tone === "white" ? "bg-[#fffaf0]" : "";
  return (
    <section id={id} className={`px-5 sm:px-8 ${compact ? "py-16 lg:py-20" : "py-20 lg:py-28"} ${toneClass}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function AssetImage({
  filename,
  alt,
  className = "",
  priority = false,
}: {
  filename: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`image-frame ${className}`}>
      <Image
        src={`/images/${filename}`}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

export function CTAGroup() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link href="/fit-check" className="btn">
        Take the Private Mobility Fit Check
      </Link>
      <Link href="/consultation" className="btn btn-secondary">
        Request a Confidential Consultation
      </Link>
    </div>
  );
}
