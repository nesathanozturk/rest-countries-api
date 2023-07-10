import BackButton from "@/components/ui/BackButton";
import CountryDetail from "@/components/CountryDetail";
import Header from "@/components/Header";
import { getCountry } from "@/api";
import { ICountryDetailProps } from "@/types";

const CountryContainer = ({ data }: ICountryDetailProps) => {
  return (
    <>
      <div className="mb-10">
        <BackButton />
      </div>
      <CountryDetail countryDetail={data} />
    </>
  );
};

export default CountryContainer;
