import { ICountryProps } from "@/types";
import Image from "next/image";

const Country = ({ country }: ICountryProps) => {
  return (
    <div className="bg-lmel shadow-sm rounded-md">
      <div className="aspect-video w-full relative">
        <Image
          src={country?.flags?.png}
          alt={country?.name.common}
          className="max-w-full object-cover"
          fill={true}
        />
      </div>
      <div className="p-6">
        <h1 className="font-bold mb-4">{country?.name?.common}</h1>
        <h3>
          <span className="font-semibold ">Population:</span>{" "}
          {country?.population}
        </h3>
        <h3>
          <span className="font-semibold ">Region:</span> {country?.region}
        </h3>
        <h3>
          <span className="font-semibold ">Capital:</span>{" "}
          {country?.capital ? country?.capital : "N/A"}
        </h3>
      </div>
    </div>
  );
};

export default Country;
