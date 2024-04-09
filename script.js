const container = document.querySelector('.container');

for (let i = 0; i <=15; i++) {
  const rowWrapper = document.createElement('div');
  rowWrapper.setAttribute('class', 'row-wrapper');
  container.appendChild(rowWrapper);
  for (let i = 0; i <=15; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    rowWrapper.appendChild(square);
  }
};

const squares = document.querySelectorAll('.square');
//const square = document.querySelector('.square');

const clearGrid = () => {
  while (container.firstChild) {
      container.removeChild(container.firstChild);
  }
}

clearGrid();

const colorSquare = (square) => {
  square.addEventListener('mouseover', () => 
  {
    square.setAttribute("style", "color: red; background: green;")
  });
}

squares.forEach(colorSquare);