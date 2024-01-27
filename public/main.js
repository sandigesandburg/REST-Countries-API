import { initDarkMode } from '../src/components/darkMode.js';
import { initSearchField } from '../src/filterElements/searchField.js';
import { initDropDown } from '../src/filterElements/regionSelect.js';
import { createCountryTable } from '../src/countryTile/createCountryTable.js';
import { getDataOfCountries } from '../src/countryRESTAPI/countryRESTAPI.js';
import { initScrollPosition } from '../src/components/scrollPosition.js';

initDarkMode();
initSearchField();
initDropDown();
const data = await getDataOfCountries();
createCountryTable(data);
initScrollPosition();
