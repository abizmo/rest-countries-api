import React, { useCallback, useEffect, useState } from 'react';

import { Country } from '../../domain/country.model';
import { countryService } from '../../domain/country.service';
import { countryInstance } from '../../infrastructure/country.instance';

import styles from './Countries.module.css';

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
    <ul className={styles.container} role='list'>
      {countries.map((country) => (
        <li key={country.name}>
          <div className={styles.card}>
            <img
              src={country.flag}
              alt={country.name}
              className={styles.cardImage}
            />
            <div className={styles.cardBody}>
              <h3 className={`${styles.cardTitle} | bold fs-600`}>
                {country.name}
              </h3>
              <ul className={styles.cardDetails} role='list'>
                <li className='fs-400'>
                  <span className='medium'>Population: </span>
                  {country.population.toLocaleString()}
                </li>
                <li>
                  <span className='medium'>Region: </span>
                  {country.region}
                </li>
                <li>
                  <span className='medium'>Capital: </span>
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