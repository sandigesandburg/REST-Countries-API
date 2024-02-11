'use strict';

import { goToDetails } from './goToDetails.js';

export function createBorderTabs(countries) {
  const container = document.querySelector('#bordersContainer');
  const tabs = countries.map((country) => createBorderTab(country));
  container.replaceChildren(...tabs);
}

function createBorderTab(countryName) {
  const tab = document.createElement('div');
  tab.className = 'tab';
  if (countryName.length > 12) tab.classList.add('supertab');
  tab.innerHTML = countryName;
  tab.value = countryName;
  tab.addEventListener('click', (event) => goToDetails(event.target.value));
  return tab;
}
