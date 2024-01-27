'use strict';

import { callDetailPage } from '../components/callDetailPage.js';

function createBorderTab(border_name) {
  const tab = document.createElement('div');
  tab.className = 'tab';
  if (border_name.length > 12) {
    tab.classList.add('supertab');
  }
  tab.innerHTML = border_name;
  tab.value = border_name;
  tab.addEventListener('click', (event) => {
    callDetailPage(event.target.value);
  });
  return tab;
}

export { createBorderTab };
