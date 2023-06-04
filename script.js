const cell = document.querySelectorAll('.cell');
const squareGrid = document.querySelector('.squaregrid');
const fourByFour = document.querySelector('.four-by-four');
const eightByEight = document.querySelector('.eight-by-eight');
const sixteenBySixteen = document.querySelector('.sixteen-by-sixteen');

function randomColor() {
    //hsl values
    let h = Math.floor(Math.random() * (180 - 100) + 100);
    let s = Math.floor(Math.random() * (40 - 20) + 20);
    let l = Math.floor(Math.random() * (60 - 40) + 40);
    return `hsl(${h},${s}%,${l}%)`;
}

for (let i = 0; i < cell.length; i++) {
    cell[i].style.backgroundColor = randomColor();
}

function chg(cell) {
    cell.style.backgroundColor = randomColor();
}

function makeGrid(height, width) {
    squareGrid.innerHTML = '';
    squareGrid.style.setProperty('grid-template-columns',`repeat(${height}, 1fr)`);
    squareGrid.style.setProperty('grid-template-rows',`repeat(${width}, 1fr)`);

    for (let h = 1; h <= height; h++) {
        squareGrid.innerHTML += `<div onmouseover="chg(this)" class="cell"></div>`;
        for (let w = 1; w <= width; w++) {
            squareGrid.innerHTML += `<div onmouseover="chg(this)" class="cell"></div>`
        }
    }   
}

fourByFour.addEventListener('click', () => makeGrid(4,4));
eightByEight.addEventListener('click', () => makeGrid(8,8));
sixteenBySixteen.addEventListener('click', () => makeGrid(16,16));
