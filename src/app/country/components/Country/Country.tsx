import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import type { Country as CountryType } from '../../domain/country.model';
import { countryService } from '../../domain/country.service';
import { countryInstance } from '../../infrastructure/country.instance';

export const Country = (): JSX.Element => {
  const [country, setCountry] = useState<CountryType>();
  const { countryCode } = useParams();

  const getCountry = useCallback(async () => {
    try {
      const response = await countryService(countryInstance).getCountryByCode(
        countryCode as string,
      );
      setCountry(response);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    void getCountry();
  }, []);

  return <div>{country?.name}</div>;
};
