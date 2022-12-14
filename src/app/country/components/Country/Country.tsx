import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../../shared/components';

import type { Country as CountryType } from '../../domain/country.model';
import { countryService } from '../../domain/country.service';
import { countryInstance } from '../../infrastructure/country.instance';

import style from './Country.module.css';

export const Country = (): JSX.Element => {
  const [country, setCountry] = useState<CountryType>();
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const getCountry = useCallback(async () => {
    try {
      const response = await countryService(countryInstance).getCountryByCode(
        countryCode as string,
      );
      setCountry(response);
    } catch (err) {
      console.error(err);
    }
  }, [countryCode]);

  useEffect(() => {
    void getCountry();
  }, [countryCode]);

  if (country == null) return <p>loading...</p>;

  return (
    <div>
      <Button size='big' onClick={() => navigate(-1)}>
        <i className='fa-solid fa-arrow-left'></i> Back
      </Button>
      <div className={style.countryContainer}>
        <img
          src={country.flag}
          alt={country.name}
          className={style.countryFlag}
        />
        <div className={style.countryInfo}>
          <h2 className='fs-700 bold mb-2'>{country.name}</h2>
          <div className={style.countryDetails}>
            <ul role='list'>
              <li>
                <span className='medium'>Native Name: </span>
                {country.nativeName}
              </li>
              <li>
                <span className='medium'>Population: </span>
                {country.population.toLocaleString()}
              </li>
              <li>
                <span className='medium'>Region: </span>
                {country.region}
              </li>
              <li>
                <span className='medium'>Sub Region: </span>
                {country.subregion}
              </li>
              <li>
                <span className='medium'>Capital: </span>
                {country.capital}
              </li>
            </ul>
            <ul role='list'>
              <li>
                <span className='medium'>Top Level Domain: </span>
                {country.tld.join(' ')}
              </li>
              <li>
                <span className='medium'>Currencies: </span>
                {country.currencies}
              </li>
              <li>
                <span className='medium'>Languages: </span>
                {country.languages.join(', ')}
              </li>
            </ul>
          </div>
          <div className={style.countryBorders}>
            <h3 className='medium fs-500'>Border Countries:</h3>
            <div className={style.borders}>
              {country.borders?.map(({ code, name }) => (
                <Button key={code} to={`../country/${code}`}>
                  {name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
