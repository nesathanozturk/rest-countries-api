import Image from "next/image";
import { ICountryDetails } from "@/types";

const CountryDetail = ({ countryDetail }: ICountryDetails) => {
  const getCountryBorder = !countryDetail.borders ? (
    <p className="text-lg font-semibold">No border countries</p>
  ) : (
    <>
      {countryDetail?.borders?.map((border, i) => (
        <div
          key={i}
          className="bg-lmel dark:bg-dmel w-24 h-8 rounded-md shadow-md text-center p-0.5"
        >
          {border}
        </div>
      ))}
    </>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-2/3">
          <Image
            src={countryDetail?.flags?.png}
            alt={countryDetail?.name.common}
            className="object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-full md:w-1/2 py-10 md:ml-10">
          <h1 className="text-3xl font-bold mb-10">
            {countryDetail.name?.common}
          </h1>
          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <p className="mb-3">
                <span className="font-semibold">Native Name: </span>
                {countryDetail.name?.common}
              </p>
              <p className="mb-3">
                <span className="font-semibold">Population: </span>
                {countryDetail?.population?.toLocaleString()}
              </p>
              <p className="mb-3">
                <span className="font-semibold">Region: </span>
                {countryDetail?.region}
              </p>
              <p className="mb-3">
                <span className="font-semibold">Sub Region: </span>
                {countryDetail?.subregion}
              </p>
              <p className="mb-3">
                <span className="font-semibold">Capital: </span>
                {countryDetail?.capital}
              </p>
            </div>
            <div>
              <p className="mb-5">
                <span className="font-semibold">Top Level Domain: </span>
                {countryDetail?.tld}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            <h2 className="text-lg font-semibold">Border Countries:</h2>
            {getCountryBorder}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
