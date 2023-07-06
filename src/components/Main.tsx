"use client";

import { useState } from "react";
import { IData } from "@/types";
import Countries from "./Countries";
import Filter from "./Filter";

const Main = ({ data }: IData) => {
  const [countries, setCountries] = useState(data);

  return (
    <main className="bg-lmgray dark:bg-dmbg pt-16 px-5 md:px-20 text-lmtxt dark:text-dmtext">
      <Filter />
      <Countries countries={countries} />
    </main>
  );
};

export default Main;
