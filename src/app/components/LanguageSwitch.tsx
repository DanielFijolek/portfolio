import React from "react";
import { languages } from "../[lang]/layout";
import Link from "next/link";

type Props = {
  currentLang: string;
};

const env = process.env.NODE_ENV;

const LanguageSwitch = ({ currentLang }: Props) => {
  return (
    <div className="flex w-10 flex-col divide-y-2 rounded-md border-2 border-violet-800 bg-slate-900 drop-shadow-glow">
      {languages.map((lang) => (
        <Link
          className={`flex flex-row justify-center border-violet-800   py-1 ${currentLang === lang ? "text-secondary" : null}`}
          href={`/${lang === "en" && env === "production" ? null : lang}`}
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
