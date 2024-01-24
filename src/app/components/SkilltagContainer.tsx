import React from "react";
import Skilltag from "./Skilltag";
import { skillsArray } from "./Skilltag";

type Props = {
  skills: string[];
  skillType: (typeof skillsArray)[number];
};
const SkilltagContainer = ({ skills, skillType }: Props) => {
  return (
    <div className="mt-4 flex w-3/4 flex-row flex-wrap justify-center gap-2 gap-y-3">
      {skills.map((skill) => (
        <Skilltag key={skill} skill={skill} skillType={skillType} />
      ))}
    </div>
  );
};

export default SkilltagContainer;
