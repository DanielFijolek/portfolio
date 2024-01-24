import { Locale, getDictionary } from "./dictionaries";
import SkilltagContainer from "../components/SkilltagContainer";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const dict = await getDictionary(lang);

  return (
    <>
      <h1 className="text-3xl font-bold">Daniel Fijołek</h1>
      {dict.title}
      <SkilltagContainer skills={dict["tech-skills"]} skillType="tech" />
      <SkilltagContainer
        skills={dict["computer-skills"]}
        skillType="computer"
      />
      <SkilltagContainer skills={dict["soft-skills"]} skillType="soft" />
    </>
  );
}
