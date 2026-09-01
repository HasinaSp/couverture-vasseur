import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Couvreur Angers | Maine-et-Loire 49 - Couverture Vasseur",
    template: "%s | Couverture Vasseur",
  },
  description:
    "Entreprise de couverture, rénovation de toiture, zinguerie et intervention d'urgence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${manrope.variable} ${dmSerif.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}