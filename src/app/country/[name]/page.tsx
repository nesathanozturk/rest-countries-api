import CountryContainer from "@/containers/country-detail";
import { getCountry } from "@/api";
import { Params } from "@/types";
import Header from "@/components/Header";

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
      <section className="py-10 px-5 md:px-20">
        <CountryContainer data={data} />
      </section>
    </main>
  );
};

export default CountryPage;
