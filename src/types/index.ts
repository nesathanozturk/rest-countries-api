export interface ICountry {
  name: {
    common: string;
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

export interface IContext {
  countries: string[];
  setCountries: React.Dispatch<React.SetStateAction<string[]>>;
  regions: string[];
  setRegions: React.Dispatch<React.SetStateAction<string[]>>;
}
