'use strict';
import { initRegionSelection } from './regionSelection.js';
import { initSearchBar } from './countrySearch.js';

function initCountryFilter(countryDataCollection) {
  initRegionSelection(countryDataCollection);
  initSearchBar(countryDataCollection);
}

export { initCountryFilter };
