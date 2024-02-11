'use strict';

import { transformCountryDetails } from './createCountryDetails.js';
import { fetchApi } from './fetchApi.js';
import { getNamesByCountryCodes } from './getNamesByCountryCodes.js';
import { REST_API_DOMAIN_NAME as DOMAIN } from '../environmentVariables.js';

export async function getCountryDatails(country) {
  const dataFields =
    '?fullText=true&fields=name,population,region,capital,flags,subregion,' +
    'tld,currencies,languages,borders';
  const data = (await fetchApi(DOMAIN + '/name/' + country + dataFields))[0];
  data.borders = await getNamesByCountryCodes(data.borders);
  return transformCountryDetails(data);
}
