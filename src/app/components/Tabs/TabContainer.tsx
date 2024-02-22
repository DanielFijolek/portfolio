import React from "react";
import TabSeperator from "../common/TabSeperator";

type Props = {
  children: React.ReactNode;
  tabName: string;
};

const TabContainer = ({ children, tabName }: Props) => {
  return (
    <section id={tabName} className="flex w-full flex-col gap-8">
      <TabSeperator tabName={tabName} />
      {children}
    </section>
  );
};

export default TabContainer;
