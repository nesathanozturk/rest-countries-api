import BackButton from "@/components/ui/BackButton";
import CountryDetail from "@/components/CountryDetail";
import Header from "@/components/Header";
import { getCountry } from "@/api";
import { Params } from "@/types";

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
