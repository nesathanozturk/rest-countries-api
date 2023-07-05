import { ICountryDetails } from "@/types";
import Image from "next/image";

const CountryDetail = ({ countryDetail }: ICountryDetails) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 relative">
          <Image
            src={countryDetail.flags?.png}
            alt={countryDetail.name?.common}
            className="object-cover"
            width={700}
            height={500}
          />
        </div>
        <div className="py-10 ml-10">
          <h1 className="text-3xl font-bold mb-10">
            {countryDetail.name?.common}
          </h1>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2">
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
        </div>
      </div>
      {/* <h2 className="text-xl font-bold mb-5">Border Countries:</h2> */}
      {/* <div className="flex flex-wrap gap-2">
        {countryDetail?.borders?.map((border) => (
          <div
            key={border}
            className="bg-gray-200 px-5 py-2 rounded-md shadow-md"
          >
            {border}
          </div>
        ))}
        ;
      </div> */}
    </>
  );
};

export default CountryDetail;
