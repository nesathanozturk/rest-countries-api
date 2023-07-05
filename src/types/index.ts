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
  borders: string[];
  languages: {
    eng: {
      official: string;
    };
  };
  subregion: string;
  tld: string[];
}

export interface ICountryDetail {
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
  borders: string[];
  subregion: string;
  tld: string[];
}

export interface IData {
  data: ICountry[];
}

export interface ICountries {
  countries: ICountry[];
}

export interface ICountryProps {
  country: ICountry;
}

export interface ICountryDetails {
  countryDetail: ICountryDetail;
}

export interface Params {
  params: { name: string };
}
