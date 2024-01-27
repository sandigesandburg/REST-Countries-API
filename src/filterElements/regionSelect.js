'use strict';

import { getCountriesByRegion } from '../countryRESTAPI/countryRESTAPI.js';
import { createCountryTable } from '../countryTile/createCountryTable.js';
import { getDataOfCountries } from '../countryRESTAPI/countryRESTAPI.js';
import { filterBySearch } from './filterBySearch.js';

function initDropDown() {
  const select = document.querySelector('#select');
  const caret = document.querySelector('#caret');
  const menu = document.querySelector('#menu');
  const options = document.querySelectorAll('#menu li');

  select.value = '';

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach((option) => {
    option.addEventListener('click', (event) => {
      const clickedOption = event.target.className;
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      select.value = '';
      options.forEach((option) => {
        option.classList.remove('active');
      });

      if (clickedOption !== 'active') {
        select.value = event.target.id;
        option.classList.add('active');
      }
    });

    option.addEventListener('click', async (event) => {
      const data =
        event.target.className !== 'active'
          ? await getDataOfCountries()
          : await getCountriesByRegion(event.target.id);
      const data_search = filterBySearch(data);
      createCountryTable(data_search);
    });
  });
}

export { initDropDown };
