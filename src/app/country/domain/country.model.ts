export interface Country {
  code: string;
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subregion: string;
  tld: string[];
  currencies: string;
  languages: string[];
  borders: string[];
}

export interface TUseCountries {
  countries: Country[];
  updateSearch: (text: string) => void;
  updateFilter: (region: string) => void;
}
