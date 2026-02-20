import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quentindurant.com"),
  title: "Quentin Durant | Développeur Web & Mobile",
  description:
    "Portfolio de Quentin Durant, développeur web et mobile. Chef de projet Telecom & développeur en alternance chez GCservice. Laravel, React, Next.js, Flutter.",
  icons: {
    icon: "/images/FaviconQD.png",
  },
  openGraph: {
    title: "Quentin Durant | Développeur Web & Mobile",
    description:
      "Chef de projet Telecom & développeur web. Spécialisé Laravel, React, Next.js, Flutter. Disponible freelance & alternance Master MBA Full Stack.",
    type: "website",
    locale: "fr_FR",
    siteName: "Quentin Durant - Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quentin Durant - Développeur Web & Mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quentin Durant | Développeur Web & Mobile",
    description:
      "Chef de projet Telecom & développeur web. Laravel, React, Next.js, Flutter. Disponible freelance & alternance Master.",
    images: ["/images/og-image.png"],
  },
  keywords: [
    "développeur web",
    "développeur mobile",
    "PHP",
    "Laravel",
    "React",
    "Next.js",
    "JavaScript",
    "Flutter",
    "portfolio",
    "Quentin Durant",
    "Angers",
    "freelance",
    "alternance",
    "chef de projet",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
