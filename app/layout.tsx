import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContextProvider from "./context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meat Market App",
  description: "Meat Market App - A place to buy and sell meat",
  openGraph: {
    title: "Meat Market App",
    description: "Meat Market App - A place to buy and sell meat",
    url: "https://meat-market-app.vercel.app",
    siteName: "Meat Market App",
    images: [
      {
        url: "https://meat-market-app.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Meat Market App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meat Market App",
    description: "Meat Market App - A place to buy and sell meat",
    images: ["https://meat-market-app.vercel.app/og-image.png"],
    creator: "@meatmarketapp",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  themeColor: "#ffffff",
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  verification: {
    google: "google-site-verification=your-google-verification-code",
    yandex: "yandex-verification: your-yandex-verification-code",
    me: "meat-market-app",
  },
  alternates: {
    canonical: "https://meat-market-app.vercel.app",
    languages: {
      "en-US": "https://meat-market-app.vercel.app",
      "es-ES": "https://meat-market-app.vercel.app/es",
      "fr-FR": "https://meat-market-app.vercel.app/fr",
    },
  },
  keywords: [
    "meat market",
    "buy meat",
    "sell meat",
    "meat delivery",
    "meat shop",
    "fresh meat",
    "meat products",
    "meat online",
    "meat marketplace",
    "meat app",
    "meat ecommerce",
  ],
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
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
