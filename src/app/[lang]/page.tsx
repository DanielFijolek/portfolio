import { Locale, getDictionary } from "./dictionaries";
import SkilltagContainer from "../components/SkilltagContainer";
import TabContainer from "./TabContainer";
import githubSvg from "../../../public/images/github.svg";
import linkedinSvg from "../../../public/images/linkedin.svg";
import Image from "next/image";

type Props = {
  params: {
    lang: Locale;
  };
};

const tabNames = ["Skills", "Education", "Experience", "Projects"] as const;

export default async function Home({ params: { lang } }: Props) {
  const dict = await getDictionary(lang);

  return (
    <>
      <header className="mt-10 flex flex-col items-center justify-center lg:mt-0 lg:w-1/2 ">
        <h1 className="text-center text-4xl font-bold">Daniel Fijołek</h1>
        <p className="text-secondary mt-2 text-center text-lg">{dict.title}</p>
        <div className="mb-4 flex w-3/5 flex-row gap-4 ">
          <a className="" href="https://github.com/DanielFijolek">
            <Image
              src={githubSvg}
              alt="Link to my github profile"
              width={40}
              height={40}
            />
          </a>
          <a className="" href="https://www.linkedin.com/in/danielfijolek/">
            <Image
              src={linkedinSvg}
              alt="Link to my Linkedin profile"
              width={40}
              height={40}
            />
          </a>
        </div>
        <div className="mt-6 w-[80%]">
          <p className=" text-center text-base">{dict.about}</p>
          <div className="mt-10 hidden flex-col gap-3 pl-4 lg:flex">
            {tabNames.map((tabName) => (
              <div key={tabName} className="group">
                <a
                  className="group-hover:text-secondary focus:text-secondary peer text-base transition-all duration-300 focus:pl-2 focus:outline-none group-hover:pl-2"
                  href={`#${tabName}`}
                >
                  {tabName}
                </a>
                <hr className="from-secondary mt-1 h-[3px] w-28 border-0 bg-gradient-to-r text-transparent transition-all duration-300 group-hover:w-40 peer-focus:w-40" />
              </div>
            ))}
          </div>
        </div>
      </header>
      <main className="no-scrollbar flex max-h-screen scroll-pt-6 flex-col gap-14 overflow-auto scroll-smooth py-6 lg:w-1/2 lg:pr-4">
        <TabContainer tabName="Skills">
          <SkilltagContainer skills={dict["tech-skills"]} skillType="tech" />
          <SkilltagContainer
            skills={dict["computer-skills"]}
            skillType="computer"
          />
          <SkilltagContainer skills={dict["soft-skills"]} skillType="soft" />
        </TabContainer>

        <TabContainer tabName="Education">
          {dict.education.map((element, idx) => (
            <div
              className=" mt-6 flex flex-col rounded-md p-4 transition-all duration-300 hover:bg-violet-800/20 hover:drop-shadow-glow focus:bg-violet-800/20 focus:outline-none focus:drop-shadow-glow"
              key={idx}
            >
              <div className="flex flex-row items-baseline divide-x-2">
                <p className="pr-5 text-base">{element.degree}</p>
                <p className="text-secondary pl-5 text-xs">
                  {element.start} - {element.end}
                </p>
              </div>
              <p className="text-sm">{element.school}</p>
              <p className="text-sm">{element.field}</p>
            </div>
          ))}
        </TabContainer>

        <TabContainer tabName="Experience">
          {dict.experience.map((element, idx) => (
            <div
              className="mt-6 flex flex-col gap-y-3 rounded-md p-4 transition-all duration-300 hover:bg-violet-800/20 hover:drop-shadow-glow focus:bg-violet-800/20 focus:outline-none focus:drop-shadow-glow"
              key={idx}
            >
              <p className="text-base">{element.position}</p>
              <div className="flex flex-row items-baseline divide-x-2">
                <p className="pr-5 text-xs">{element.company}</p>
                <p className="text-secondary pl-5 text-xs">
                  {element.start} - {element.end}
                </p>
              </div>
              <SkilltagContainer skills={element.tech} skillType="tech" />
            </div>
          ))}
        </TabContainer>

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
      </main>
    </>
  );
}
