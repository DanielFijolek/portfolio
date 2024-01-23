import { Locale, getDictionary } from "./dictionaries";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const dict = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 p-24">
      <h1 className="text-3xl font-bold">Daniel Fijołek</h1>
      {dict.title}
      <div className="mt-10 flex flex-col items-center gap-2 rounded-md border-2 border-blue-500 bg-slate-800 p-4">
        <p>Portfolio website</p>
        <p className="text-lg">Work in progress</p>
      </div>
    </main>
  );
}
