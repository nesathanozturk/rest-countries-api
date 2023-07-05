import { getCountry } from "@/api";
import { Params } from "@/types";
import CountryDetail from "@/components/CountryDetail";
import BackButton from "@/components/ui/BackButton";

const CountryPage = async ({ params }: Params) => {
  const { name } = params;

  const data = await getCountry(name);

  return (
    <main className="py-10 px-5 md:px-20">
      <BackButton />
      <div className="mt-10">
        <CountryDetail countryDetail={data} />
      </div>
    </main>
  );
};

export default CountryPage;
