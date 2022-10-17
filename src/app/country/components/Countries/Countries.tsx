import React from 'react';
import { Link } from 'react-router-dom';

import { Country } from '../../domain/country.model';

import styles from './Countries.module.css';

export const Countries = ({
  countries,
}: {
  countries: Country[];
}): JSX.Element => (
  <ul className={styles.container} role='list'>
    {countries.map((country) => (
      <li key={country.code} className={styles.card}>
        <Link to={`country/${country.code}`}>
          <div className={styles.cardHeader}>
            <img
              src={country.flag}
              alt={country.name}
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardBody}>
            <h3 className={`${styles.cardTitle} | bold fs-600`}>
              {country.name}
            </h3>
            <ul className={`${styles.cardDetails} | fs-400`} role='list'>
              <li>
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
        </Link>
      </li>
    ))}
  </ul>
);
