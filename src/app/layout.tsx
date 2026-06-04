import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/layout/preloader";
import { ScrollBackground } from "@/components/layout/scroll-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const siteUrl = "https://hnhimmigration.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HnH Immigration — Your Pathway to Canada",
    template: "%s · HnH Immigration",
  },
  description:
    "HnH Immigration is a regulated Canadian immigration consultancy guiding individuals, families, and businesses through Express Entry, PNP, sponsorship, study and work permits.",
  keywords: [
    "Canada immigration",
    "RCIC",
    "Express Entry",
    "Provincial Nominee Program",
    "study permit",
    "work permit",
    "family sponsorship",
    "immigration consultant",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "HnH Immigration",
    title: "HnH Immigration — Your Pathway to Canada",
    description:
      "Regulated Canadian immigration consultancy. Trusted guidance for visas, permits, and permanent residency.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream selection:bg-gold">
        <Preloader />
        <ScrollBackground />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
