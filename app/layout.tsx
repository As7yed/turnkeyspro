import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TurnKey Pros | Property Management & Handyman Services in Texas",
  description: "Professional make-ready, handyman, and property management services across Dallas, Houston, and San Antonio. Licensed & insured. Same-day response available.",
  keywords: ["property management", "handyman", "make-ready", "Texas", "Dallas", "Houston", "San Antonio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
