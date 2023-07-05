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

export interface ICountryDetail extends ICountry {
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
