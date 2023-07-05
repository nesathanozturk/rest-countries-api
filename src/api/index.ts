import { ICountry } from "@/types";

export const getCountries = async (): Promise<ICountry[]> => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
};

export const getCountry = async (name: string): Promise<ICountry> => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await res.json();
  return data;
};
