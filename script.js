const mainContainer = document.querySelector('#mainContainer');

/* const gridCount = . . . */
/* const gridRow = []; */
/* for (let i = 0; i < 16; i++) { 
    for (let j = 0; j < 16; i++) {
        gridRow[i].push(document.createElement(`div-${j}`));
         */
    


const gridDivs = [];
const gridRowDivs = []

for (let i = 0; i < 16; i++) {
    gridRowDivs.push(document.createElement(`rowDiv-${i}`));
    mainContainer.appendChild(gridRowDivs[i]);
};

for (let i = 0; i < 16; i++) {
    gridDivs[i] = [];
        for (j = 0; j < 16; j++) {
            gridDivs[i].push(document.createElement(`div-${i}-${j}`));
            gridRowDivs[i].appendChild(gridDivs[i][j]);
        };
};




    
    
    
    
    
    
    
    
    
    
    
/*     .push(document.createElement(`row-${i}`));
    mainContainer.appendChild(gridRow[i]);
}; */

/* const gridCol = []

for (let j = 0; j < 0; i++) {
    for (let i = 0; i < 16; i++) {
        gridCol.push(document.createElement(`col-${i}`));
        gridRow[j].appendChild(gridCol[i]);
    };
};
 */

console.log(gridDivs);

/* const a = []

for (i = 0; i < 16; i++) {

    a[i] = [];

    for (j = 0; j < 16; j++) {

        a[i].push(j);

    };
};

console.log(a); */