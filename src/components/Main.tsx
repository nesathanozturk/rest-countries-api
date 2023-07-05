"use client";

import { IData } from "@/types";
import Countries from "./Countries";
import Filter from "./Filter";
import { useState } from "react";

const Main = ({ data }: IData) => {
  const [countries, setCountries] = useState(data);

  return (
    <>
      <Filter />
      <Countries countries={countries} />
    </>
  );
};

export default Main;
