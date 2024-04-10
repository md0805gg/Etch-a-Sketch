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

const colorSquare = (element) => {
  element.addEventListener('mouseover', () => 
  {
    element.setAttribute("style", "color: red; background: green;")
  });
}

squares.forEach(colorSquare);



const button = document.querySelector('button');

const sequence = () => {
  clearGrid();
  newGrid(5);
  squares.forEach(colorSquare);
}

button.addEventListener('click', sequence);