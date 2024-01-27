'use strict';

import { getKeyByValue } from '../components/getKeyByValue.js';

function setPropertyValues(data) {
  const country_name = document.querySelector('#countryName');
  country_name.innerHTML = data.name.common;

  const values = document.querySelectorAll('#propertyValue');
  const first_language = Object.values(data.languages).sort()[0];
  const currencies = Object.values(data.currencies);
  const key = getKeyByValue(data.languages, first_language);

  if (key in data.name.nativeName) {
    values[0].innerHTML = data.name.nativeName[key].common;
  } else if (key) {
    values[0].innerHTML = Object.values(data.name.nativeName)[0].common;
  } else {
    values[0].innerHTML = '';
  }

  values[1].innerHTML = Intl.NumberFormat('en-US').format(data.population);
  values[2].innerHTML = data.region;
  values[3].innerHTML = data.subregion;
  values[4].innerHTML = data.capital;
  values[5].innerHTML = data.tld[0];
  values[6].innerHTML = currencies.length > 0 ? currencies[0].name : '';
  values[7].innerHTML = Object.values(data.languages).sort().join(', ');
}

export { setPropertyValues };
