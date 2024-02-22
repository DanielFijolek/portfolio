import React from "react";

type Props = {
  tabName: string;
};

const TabSeperator = ({ tabName }: Props) => {
  return (
    <div className=" w-full">
      <p className="self-start text-xl">{tabName}</p>
      <hr className=" from-separator mt-1 h-[4px] w-full border-0 bg-gradient-to-r text-transparent" />
    </div>
  );
};

export default TabSeperator;
