/* const gridCount = 16; */
const mainContainer = document.querySelector('#mainContainer');
const gridDivs = [];
const gridRowDivs = [];

for (let i = 0; i < 16; i++) {
    gridRowDivs.push(document.createElement('div'));
    gridRowDivs[i].classList.add('row');
    gridRowDivs[i].setAttribute('id', `row-${i}`);
    mainContainer.appendChild(gridRowDivs[i]);

    gridDivs[i] = [];
        for (j = 0; j < 16; j++) {
            gridDivs[i].push(document.createElement('div'));
            gridDivs[i][j].classList.add('square');
            gridDivs[i][j].setAttribute('id', `square-${i}-${j}`);
            gridRowDivs[i].appendChild(gridDivs[i][j]);
        };
};

const allSquares = document.querySelectorAll('.square');
allSquares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        e.target.style.cssText = 'background-color: white;';
    });
});