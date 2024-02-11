'use strict';

import { DETAIL_URL } from '../environmentVariables.js';

export function goToDetails(countryName) {
  const urlParams = new URLSearchParams();
  urlParams.set('country', countryName);
  location.assign(DETAIL_URL + '?' + urlParams.toString());
}
