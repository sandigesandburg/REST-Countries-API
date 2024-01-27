'use strict';

import { createTile } from './countryTile.js';

async function createCountryTable(data) {
  data.sort((a, b) => {
    return a.name.common > b.name.common;
  });

  const newTiles = data.map((country_data) => {
    return createTile(country_data);
  });

  const container = document.querySelector('#countryContainer');
  container.replaceChildren(...newTiles);
}

export { createCountryTable };
