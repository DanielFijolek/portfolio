import React from "react";
import githubSvg from "../../../public/images/github.svg";
import linkedinSvg from "../../../public/images/linkedin.svg";
import Image from "next/image";
import LanguageSwitch from "../components/common/LanguageSwitch";
import { Locale } from "../utils/dictionaries";

type Props = {
  lang: Locale;
};

const SideBar = ({ lang }: Props) => {
  return (
    <div className="mt-6 flex flex-row justify-center gap-8 align-middle lg:mt-0 lg:flex-col ">
      <LanguageSwitch currentLang={lang} />
      <a href="https://github.com/DanielFijolek" target="_blank">
        <Image
          src={githubSvg}
          alt="Link to my github profile"
          width={40}
          height={40}
        />
      </a>
      <a href="https://www.linkedin.com/in/danielfijolek/" target="_blank">
        <Image
          src={linkedinSvg}
          alt="Link to my Linkedin profile"
          width={40}
          height={40}
        />
      </a>
    </div>
  );
};

export default SideBar;
