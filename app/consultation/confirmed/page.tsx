import Link from "next/link";
import { AssetImage, Eyebrow, PageShell, Section } from "../../components";

export default function ConsultationConfirmedPage() {
  return (
    <PageShell>
      <main>
        <Section tone="dark">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <Eyebrow>Qualifier received</Eyebrow>
              <h1 className="font-serif text-5xl leading-tight text-[#f7f2e8] sm:text-6xl">
                Your private consultation request has been received.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#d8cfbf]">
                Mahroo can now review your family objective, timeline, investment
                range, and documentation readiness before opening calendar access or
                recommending a manual review.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link className="btn btn-light" href="/">
                  Return Home
                </Link>
                <Link className="btn btn-secondary-dark" href="/privacy">
                  Privacy and Disclaimer
                </Link>
              </div>
            </div>
            <AssetImage
              filename="mahroo-booking-confirmation.webp"
              alt="Private consultation appointment materials on a refined desk."
              className="aspect-[4/3]"
              priority
            />
          </div>
        </Section>
      </main>
    </PageShell>
  );
}
