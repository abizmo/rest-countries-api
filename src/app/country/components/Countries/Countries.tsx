import React, { useCallback, useEffect, useState } from 'react';
import { Country } from '../../domain/country.model';
import { countryService } from '../../domain/country.service';
import { countryInstance } from '../../infrastructure/country.instance';

export const Countries: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

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

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.code}>
          <div>
            <img src={country.flag} alt={country.name} />
            <div>
              <h3>{country.name}</h3>
              <ul>
                <li>
                  <span>Population: </span>
                  {country.population}
                </li>
                <li>
                  <span>Region: </span>
                  {country.region}
                </li>
                <li>
                  <span>Capital: </span>
                  {country.capital}
                </li>
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
