"use client";

import { createContext, useState } from "react";
import { ISearchContext } from "@/types";

export const SearchContext = createContext<ISearchContext | null>(null);

function SearchProvider({ children }: { children: React.ReactNode }) {
  const [term, setTerm] = useState<string>("");

  return (
    <SearchContext.Provider value={{ term, setTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchProvider };
