import React from "react";

export const skillsArray = ["soft", "tech", "computer"] as const;

type Props = {
  skillType: (typeof skillsArray)[number];
  skill: string;
};

const skillColorClass = {
  soft: "border-teal-400 shadow-teal-400",
  tech: "border-blue-400 shadow-blue-400 ",
  computer: "border-orange-400 shadow-orange-400",
};

const Skilltag = ({ skillType, skill }: Props) => {
  return (
    <p
      className={`${skillColorClass[skillType]} 0 rounded-md border-2 px-2 text-xs shadow-md `}
    >
      {skill}
    </p>
  );
};

export default Skilltag;
