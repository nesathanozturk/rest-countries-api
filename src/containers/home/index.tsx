"use client";

import { useState } from "react";
import Countries from "@/components/Countries";
import Filter from "@/components/Filter";
import { IData } from "@/types";

const HomeContainer = ({ data }: IData) => {
  const [countries, setCountries] = useState(data);

  const filteredCountries = (reg: string) => {
    if (reg === "All") {
      setCountries(data);
      return;
    }
    const filteredCountriesByRegion = countries?.filter(
      (country) => country?.region === reg
    );
    setCountries(filteredCountriesByRegion);
  };

  return (
    <main className="min-h-screen bg-lmgray dark:bg-dmbg text-lmtxt dark:text-dmtext pt-16 py-3 px-2 md:px-20">
      <Filter filteredCountries={filteredCountries} />
      <Countries countries={countries} />
    </main>
  );
};

export default HomeContainer;
