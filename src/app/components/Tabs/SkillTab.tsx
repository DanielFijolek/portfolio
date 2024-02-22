import React from "react";
import TabContainer from "./TabContainer";
import SkilltagContainer from "../common/SkilltagContainer";
import { getDictionary, Locale } from "../../utils/dictionaries";

type Props = {
  lang: Locale;
};

const SkillTab = async ({ lang }: Props) => {
  const dict = await getDictionary(lang);

  return (
    <TabContainer tabName={dict.tabsName.skills}>
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
