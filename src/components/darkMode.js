'use strict';

export function initDarkMode() {
  const toggle = document.querySelector('#darkMode');

  if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
  }

  toggle.addEventListener('click', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
}

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', 'disabled');
};
