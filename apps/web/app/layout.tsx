import type { Metadata } from "next";

import localFont from "next/font/local";

import "./globals.scss";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const belerenB = localFont({
  src: "../public/fonts/beleren-b.ttf",
  variable: "--font-beleren-b",
});

const belerenBsc = localFont({
  src: "../public/fonts/beleren-bsc.ttf",
  variable: "--font-beleren-bsc",
});

const phyrexian = localFont({
  src: "../public/fonts/mtg-phyrexian.ttf",
  variable: "--font-phyrexian",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${belerenB.variable} ${belerenBsc.variable} ${phyrexian.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
