'use strict';

import { fetchApi } from './fetchApi.js';
import { REST_API_DOMAIN_NAME } from '../environmentVariables.js';

const domainName = REST_API_DOMAIN_NAME;

async function getDataOfCountries(countryName = '') {
  const endpoint = countryName === '' ? '/all/' : '/name/';
  const dataFields = '?fields=name,population,region,capital,flags';
  const url = domainName + endpoint + countryName + dataFields;
  const data = await fetchApi(url);
  correctAmericaRegion(data);
  return data;
}

async function getDatailsOfCountry(countryName) {
  const dataFields =
    '?fullText=true&fields=name,population,region,capital,flags,subregion,tld,currencies,languages,borders';
  const data = await fetchApi(domainName + '/name/' + countryName + dataFields);
  correctAmericaRegion(data);
  return data[0];
}

async function getCountryNamesByCode(countryCodes) {
  if (countryCodes.length === 0) return [];

  const codes = countryCodes.join(',');
  const url = domainName + '/alpha?codes=' + codes + '&fields=name';
  const countries = await fetchApi(url);
  return countries.map((country) => country.name.common);
}

async function getCountriesByRegion(region) {
  const dataFields = '?fields=name,population,region,capital,flags';
  const data = await fetchApi(domainName + '/region/' + region + dataFields);
  correctAmericaRegion(data);
  return data;
}

function correctAmericaRegion(data) {
  data.forEach((element) => {
    if (element.region === 'Americas') element.region = 'America';
  });
}

export {
  getDataOfCountries,
  getDatailsOfCountry,
  getCountryNamesByCode,
  getCountriesByRegion,
};
