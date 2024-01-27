'use strict';

import { createBorderTab } from './borderTab.js';

function initBorderTabs(borders) {
  if (borders.length === 0) return;
  const borders_container = document.querySelector('#bordersContainer');
  const tabs = borders.sort().map((border) => createBorderTab(border));
  borders_container.replaceChildren(...tabs);
}

export { initBorderTabs };
