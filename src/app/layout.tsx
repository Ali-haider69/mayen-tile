import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactWidget } from "@/components/ui/ContactWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mayen Tile | Luxury Tile & Stone Installation — Silicon Valley",
  description:
    "Premium tile installation for Silicon Valley's finest homes. Custom bathrooms, waterproof showers, heated floors, and designer tile work in Palo Alto & the Bay Area.",
  keywords:
    "luxury tile installation, bathroom remodel, Palo Alto, Silicon Valley, curbless shower, heated floors, tile contractor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <ContactWidget />
        <Footer />
      </body>
    </html>
  );
}
