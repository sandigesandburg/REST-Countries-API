'use strict';

import { fetchApi } from './fetchApi.js';
import { REST_API_DOMAIN_NAME as domainName } from '../environmentVariables.js';
import { CountryDataCollection } from '../countryDataCollection/countryDataCollection.js';

async function getDataOfCountries() {
  const endpoint = '/all/';
  const dataFields = '?fields=name,population,region,capital,flags';
  const url = domainName + endpoint + dataFields;
  const data = await fetchApi(url);

  data.forEach((element) => {
    if (element.region === 'Americas') element.region = 'America';
  });

  data.sort((a, b) => a.name.common > b.name.common);
  return new CountryDataCollection(data);
}

export { getDataOfCountries };
