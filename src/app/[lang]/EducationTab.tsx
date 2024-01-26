import React from "react";
import TabContainer from "./TabContainer";
import SkilltagContainer from "../components/SkilltagContainer";
import { getDictionary, Locale } from "./dictionaries";

type Props = {
  lang: Locale;
};

const EducationTab = async ({ lang }: Props) => {
  const dict = await getDictionary(lang);

  return (
    <TabContainer tabName="Education">
      {dict.education.map((element, idx) => (
        <div
          className=" mt-6 flex flex-col rounded-md p-4 transition-all duration-300 hover:bg-violet-800/20 hover:drop-shadow-glow focus:bg-violet-800/20 focus:outline-none focus:drop-shadow-glow"
          key={idx}
        >
          <div className="flex flex-row items-baseline divide-x-2">
            <p className="pr-5 text-base">{element.degree}</p>
            <p className="pl-5 text-xs text-secondary">
              {element.start} - {element.end}
            </p>
          </div>
          <p className="text-sm">{element.school}</p>
          <p className="text-sm">{element.field}</p>
        </div>
      ))}
    </TabContainer>
  );
};

export default EducationTab;
