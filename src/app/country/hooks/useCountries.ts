import { useState, useEffect, useCallback } from 'react';

import { Country, TUseCountries } from '../domain/country.model';
import { countryService } from '../domain/country.service';
import { countryInstance } from '../infrastructure/country.instance';

const useCountries = (): TUseCountries => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  let countriesToShow = countries;

  const getCountries = useCallback(async () => {
    try {
      const response = await countryService(countryInstance).getCountries();
      setCountries(response);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    void getCountries();
  }, []);

  useEffect(() => {}, [search, filter]);

  const updateSearch = (text: string): void => setSearch(text);
  const updateFilter = (region: string): void => setFilter(region);

  if (filter !== '') {
    countriesToShow = countriesToShow.filter(({ region }) => region === filter);
  }

  if (search !== '') {
    countriesToShow = countriesToShow.filter(({ name }) =>
      name.toLowerCase().match(search.toLowerCase()),
    );
  }

  return { countries: countriesToShow, updateSearch, updateFilter };
};

export default useCountries;
