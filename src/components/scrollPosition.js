'use strict';

function initScrollPosition() {
  const key = 'scrollPosition_' + document.location.pathname;
  document.documentElement.scrollTop = sessionStorage.getItem(key);

  window.onbeforeunload = () => {
    sessionStorage.setItem(key, document.documentElement.scrollTop.toString());
  };
}

export { initScrollPosition };
