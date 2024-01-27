'use strict';

import { setCountryFlag } from './countryFlag.js';
import { initBorderTabs } from './borderTabs.js';
import { setPropertyValues } from './propertyValues.js';

function presentCountryDetails(data) {
  initBorderTabs(data.borders_fullnames);
  setCountryFlag(data.flags);
  setPropertyValues(data);
}

export { presentCountryDetails };
