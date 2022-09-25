import { Http } from '../../http/domain/http.repository';
import { httpFetch } from '../../http/infrastructure/http.instance';
import { CountryRepository } from '../domain/country.repository';
import { countryRepository } from './country.repository';

const client: Http = httpFetch;

export const countryInstance: CountryRepository = countryRepository(client);
