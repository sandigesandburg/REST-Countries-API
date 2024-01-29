import { initDarkMode } from '../src/components/darkMode.js';
import { initReturnButton } from '../src/components/returnButton.js';
import { getCountryDatails } from '../src/countryRESTAPI/getCountryDetails.js';

const urlParams = new URLSearchParams(window.location.search);
const country = urlParams.get('country');
const data = await getCountryDatails(country);
data.showCountryDetails();

initDarkMode();
initReturnButton();
