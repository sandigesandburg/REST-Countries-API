'use strict';

export class CountryCollection {
  constructor(data) {
    this.data = data;
  }

  filterByRegion(region) {
    if (region === '') return new CountryCollection(this.data);
    const filteredData = this.data.filter(
      (element) => region === element.region
    );
    return new CountryCollection(filteredData);
  }

  filterByName(name) {
    const nameUpperCase = name.toUpperCase();
    const filteredData = this.data.filter((country) => {
      return (
        country.commonName.toUpperCase().startsWith(nameUpperCase) ||
        country.officialName.toUpperCase().startsWith(nameUpperCase)
      );
    });
    return new CountryCollection(filteredData);
  }

  map(func) {
    return this.data.map(func);
  }
}
