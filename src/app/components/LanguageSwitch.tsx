import React from "react";
import { languages } from "../[lang]/layout";
import Link from "next/link";

type Props = {
  currentLang: string;
};

const LanguageSwitch = ({ currentLang }: Props) => {
  return (
    <div className="group m-2 flex gap-1">
      <div className="drop-shadow-glow bg-slate-900px-2 mx-2 flex w-10 flex-row justify-center rounded-md border-2 border-violet-800 py-1 group-hover:opacity-0">
        {currentLang}
      </div>
      <div className="drop-shadow-glow absolute mx-2 hidden w-10 flex-col gap-2 divide-y-2 rounded-md border-2 border-violet-800 bg-slate-900 px-2 py-1 group-hover:flex">
        {languages.map((lang) => (
          <Link
            className="flex flex-row justify-center"
            href={`/${lang}`}
            locale={lang}
            key={lang}
          >
            {lang}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitch;
