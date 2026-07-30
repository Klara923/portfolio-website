import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { LanguageProvider } from "@/providers/LanguageProvider";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
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
