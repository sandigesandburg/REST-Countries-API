'use strict';

import { createCountryGrid } from './countryGrid.js';

export function initRegionSelection(countries) {
  const select = document.querySelector('#regionSelect');
  const caret = document.querySelector('#caret');
  const menu = document.querySelector('#menu');
  const options = document.querySelectorAll('#menu li');

  if (!('selectedRegion' in sessionStorage)) {
    sessionStorage.setItem('selectedRegion', '');
  }

  select.value = sessionStorage.getItem('selectedRegion');

  select.addEventListener('click', () => {
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach((option) => {
    if (option.id === select.value) option.classList.add('active');
  });

  options.forEach((option) => {
    option.addEventListener('click', (event) => {
      const clickedOption = event.target.className;
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      select.value = '';

      options.forEach((option) => option.classList.remove('active'));

      if (clickedOption !== 'active') {
        select.value = event.target.id;
        option.classList.add('active');
      }

      sessionStorage.setItem('selectedRegion', select.value);
      createCountryGrid(countries);
    });
  });
}
