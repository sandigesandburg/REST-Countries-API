'use strict';

import { INDEX_URL } from '../environmentVariables.js';

function initReturnButton() {
  const button = document.querySelector('#returnButton');
  button.addEventListener('click', () => {
    location.assign(INDEX_URL);
  });
}

export { initReturnButton };
