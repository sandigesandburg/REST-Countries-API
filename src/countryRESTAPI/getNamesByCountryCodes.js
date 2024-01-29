'use strict';

import { fetchApi } from './fetchApi.js';
import { REST_API_DOMAIN_NAME as domainName } from '../environmentVariables.js';

async function getNamesByCountryCodes(countryCodes) {
  if (countryCodes.length === 0) return [];

  const codes = countryCodes.join(',');
  const url = domainName + '/alpha?codes=' + codes + '&fields=name';
  const countries = await fetchApi(url);
  return countries.map((country) => country.name.common).sort();
}

export { getNamesByCountryCodes };
