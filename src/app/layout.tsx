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
  title: "The AI Factory - AI Capability Guide for SMEs",
  description:
    "By Kevin Shepherdson, Celine Chew & Joaquin Jay Gonzalez III. Empowering SME leaders to build their own AI Factory. Preview chapters, explore the framework, and get your copy.",
  openGraph: {
    title: "The AI Factory - AI Capability Guide for SMEs",
    description:
      "Empowering SME leaders to build their own AI Factory. A practical guide to manufacturing intelligence for your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
