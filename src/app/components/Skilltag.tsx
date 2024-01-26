import React from "react";

export const skillsArray = ["soft", "tech", "computer"] as const;

type Props = {
  skillType: (typeof skillsArray)[number];
  skill: string;
};

const skillColorClass = {
  soft: "border-soft shadow-soft",
  tech: "border-tech shadow-tech ",
  computer: "border-computer shadow-computer",
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
