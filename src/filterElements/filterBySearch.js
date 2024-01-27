'use strict';

function filterBySearch(data) {
  const input = document.querySelector('input');
  return data.filter((element) => {
    const { common, official } = element.name;
    return (
      common.toUpperCase().startsWith(input.lastValue.toUpperCase()) ||
      official.toUpperCase().startsWith(input.lastValue.toUpperCase())
    );
  });
}

export { filterBySearch };
