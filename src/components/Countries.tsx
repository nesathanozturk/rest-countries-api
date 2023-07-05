import { IData } from "@/types";
import Country from "./ui/Country";

const Countries = async ({ data }: IData) => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
        {data?.map((country) => (
          <Country key={country.cca2} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
