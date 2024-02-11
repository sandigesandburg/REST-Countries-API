'use strict';

import { fetchApi } from './fetchApi.js';
import { REST_API_DOMAIN_NAME as DOMAIN } from '../environmentVariables.js';
import { CountryCollection } from './countryCollection.js';

export async function getCountries() {
  const endpoint = '/all/';
  const dataFields = '?fields=name,population,region,capital,flags';
  const url = DOMAIN + endpoint + dataFields;
  const data = await fetchApi(url);

  data.sort((a, b) => a.name.common > b.name.common);
  const countries = data.map((country) => {
    return {
      capital: country.capital[0],
      commonName: country.name.common,
      flagAlt: country.flags.alt,
      flagSrc: country.flags.png,
      officialName: country.name.official,
      population: Intl.NumberFormat('en-US').format(country.population),
      region: country.region === 'Americas' ? 'America' : country.region,
    };
  });

  return new CountryCollection(countries);
}
