const container = document.querySelector('.container');
const button = document.querySelector('button');
const defaultGrid = 16;

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

newGrid(defaultGrid);

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
    element.setAttribute('style', `background: 
    rgb(${getRandomInt(0, 256)},${getRandomInt(0, 256)},${getRandomInt(0, 256)})`);
  });
}

squares.forEach(colorSquare);

const promptRequest = () => {
  do {
    let inputValue = prompt(`Please provide a single number that will define a new grid dimensions.\nMaximum number is 100.`);
    if (inputValue <= 100 && inputValue != null && inputValue != '') {
      return inputValue
    } else {
      alert('The value that you provided is not correct.');
      return promptRequest();
    }
  } while (inputValue > 100);
  }

const colorSquares = () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(colorSquare);
}

const changeGridSize = () => {
  clearGrid();
  newGrid(promptRequest());
  colorSquares();
}

button.addEventListener('click', changeGridSize);