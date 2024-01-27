'use strict';

import {
  getDatailsOfCountry,
  getCountryNamesByCode,
} from '../countryRESTAPI/countryRESTAPI.js';
import { presentCountryDetails } from './presentCountryDetails.js';

async function initCountryDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const country = urlParams.get('country');
  const data = await getDatailsOfCountry(country);
  const border_names = await getCountryNamesByCode(data.borders);
  data.borders_fullnames = border_names;
  presentCountryDetails(data);
}

export { initCountryDetails };
