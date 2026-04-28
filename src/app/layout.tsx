import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Electrician & Smart Home Specialists in Melbourne's East | Smarter Electrical Solutions",
  description: `25+ years delivering electrical and smart home solutions across Melbourne. Home automation, CCTV, audio, EV chargers and full electrical installations. Call ${BUSINESS.phonePretty}.`,
  icons: {
    icon: "/logos/smarter-elec-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-white text-slate-800" style={{ fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
