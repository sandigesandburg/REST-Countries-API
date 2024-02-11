'use strict';

import { createCountryGrid } from './countryGrid.js';

export function initSearchBar(countries) {
  if (!('searchedValue' in sessionStorage)) {
    sessionStorage.setItem('searchedValue', '');
  }

  const searchField = document.querySelector('#searchField');
  searchField.value = sessionStorage.getItem('searchedValue');
  searchField.lastValue = searchField.value;

  searchField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      searchField.lastValue = searchField.value;
      sessionStorage.setItem('searchedValue', searchField.value.toString());
      createCountryGrid(countries);
    }
  });

  const button = document.querySelector('#searchButton ');
  button.addEventListener('click', () => {
    searchField.lastValue = searchField.value;
    sessionStorage.setItem('searchedValue', searchField.value.toString());
    createCountryGrid(countries);
  });
}
