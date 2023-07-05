export interface ICountry {
  name: {
    official: string;
  };
  capital: string;
  region: string;
  population: number;
  flags: {
    png: string;
  };
  cca2: string;
}

export interface IData {
  data: ICountry[];
}

export interface ICountryProps {
  country: ICountry;
}
