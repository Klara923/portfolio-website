import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { QueryProvider } from "@/providers/QueryProvider";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio powered by Next.js and Django",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <LanguageProvider>
          <QueryProvider>{children}</QueryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
