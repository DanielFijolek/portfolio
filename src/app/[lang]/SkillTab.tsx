import React from "react";
import TabContainer from "./TabContainer";
import SkilltagContainer from "../components/SkilltagContainer";
import { getDictionary, Locale } from "./dictionaries";

type Props = {
  lang: Locale;
};

const SkillTab = async ({ lang }: Props) => {
  const dict = await getDictionary(lang);

  return (
    <TabContainer tabName="Skills">
      <SkilltagContainer skills={dict["tech-skills"]} skillType="tech" />
      <SkilltagContainer
        skills={dict["computer-skills"]}
        skillType="computer"
      />
      <SkilltagContainer skills={dict["soft-skills"]} skillType="soft" />
    </TabContainer>
  );
};

export default SkillTab;
