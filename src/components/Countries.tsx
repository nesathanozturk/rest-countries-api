"use client";

import { useContext } from "react";
import Country from "./ui/Country";
import NoCountryFound from "./ui/NoCountryFound";
import { SearchContext } from "@/context/SearchContext";
import { ICountries, ISearchContext } from "@/types";

const Countries = ({ countries }: ICountries) => {
  const { term, setTerm } = useContext(SearchContext) as ISearchContext;

  const isCountryFound = countries?.every(
    (country) => !country.name.common.toLowerCase().includes(term.toLowerCase())
  );

  const filteredCountries = countries
    ?.filter((country) =>
      country?.name?.common.toLowerCase().includes(term.toLowerCase())
    )
    ?.map((country) => <Country key={country.cca2} country={country} />);

  return (
    <>
      {isCountryFound ? (
        <NoCountryFound />
      ) : (
        <section className="mt-12">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
            {filteredCountries}
          </div>
        </section>
      )}
    </>
  );
};

export default Countries;
