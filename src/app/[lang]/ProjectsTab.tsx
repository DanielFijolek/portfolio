import React from "react";
import TabContainer from "./TabContainer";
import SkilltagContainer from "../components/SkilltagContainer";
import { getDictionary, Locale } from "./dictionaries";

type Props = {
  lang: Locale;
};

const ProjectsTab = async ({ lang }: Props) => {
  const dict = await getDictionary(lang);

  return (
    <TabContainer tabName="Projects">
      {dict.projects.map((element, idx) => (
        <a
          href={element.link}
          className="flex flex-col gap-y-4 rounded-md p-4 transition-all duration-300 hover:bg-violet-800/20 hover:drop-shadow-glow focus:bg-violet-800/20 focus:outline-none focus:drop-shadow-glow"
          key={idx}
        >
          <div className="flex flex-row items-baseline gap-x-10">
            <p className="text-lg">{element.name}</p>
          </div>
          <SkilltagContainer skills={element.tech} skillType="tech" />
          <div className="flex flex-col gap-2">
            {element.desc?.map((text, idx) => (
              <p
                key={idx}
                className={`${text.startsWith("-") ? "text-sm" : "text-base"}`}
              >
                {text}
              </p>
            ))}
          </div>
        </a>
      ))}
    </TabContainer>
  );
};

export default ProjectsTab;
