'use strict';

import { callDetailPage } from '../components/callDetailPage.js';

function createTile(data) {
  const tile = document.createElement('div');
  tile.className = 'country-tile';
  tile.value = data.name.common;
  tile.append(createImageElement(data.flags.png, data.flags.alt));
  tile.append(createDetailsBlock(data));
  tile.addEventListener('click', (event) => {
    callDetailPage(event.currentTarget.value);
  });

  return tile;
}

function createImageElement(imagePath, alt) {
  const flag = document.createElement('img');
  flag.className = 'country-flag';
  flag.src = imagePath;
  flag.alt = alt;
  return flag;
}

function createDetailsBlock(data) {
  const population = Intl.NumberFormat('en-US').format(data.population);
  const block = document.createElement('div');
  block.className = 'details';
  block.append(createHead(data.name.common));
  block.append(createPropertyField('Population', population));
  block.append(createPropertyField('Region', data.region));
  block.append(createPropertyField('Capital', data.capital[0]));
  return block;
}

function createHead(countryName) {
  const head = document.createElement('div');
  head.className = 'country-name';
  head.innerText = countryName;
  return head;
}

function createPropertyField(propName, value) {
  const propertyName = document.createElement('span');
  propertyName.className = 'propertyName';
  propertyName.innerText = propName + ':';

  const propertyValue = document.createElement('span');
  propertyValue.className = 'propertyValue';
  propertyValue.innerText = value;

  const property = document.createElement('div');
  property.className = 'property';
  property.append(propertyName);
  property.append(propertyValue);

  return property;
}

export { createTile };
