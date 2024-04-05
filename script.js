const container = document.querySelector('.container');

for (let i = 0; i <=15; i++) {
  const rowWrapper = document.createElement('div');
  rowWrapper.setAttribute('class', 'row-wrapper');
  container.appendChild(rowWrapper);
};