import React from "react";
import Skilltag from "./Skilltag";
import { skillsArray } from "./Skilltag";

type Props = {
  skills: string[];
  skillType: (typeof skillsArray)[number];
};
const SkilltagContainer = ({ skills, skillType }: Props) => {
  return (
    <div className="flex flex-row flex-wrap gap-2 gap-y-3">
      {skills.map((skill) => (
        <Skilltag key={skill} skill={skill} skillType={skillType} />
      ))}
    </div>
  );
};

export default SkilltagContainer;
