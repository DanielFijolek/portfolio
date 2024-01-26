import { Locale } from "./dictionaries";
import Header from "./Header";
import SkillTab from "./SkillTab";
import EducationTab from "./EducationTab";
import ExperienceTab from "./ExperienceTab";
import ProjectsTab from "./ProjectsTab";
import githubSvg from "../../../public/images/github.svg";
import linkedinSvg from "../../../public/images/linkedin.svg";
import Image from "next/image";
import LanguageSwitch from "../components/LanguageSwitch";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  return (
    <>
      <div className="mt-6 flex flex-row justify-center gap-8 align-middle lg:mt-0 lg:flex-col ">
        <LanguageSwitch currentLang={lang} />
        <a href="https://github.com/DanielFijolek">
          <Image
            src={githubSvg}
            alt="Link to my github profile"
            width={40}
            height={40}
          />
        </a>
        <a href="https://www.linkedin.com/in/danielfijolek/">
          <Image
            src={linkedinSvg}
            alt="Link to my Linkedin profile"
            width={40}
            height={40}
          />
        </a>
      </div>
      <Header lang={lang} />
      <main className="no-scrollbar flex max-h-screen scroll-pt-6 flex-col gap-14 overflow-auto scroll-smooth py-6 lg:w-1/2 lg:pr-4">
        <SkillTab lang={lang} />
        <EducationTab lang={lang} />
        <ExperienceTab lang={lang} />
        <ProjectsTab lang={lang} />
      </main>
    </>
  );
}
