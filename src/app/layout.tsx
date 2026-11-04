import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Exo_2, Public_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  weight: "800",
  variable: "--font-exo2",
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  weight: ["400", "700"],
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Campus OS",
  description:
    "A role-based campus platform with an AI assistant that answers only from verified college documents.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${exo2.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
