import "./globals.css";

import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import Script from "next/script";

import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
    <html className="lang-en" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5WJLTD4S');
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RT0ZMKQ4EK" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RT0ZMKQ4EK');
          `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5WJLTD4S"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
