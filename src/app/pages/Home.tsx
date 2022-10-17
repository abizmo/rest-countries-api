import React from 'react';

import { Countries } from '../country/components/Countries/Countries';
import { regions } from '../country/constants';
import useCountries from '../country/hooks/useCountries';

import style from './Home.module.css';

const Home = (): JSX.Element => {
  const { countries, updateSearch, updateFilter } = useCountries();

  return (
    <>
      <div className={`${style.filtersContainer} flex`}>
        <label>
          <i className='fa-solid fa-magnifying-glass'></i>
          <input
            type='text'
            name='search'
            id='search'
            onChange={({ target }) => updateSearch(target.value)}
          />
        </label>
        <select
          name='region'
          onChange={({ target }) => updateFilter(target.value)}
        >
          <option value='' hidden>
            Filter by Region
          </option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <Countries countries={countries} />
    </>
  );
};

export default Home;
