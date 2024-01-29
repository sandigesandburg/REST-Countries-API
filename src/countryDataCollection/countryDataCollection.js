'use strict';

import { createCountryTile } from './countryTile.js';
import { goToCountryDetailsPage } from '../components/goToCountryDetailsPage.js';

class CountryDataCollection {
  constructor(data) {
    this.data = data;
  }

  filterByRegion(region) {
    if (region === '') return new CountryDataCollection(this.data);
    const new_data = this.data.filter((element) => region === element.region);
    return new CountryDataCollection(new_data);
  }

  filterByName(name) {
    const nameUpperCase = name.toUpperCase();
    const new_data = this.data.filter((element) => {
      const { common, official } = element.name;
      const commonMatch = common.toUpperCase().startsWith(nameUpperCase);
      const officialMatch = official.toUpperCase().startsWith(nameUpperCase);
      return commonMatch || officialMatch;
    });
    return new CountryDataCollection(new_data);
  }

  createGrid() {
    const countryTiles = this.data.map((element) => createCountryTile(element));
    countryTiles.forEach((tile) => {
      tile.addEventListener('click', (event) => {
        goToCountryDetailsPage(event.currentTarget.value);
      });
    });
    const container = document.querySelector('#countryContainer');
    container.replaceChildren(...countryTiles);
  }
}

export { CountryDataCollection };
