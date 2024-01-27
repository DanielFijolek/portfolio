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
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body
        className={`${inter.className} mx-3 flex flex-col items-center gap-2 lg:mx-6 lg:flex-row`}
      >
        {children}
      </body>
    </html>
  );
}
