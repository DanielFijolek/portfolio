import { Locale, getDictionary } from "./dictionaries";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const dict = await getDictionary(lang);

  return (
    <>
      <h1 className="text-3xl font-bold">Daniel Fijołek</h1>
      {dict.title}
    </>
  );
}
