import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Fijołek Portfolio",
  description: "Portfolio website of Daniel Fijołek",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }, { lang: "pl" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
