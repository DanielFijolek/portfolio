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

export default async function RootLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
  }
) {
  const params = await props.params;

  const {
    lang
  } = params;

  const {
    children
  } = props;

  return (
    <html lang={lang}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} no-scrollbar mx-3 flex flex-col items-center gap-2 overflow-auto lg:mx-6 lg:flex-row lg:overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
