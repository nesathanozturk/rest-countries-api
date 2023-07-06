import BackButton from "@/components/ui/BackButton";
import CountryDetail from "@/components/CountryDetail";
import Header from "@/components/Header";
import { getCountry } from "@/api";
import { Params } from "@/types";
import { Metadata } from "next";

export async function generateMetadata({ params }: Params) {
  const { name } = params;

  const data = await getCountry(name);

  return {
    title: data.name.common,
    description: `Information about ${data.name.common}`,
    generator: "Next.js",
    applicationName: "Countries App",
    referrer: "origin-when-cross-origin",
    keywords: [
      "Next.js",
      "React",
      "JavaScript",
      "Countries",
      "Country",
      "Countries App",
      "App",
      "Country App",
      "Country Detail",
      "Detail",
    ],
    authors: [
      {
        name: "Neşathan Öztürk",
        url: "https://www.github.com/nesathanozturk/",
      },
    ],
    creator: "Neşathan Öztürk",
    publisher: "Neşathan Öztürk",
    icons: {
      icon: data.flags.png,
    },
  };
}

const CountryPage = async ({ params }: Params) => {
  const { name } = params;

  const data = await getCountry(name);

  return (
    <main className="bg-lmgray dark:bg-dmbg text-lmtxt dark:text-dmtext">
      <Header />
      <div className="py-10 px-5 md:px-20">
        <BackButton />
        <section className="mt-10">
          <CountryDetail countryDetail={data} />
        </section>
      </div>
    </main>
  );
};

export default CountryPage;
