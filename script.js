const container = document.querySelector('.container');

const newGrid = (inputValue) => {
  for (let i = 0; i < inputValue; i++) {
    const rowWrapper = document.createElement('div');
    rowWrapper.setAttribute('class', 'row-wrapper');
    container.appendChild(rowWrapper);
    for (let i = 0; i < inputValue; i++) {
      const square = document.createElement('div');
      square.setAttribute('class', 'square');
      rowWrapper.appendChild(square);
    }
  };
}

newGrid(16);

const squares = document.querySelectorAll('.square');

const clearGrid = () => {
  while (container.firstChild) {
      container.removeChild(container.firstChild);
  }
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const colorSquare = (element) => {
  element.addEventListener('mouseover', () => 
  {
    element.setAttribute("style", `background: 
    rgb(${getRandomInt(0, 256)},${getRandomInt(0, 256)},${getRandomInt(0, 256)})`);
  });
}

squares.forEach(colorSquare);

const button = document.querySelector('button');

const sequence = () => {
  let inputValue = prompt(`Please provide a number that will define a new grid dimensions.\nMaximum number is 100.`);
  if (inputValue > 100) {
    alert('alert');
    inputValue = prompt('Please provide a number that will define a new grid dimension');
  }
  clearGrid();
  newGrid(inputValue);
  const squares = document.querySelectorAll('.square');
  squares.forEach(colorSquare);
}

button.addEventListener('click', sequence);