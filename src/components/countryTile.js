'use strict';

export function createCountryTile(country) {
  const flag = document.createElement('img');
  flag.className = 'country-flag';
  flag.src = country.flagSrc;
  flag.alt = country.flagAlt;

  const tile = document.createElement('div');
  tile.className = 'country-tile';
  tile.value = country.commonName;
  tile.append(flag);
  tile.append(createCountryDetailsElement(country));
  return tile;
}

function createCountryDetailsElement(country) {
  const block = document.createElement('div');
  block.className = 'details';

  const head = document.createElement('div');
  head.className = 'country-name';
  head.innerText = country.commonName;

  block.append(head);
  block.append(createPropertyElement('Population', country.population));
  block.append(createPropertyElement('Region', country.region));
  block.append(createPropertyElement('Capital', country.capital));
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
