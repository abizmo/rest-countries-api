import { CountryRepository } from './country.repository';

export const countryService = (
  repository: CountryRepository,
): CountryRepository => ({
  getCountries: async () => await repository.getCountries(),
  getCountryByCode: async (code) => await repository.getCountryByCode(code),
});
