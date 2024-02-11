'use strict';

import { createCountryTile } from './countryTile.js';
import { goToDetails } from './goToDetails.js';

export function createCountryGrid(countries) {
  let regionSelection = '';
  let searchValue = '';

  if ('value' in document.querySelector('#regionSelect'))
    regionSelection = document.querySelector('#regionSelect').value;

  if ('lastValue' in document.querySelector('#searchField'))
    searchValue = document.querySelector('#searchField').lastValue;

  const filteredCountries = countries
    .filterByName(searchValue)
    .filterByRegion(regionSelection);

  const countryTiles = filteredCountries.map((country) => {
    const tile = createCountryTile(country);
    tile.addEventListener('click', (event) =>
      goToDetails(event.currentTarget.value)
    );
    return tile;
  });

  const container = document.querySelector('#countryContainer');
  container.replaceChildren(...countryTiles);
}
