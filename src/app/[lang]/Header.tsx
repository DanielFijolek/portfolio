import { getDictionary, type Locale } from "../utils/dictionaries";

type Props = {
  lang: Locale;
};

const Header = async ({ lang }: Props) => {
  const dict = await getDictionary(lang);

  const tabNames: string[] = Object.values(dict.tabsName) as string[];

  return (
    <header className="mt-10 flex flex-col items-center justify-center lg:mt-0 lg:w-1/2 ">
      <h1 className="text-center text-4xl font-bold">Daniel Fijołek</h1>
      <p className="mt-2 text-center text-lg text-secondary">{dict.title}</p>
      <div className="mt-6 lg:w-[80%]">
        <p className=" text-center text-base">{dict.about}</p>
        <div className="mt-10 hidden flex-col gap-3 pl-4 lg:flex">
          {tabNames.map((tabName) => (
            <div key={tabName} className="group">
              <a
                className="peer text-base transition-all duration-300 focus:pl-2 focus:text-secondary focus:outline-none group-hover:pl-2 group-hover:text-secondary"
                href={`#${tabName}`}
              >
                {tabName}
              </a>
              <hr className="mt-1 h-[3px] w-28 border-0 bg-gradient-to-r from-secondary text-transparent transition-all duration-300 group-hover:w-40 peer-focus:w-40" />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
