'use strict';

import { fetchApi } from './fetchApi.js';
import { REST_API_DOMAIN_NAME as domainName } from '../environmentVariables.js';
import { getNamesByCountryCodes } from './getNamesByCountryCodes.js';
import { CountryDetails } from '../countryDetails/countryDetails.js';

async function getCountryDatails(countryName) {
  const dataFields =
    '?fullText=true&fields=name,population,region,capital,flags,subregion,' +
    'tld,currencies,languages,borders';
  const data = await fetchApi(domainName + '/name/' + countryName + dataFields);
  const borders = await getNamesByCountryCodes(data[0].borders);

  const countryData = {
    borders: borders.sort(),
    capital: data[0].capital,
    currencies: getCurrencies(data[0]),
    commonName: data[0].name.common,
    flags: data[0].flags,
    languages: getLanguages(data[0]),
    nativeName: getNativeName(data[0]),
    population: getPopulation(data[0]),
    region: getRegion(data[0]),
    subregion: data[0].subregion,
    tld: data[0].tld,
  };
  return new CountryDetails(countryData);
}

function getCurrencies(data) {
  const currencies = Object.values(data.currencies);
  if (currencies.length === 0) return '';
  return currencies[0].name;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function getLanguages(data) {
  return Object.values(data.languages).sort().join(', ');
}

function getNativeName(data) {
  const languages = Object.values(data.languages).sort();

  if (languages.length === 0) return '';

  const key = getKeyByValue(data.languages, languages[0]);
  if (!(key in data.name.nativeName))
    return Object.values(data.name.nativeName)[0].common;

  return data.name.nativeName[key].common;
}

function getPopulation(data) {
  return Intl.NumberFormat('en-US').format(data.population);
}

function getRegion(data) {
  if (data.region === 'Americas') return 'America';
  return data.region;
}

export { getCountryDatails };
