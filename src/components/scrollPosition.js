'use strict';

function initScrollPosition() {
  const pathName = document.location.pathname;
  const key = 'scrollPosition_' + pathName;

  document.documentElement.scrollTop = sessionStorage.getItem(key);

  window.onbeforeunload = () => {
    const scrollTop = document.documentElement.scrollTop;
    sessionStorage.setItem(key, scrollTop.toString());
  };
}

export { initScrollPosition };
