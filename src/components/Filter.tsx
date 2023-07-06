import Select from "./ui/Select";
import Input from "./ui/Input";
import { IFilteredCountries } from "@/types";

const Filter = ({ filteredCountries }: IFilteredCountries) => {
  return (
    <section className="flex gap-10 sm:gap-0 flex-col sm:flex-row justify-between">
      <Input />
      <Select filteredCountries={filteredCountries} />
    </section>
  );
};

export default Filter;
