import { ICountryProps } from "@/types";
import Image from "next/image";

const Country = ({ country }: ICountryProps) => {
  return (
    <div>
      <div>
        <Image
          src={country?.flags?.png}
          alt={country?.name.official}
          className="max-w-full h-auto"
          width={100}
          height={100}
        />
      </div>
      <h1>{country?.name?.official}</h1>
      <div>
        <h3>
          <span>Population:</span> {country?.population}
        </h3>
        <h3>
          <span>Region:</span> {country?.region}
        </h3>
        <h3>
          <span>Caiptal:</span> {country?.capital}
        </h3>
      </div>
    </div>
  );
};

export default Country;
