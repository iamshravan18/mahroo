import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahroo.vercel.app"),
  title: "Mahroo Amina Shaikh | Private Residency and Citizenship Planning",
  description:
    "Independent, program-agnostic residency and citizenship planning for Indian HNI families, founders, and investors.",
  openGraph: {
    title: "Mahroo Amina Shaikh | Private Mobility Advisory",
    description:
      "Before you choose a country, choose your strategy. Private residency and citizenship planning for Indian HNI families.",
    images: ["/images/mahroo-og-preview.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
