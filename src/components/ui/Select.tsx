"use client";

import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { IFilteredCountries } from "@/types";

const Select = ({ filteredCountries }: IFilteredCountries) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div className="relative">
        <div
          onClick={handleMenuOpen}
          className="bg-lmel dark:bg-dmel w-44 p-4 px-5 rounded-md flex justify-between items-center shadow-sm cursor-pointer"
        >
          <h1 className="text-xs font-semibold">Filter by Region</h1>
          <FaAngleDown size={13} />
        </div>
        <div
          className={`bg-lmel dark:bg-dmel w-44 absolute top-12 p-4 px-6 rounded-md mt-1 font-semibold text-xs shadow-sm z-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul>
            <li onClick={() => filteredCountries("All")} className="mb-2">
              All
            </li>
            <li onClick={() => filteredCountries("Africa")} className="mb-2">
              Africa
            </li>
            <li onClick={() => filteredCountries("Americas")} className="mb-2">
              America
            </li>
            <li onClick={() => filteredCountries("Asia")} className="mb-2">
              Asia
            </li>
            <li onClick={() => filteredCountries("Europe")} className="mb-2">
              Europe
            </li>
            <li onClick={() => filteredCountries("Oceania")}>Oceania</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Select;
