'use strict';

function setCountryFlag(flags) {
  const image = document.querySelector('#flag img');
  image.alt = flags.alt;
  image.src = flags.png;
}

export { setCountryFlag };
