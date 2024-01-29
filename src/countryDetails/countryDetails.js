'use strict';

import { goToCountryDetailsPage } from '../components/goToCountryDetailsPage.js';

class CountryDetails {
  constructor(countryData) {
    this.data = countryData;
  }

  showCountryDetails() {
    this.#setDetails();
    this.#createBorderTabs();
  }

  #createBorderTabs() {
    const container = document.querySelector('#bordersContainer');
    const borders = this.data.borders;
    const tabs = borders.map((border) => this.#createBorderTab(border));
    container.replaceChildren(...tabs);
  }

  #createBorderTab(border_name) {
    const tab = document.createElement('div');
    tab.className = 'tab';
    if (border_name.length > 12) tab.classList.add('supertab');
    tab.innerHTML = border_name;
    tab.value = border_name;
    tab.addEventListener('click', (event) =>
      goToCountryDetailsPage(event.target.value)
    );
    return tab;
  }

  #setDetails() {
    const country_name = document.querySelector('#countryName');
    country_name.innerHTML = this.data.commonName;

    const image = document.querySelector('#flag img');
    image.alt = this.data.flags.alt;
    image.src = this.data.flags.png;

    const values = document.querySelectorAll('#propertyValue');
    values[1].innerHTML = this.data.population;
    values[2].innerHTML = this.data.region;
    values[0].innerHTML = this.data.nativeName;
    values[3].innerHTML = this.data.subregion;
    values[4].innerHTML = this.data.capital;
    values[5].innerHTML = this.data.tld;
    values[6].innerHTML = this.data.currencies;
    values[7].innerHTML = this.data.languages;
  }
}

export { CountryDetails };
