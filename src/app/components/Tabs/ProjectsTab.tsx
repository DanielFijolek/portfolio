import TabContainer from "./TabContainer";
import SkilltagContainer from "../common/SkilltagContainer";
import { getDictionary, type Locale } from "../../utils/dictionaries";
import externalLink from "../../../../public/images/external-link.svg";
import Image from "next/image";

type Props = {
  lang: Locale;
};

const ProjectsTab = async ({ lang }: Props) => {
  const dict = await getDictionary(lang);

  return (
    <TabContainer tabName={dict.tabsName.projects}>
      {dict.projects.map((element, idx) => (
        <a
          href={element.link}
          className="group flex flex-col gap-y-4 rounded-md bg-violet-900/10 p-4  transition-all duration-300 hover:bg-violet-800/20 hover:drop-shadow-glow focus:bg-violet-800/20 focus:outline-none focus:drop-shadow-glow"
          key={idx}
          target="_blank"
        >
          <div className="flex flex-row gap-x-4 align-middle">
            <p className="text-lg">{element.name}</p>
            {element.link ? (
              <Image
                className="group-hover:mb-2 group-hover:ml-2"
                width={20}
                height={20}
                src={externalLink}
                alt={`Link to project ${element.name}`}
              />
            ) : null}
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
