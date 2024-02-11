'use strict';

export function transformCountryDetails(country) {
  function getCurrencies(country) {
    const currencies = Object.values(country.currencies);
    if (currencies.length === 0) return '';
    return currencies[0].name;
  }

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  function getLanguages(country) {
    return Object.values(country.languages).sort().join(', ');
  }

  function getNativeName(country) {
    const languages = Object.values(country.languages).sort();

    if (languages.length === 0) return '';

    const key = getKeyByValue(country.languages, languages[0]);
    if (!(key in country.name.nativeName))
      return Object.values(country.name.nativeName)[0].common;

    return country.name.nativeName[key].common;
  }

  function getPopulation(country) {
    return Intl.NumberFormat('en-US').format(country.population);
  }

  function getRegion(country) {
    if (country.region === 'Americas') return 'America';
    return country.region;
  }

  return {
    borders: country.borders.sort(),
    capital: country.capital,
    commonName: country.name.common,
    currencies: getCurrencies(country),
    flagAlt: country.flags.alt,
    flagSrc: country.flags.png,
    languages: getLanguages(country),
    nativeName: getNativeName(country),
    population: getPopulation(country),
    region: getRegion(country),
    subregion: country.subregion,
    tld: country.tld[0],
  };
}
