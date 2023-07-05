import { IData } from "@/types";
import Country from "./ui/Country";

const Countries = async ({ data }: IData) => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {data?.map((country) => (
          <Country key={country.cca2} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
