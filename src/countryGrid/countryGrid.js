'use strict';

function createCountryGrid(countryDataCollection) {
  let regionSelection = '';
  let searchValue = '';

  if ('value' in document.querySelector('#regionSelect'))
    regionSelection = document.querySelector('#regionSelect').value;

  if ('lastValue' in document.querySelector('#searchField'))
    searchValue = document.querySelector('#searchField').lastValue;

  countryDataCollection
    .filterByName(searchValue)
    .filterByRegion(regionSelection)
    .createGrid();
}

export { createCountryGrid };
