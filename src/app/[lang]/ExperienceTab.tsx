import React from "react";
import TabContainer from "./TabContainer";
import SkilltagContainer from "../components/SkilltagContainer";
import { getDictionary, Locale } from "./dictionaries";

type Props = {
  lang: Locale;
};

const ExperienceTab = async ({ lang }: Props) => {
  const dict = await getDictionary(lang);

  return (
    <TabContainer tabName="Experience">
      {dict.experience.map((element, idx) => (
        <div
          className="mt-6 flex flex-col gap-y-3 rounded-md p-4 transition-all duration-300 hover:bg-violet-800/20 hover:drop-shadow-glow focus:bg-violet-800/20 focus:outline-none focus:drop-shadow-glow"
          key={idx}
        >
          <p className="text-base">{element.position}</p>
          <div className="flex flex-row items-baseline divide-x-2">
            <p className="pr-5 text-xs">{element.company}</p>
            <p className="pl-5 text-xs text-secondary">
              {element.start} - {element.end}
            </p>
          </div>
          <SkilltagContainer skills={element.tech} skillType="tech" />
        </div>
      ))}
    </TabContainer>
  );
};

export default ExperienceTab;
