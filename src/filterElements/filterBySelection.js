'use strict';

function filterBySelection(data) {
  const select = document.querySelector('#select');

  if (select.value === '') {
    return data;
  }

  const filered_data = data.filter(
    (element) => select.value === element.region
  );

  return filered_data;
}

export { filterBySelection };
