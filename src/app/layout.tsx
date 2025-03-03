import "./globals.css";

import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Instrument_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lucky Exchange - B2B Sports Trading Solutions",
    template: "%s | Lucky Exchange"
  },
  description: "Lucky Exchange offers leading sports betting platform with top market access, competitive odds, and seamless gameplay for bookmakers and operators.",
  keywords: "sports betting, sports trading, B2B solutions, bookmakers, betting operators, real-time odds",
  alternates: {
    canonical: 'https://luckysports.cloud',
  },
  metadataBase: new URL('https://luckysports.cloud'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luckysports.cloud',
    title: 'Lucky Exchange - B2B Sports Trading Solutions',
    description: 'Leading sports betting platform with top market access, competitive odds, and seamless gameplay for bookmakers and operators.',
    siteName: 'Lucky Exchange',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucky Exchange - B2B Sports Trading Solutions',
    description: 'Leading sports betting platform with top market access, competitive odds, and seamless gameplay for bookmakers and operators.',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
