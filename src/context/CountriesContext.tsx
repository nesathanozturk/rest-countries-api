"use client";

import { createContext, useState } from "react";
import { IContext } from "@/types";

export const CountriesContext = createContext<IContext | null>(null);

function CountriesProvider({ children }: { children: React.ReactNode }) {
  const [countries, setCountries] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[]>([]);

  const valueToShare = {
    countries,
    setCountries,
    regions,
    setRegions,
  };

  return (
    <CountriesContext.Provider value={valueToShare}>
      {children}
    </CountriesContext.Provider>
  );
}

export { CountriesProvider };
