import { CountryRepository } from '../domain/country.repository';
import { Http } from '../../http/domain/http.repository';
import { CountryDTO } from './country.dto';

const BASE_URL = 'https://restcountries.com/v3.1';

export const countryRepository = (client: Http): CountryRepository => ({
  getCountries: async () => {
    try {
      const countries = await client.get<CountryDTO[]>(`${BASE_URL}/all`);

      return countries.map(
        ({ flags, name, population, region, capital, cca3 }: CountryDTO) => ({
          code: cca3,
          flag: flags.png,
          name: name.common,
          population,
          region,
          capital: capital?.[0],
        }),
      );
    } catch (err) {
      console.error(err);
      return [];
    }
  },
  getCountryByCode: async (code) => {
    try {
      const countries: CountryDTO[] = await client.get<CountryDTO[]>(
        `${BASE_URL}/alpha/${code}`,
      );

      return countries.map((country: CountryDTO) => ({
        code: country.cca3,
        flag: country.flags.png,
        name: country.name.common,
        population: country.population,
        region: country.region,
        capital: country.capital?.[0],
        nativeName: Object.values(country.name.nativeName)[0].common,
        subregion: country.subregion,
        tld: country.tld,
        currencies: Object.values(country.currencies)[0].name,
        languages: Object.values(country.languages),
        borders: country.borders,
      }))[0];
    } catch (err) {
      console.error(err);
    }
  },
});
