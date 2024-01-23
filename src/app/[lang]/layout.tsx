import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LanguageSwitch from "../components/LanguageSwitch";

const inter = Inter({ subsets: ["latin"] });

export const languages = ["en", "de", "pl"] as const;

export const metadata: Metadata = {
  title: "Daniel Fijołek Portfolio",
  description: "Portfolio website of Daniel Fijołek",
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ params: { lang } }));
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
        className={`${inter.className} flex min-h-screen flex-col items-center`}
      >
        <header className="flex w-3/4 flex-row justify-end">
          <LanguageSwitch currentLang={lang} />
        </header>
        <main className="m-2 flex  w-3/4 flex-col  items-center gap-2">
          {children}
        </main>
      </body>
    </html>
  );
}
