import React from "react";
import Link from "next/link";

type Props = {
  currentLang: string;
};

const env = process.env.NODE_ENV;

const languages = ["en", "de", "pl"] as const;

const LanguageSwitch = ({ currentLang }: Props) => {
  return (
    <div className="flex flex-row divide-x-2 rounded-md border-2 border-violet-800 bg-slate-900 drop-shadow-glow lg:w-10 lg:flex-col lg:divide-x-0 lg:divide-y-2">
      {languages.map((lang) => (
        <Link
          className={`m-auto border-violet-800 px-2 text-center lg:m-0 lg:px-0 lg:py-2 ${currentLang === lang ? "text-secondary" : null}`}
          href={`/${lang === "en" && env === "production" ? "" : lang}`}
          locale={lang}
          key={lang}
        >
          {lang}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitch;
