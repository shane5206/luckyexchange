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
  title: "Lucky Exchange",
  description: "Bet on Lucky Exchange – a leading sports betting platform with top market access, competitive odds, and seamless gameplay. Join now for the best betting experience!",
  alternates: {
    canonical: 'https://luckysports.cloud',
  },
  metadataBase: new URL('https://luckysports.cloud'),
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
