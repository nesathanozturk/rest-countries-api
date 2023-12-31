"use client";

import { MdOutlineSearch } from "react-icons/md";
import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";
import { ISearchContext } from "@/types";

const Input = () => {
  const { term, setTerm } = useContext(SearchContext) as ISearchContext;

  return (
    <>
      <div className="relative">
        <MdOutlineSearch
          size={18}
          className="text-lminput absolute top-4 left-6"
        />
        <input
          type="text"
          placeholder="Search for a country..."
          className="bg-lmel dark:bg-dmel w-full sm:w-96 py-4 pl-14 rounded-md shadow-md text-xs font-medium focus:outline-none"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </>
  );
};

export default Input;
