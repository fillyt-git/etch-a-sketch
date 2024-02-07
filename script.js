let count = 16
const mainContainer = document.querySelector('#mainContainer');
let gridDivs = [];
let gridRowDivs = [];
let allRows;
let allSquares;

function setGrid (count) {
    for (let i = 0; i < count; i++) {
        gridRowDivs.push(document.createElement('div'));
        gridRowDivs[i].classList.add('row');
        gridRowDivs[i].setAttribute('id', `row-${i}`);
        mainContainer.appendChild(gridRowDivs[i]);

        gridDivs[i] = [];
            for (j = 0; j < count; j++) {
                gridDivs[i].push(document.createElement('div'));
                gridDivs[i][j].classList.add('square');
                gridDivs[i][j].setAttribute('id', `square-${i}-${j}`);
                gridRowDivs[i].appendChild(gridDivs[i][j]);
            };
    };

    allRows = document.querySelectorAll('.row');
    allSquares = document.querySelectorAll('.square');

    allSquares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.cssText = 'background-color: white;';
        });
    });
};

setGrid(count);

function clearGrid () {
    allSquares.forEach((square) => {
        square.remove();
    });
    allRows.forEach((row) => {
        row.remove();
    });
};

const gridCount = document.querySelector('#gridCount');
gridCount.addEventListener('click', () => {
    count = prompt('How many squares per side? (Limit: 100)', 16) || count;
    while (count > 100 || count < 1) {
        count = prompt('How many squares per side? (Limit: 100)', 16) || count;
    };
    clearGrid();
    setGrid(count);
});