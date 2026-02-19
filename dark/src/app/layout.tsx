import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Quentin Durant | Développeur Web & Mobile",
  description:
    "Portfolio de Quentin Durant, développeur web et mobile en alternance B3 chez GCservice. PHP, Laravel, JavaScript, Flutter. Disponible pour freelance et alternance Master MBA.",
  icons: {
    icon: "/images/FaviconQD.png",
  },
  openGraph: {
    title: "Quentin Durant | Développeur Web & Mobile",
    description:
      "Développeur web en alternance B3. Spécialisé PHP, Laravel, JavaScript, Flutter. Disponible pour missions freelance et alternance Master MBA Développeur Full Stack.",
    type: "website",
    locale: "fr_FR",
    siteName: "Quentin Durant - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quentin Durant | Développeur Web & Mobile",
    description:
      "Développeur web en alternance B3. PHP, Laravel, JavaScript, Flutter. Disponible freelance & alternance Master.",
  },
  keywords: [
    "développeur web",
    "développeur mobile",
    "PHP",
    "Laravel",
    "JavaScript",
    "Flutter",
    "portfolio",
    "Quentin Durant",
    "Angers",
    "freelance",
    "alternance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
