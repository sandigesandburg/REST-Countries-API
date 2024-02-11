'use strict';

import { getCountryDatails } from '../countryRESTAPI/getCountryDetails.js';
import { initDarkMode } from '../components/darkMode.js';
import { INDEX_URL } from '../environmentVariables.js';
import { createBorderTabs } from '../components/countryTabs.js';

export async function details() {
  const urlParams = new URLSearchParams(window.location.search);
  const country = urlParams.get('country');
  const data = await getCountryDatails(country);

  initDarkMode();

  const button = document.querySelector('#returnButton');
  button.addEventListener('click', () => location.assign(INDEX_URL));

  const country_name = document.querySelector('#countryName');
  country_name.innerHTML = data.commonName;

  const image = document.querySelector('#flag img');
  image.alt = data.flagAlt;
  image.src = data.flagSrc;

  const values = document.querySelectorAll('#propertyValue');
  values[1].innerHTML = data.population;
  values[2].innerHTML = data.region;
  values[0].innerHTML = data.nativeName;
  values[3].innerHTML = data.subregion;
  values[4].innerHTML = data.capital;
  values[5].innerHTML = data.tld;
  values[6].innerHTML = data.currencies;
  values[7].innerHTML = data.languages;

  createBorderTabs(data.borders);
}
