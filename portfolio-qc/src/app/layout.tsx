import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Emmanuel AMELA — Quantum Computing Research Portfolio",
  description:
    "Software engineer & MSc Computer Systems (EPL–UTBM). Candidat à un stage de recherche en informatique quantique.",
  openGraph: {
    title: "Emmanuel AMELA — Quantum Computing Research Portfolio",
    description:
      "Profil orienté stage de recherche en quantum computing : UTBM, cours Holweck, Quantum ARISE, Microsoft Student Ambassador.",
    images: ["/jr2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${outfit.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
