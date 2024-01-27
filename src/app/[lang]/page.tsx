import { Locale } from "./dictionaries";
import Header from "./Header";
import SkillTab from "./SkillTab";
import EducationTab from "./EducationTab";
import ExperienceTab from "./ExperienceTab";
import ProjectsTab from "./ProjectsTab";
import SideBar from "./SideBar";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  return (
    <>
      <SideBar lang={lang} />
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
