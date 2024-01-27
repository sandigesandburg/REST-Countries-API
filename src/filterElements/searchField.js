'use strict';

import { createCountryTable } from '../countryTile/createCountryTable.js';
import { getDataOfCountries } from '../countryRESTAPI/countryRESTAPI.js';
import { filterBySelection } from './filterBySelection.js';
import { filterBySearch } from '././filterBySearch.js';

function initSearchField() {
  const input = document.querySelector('#searchField');

  input.value = '';
  input.lastValue = '';

  input.addEventListener('keyup', async (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      input.lastValue = input.value;
      await createTable(input.value);
    }
  });

  const button = document.querySelector('#searchButton ');
  button.addEventListener('click', async () => {
    input.lastValue = input.value;
    await createTable(input.value);
  });
}

async function createTable(search) {
  const data = await getDataOfCountries(search);
  const data_searched = filterBySearch(data);
  const data_selected = filterBySelection(data_searched);
  createCountryTable(data_selected);
}

export { initSearchField };
