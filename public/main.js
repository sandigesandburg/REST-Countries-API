import { initDarkMode } from '../src/components/darkMode.js';
import { createCountryGrid } from '../src/countryGrid/countryGrid.js';
import { getDataOfCountries } from '../src/countryRESTAPI/getDataOfCountries.js';
import { initScrollPosition } from '../src/components/scrollPosition.js';
import { initCountryFilter } from '../src/countryFilter/countryFlter.js';

const data = await getDataOfCountries();
initCountryFilter(data);
createCountryGrid(data);
initDarkMode();
initScrollPosition();
