import { Locale } from "../utils/dictionaries";
import Header from "./Header";
import SkillTab from "../components/Tabs/SkillTab";
import EducationTab from "../components/Tabs/EducationTab";
import ExperienceTab from "../components/Tabs/ExperienceTab";
import ProjectsTab from "../components/Tabs/ProjectsTab";
import SideBar from "./SideBar";

type Props = {
  params: Promise<{
    lang: Locale;
  }>;
};

export default async function Home(props: Props) {
  const params = await props.params;

  const {
    lang
  } = params;

  return (
    <>
      <SideBar lang={lang} />
      <Header lang={lang} />
      <main className="lg:no-scrollbar flex scroll-pt-6 flex-col gap-14 py-6 lg:max-h-screen lg:w-1/2 lg:overflow-auto lg:scroll-smooth lg:pr-4">
        <SkillTab lang={lang} />
        <EducationTab lang={lang} />
        <ExperienceTab lang={lang} />
        <ProjectsTab lang={lang} />
      </main>
    </>
  );
}
