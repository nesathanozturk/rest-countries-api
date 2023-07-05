import { ICountryProps } from "@/types";
import Image from "next/image";

const Country = ({ country }: ICountryProps) => {
  return (
    <div className="bg-lm-el shadow-sm rounded-md">
      <div>
        <Image
          src={country?.flags?.png}
          alt={country?.name.common}
          width={500}
          height={500}
        />
      </div>
      <div className="p-6">
        <h1 className="font-bold text-lm-txt mb-4">{country?.name?.common}</h1>
        <h3>
          <span className="font-semibold text-lm-txt ">Population:</span>{" "}
          {country?.population}
        </h3>
        <h3>
          <span className="font-semibold text-lm-txt ">Region:</span>{" "}
          {country?.region}
        </h3>
        <h3>
          <span className="font-semibold text-lm-txt ">Caiptal:</span>{" "}
          {country?.capital}
        </h3>
      </div>
    </div>
  );
};

export default Country;
