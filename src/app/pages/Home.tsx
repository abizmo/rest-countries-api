import React from 'react';

import { Countries } from '../country/components/Countries/Countries';
import { regions } from '../country/constants';
import useCountries from '../country/hooks/useCountries';
import { Filter } from '../shared/components';

import style from './Home.module.css';

const Home = (): JSX.Element => {
  const { countries, updateSearch, updateFilter } = useCountries();

  return (
    <>
      <div className={`${style.actionsContainer} flex`}>
        <label className={style.searchContainer}>
          <i className='fa-solid fa-magnifying-glass'></i>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search for a country...'
            onChange={({ target }) => updateSearch(target.value)}
          />
        </label>
        <Filter
          label='Filter by Region'
          options={regions}
          onFilter={updateFilter}
        />
      </div>
      <Countries countries={countries} />
    </>
  );
};

export default Home;
