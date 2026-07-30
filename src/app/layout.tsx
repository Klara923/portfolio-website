import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { site } from "@/data/portfolio";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} — Portfolio`,
  description:
    "Full-stack developer portfolio — React, TypeScript, Django, and product design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
