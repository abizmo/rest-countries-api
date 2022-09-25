import { Country } from './country.model';

export interface CountryRepository {
  getCountries: () => Promise<Country[]>;
  getCountryByCode: (code: string) => Promise<Country | {}>;
}
