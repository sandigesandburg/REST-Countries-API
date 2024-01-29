'use strict';

function createCountryTile(countryData) {
  const flag = document.createElement('img');
  flag.className = 'country-flag';
  flag.src = countryData.flags.png;
  flag.alt = countryData.flags.alt;

  const tile = document.createElement('div');
  tile.className = 'country-tile';
  tile.value = countryData.name.common;
  tile.append(flag);
  tile.append(createCountryDetailsElement(countryData));
  return tile;
}

function createCountryDetailsElement(countryData) {
  const population = Intl.NumberFormat('en-US').format(countryData.population);
  const block = document.createElement('div');
  block.className = 'details';

  const head = document.createElement('div');
  head.className = 'country-name';
  head.innerText = countryData.name.common;

  block.append(head);
  block.append(createPropertyElement('Population', population));
  block.append(createPropertyElement('Region', countryData.region));
  block.append(createPropertyElement('Capital', countryData.capital[0]));
  return block;
}

function createPropertyElement(name, value) {
  const propertyName = document.createElement('span');
  propertyName.className = 'propertyName';
  propertyName.innerText = name + ':';

  const propertyValue = document.createElement('span');
  propertyValue.className = 'propertyValue';
  propertyValue.innerText = value;

  const property = document.createElement('div');
  property.className = 'property';
  property.append(propertyName);
  property.append(propertyValue);

  return property;
}

export { createCountryTile };
