'use srict';
'use strict';

import { createCountryGrid } from '../components/countryGrid.js';
import { getCountries } from '../countryRESTAPI/getCountries.js';
import { initDarkMode } from '../components/darkMode.js';
import { initRegionSelection } from '../components/select.js';
import { initSearchBar } from '../components/searchField.js';

export async function home() {
  const data = await getCountries();
  initRegionSelection(data);
  initSearchBar(data);
  createCountryGrid(data);
  initDarkMode();

  const key = 'scrollPosition_' + document.location.pathname;
  window.scrollTo(0, sessionStorage.getItem(key));

  window.onbeforeunload = () => {
    sessionStorage.setItem(key, window.scrollY.toString());
  };
}
