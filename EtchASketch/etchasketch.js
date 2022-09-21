//Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
    //Creates rows
    for (r = 0; r < rowNum; r++) {
        const row = document.createElement("div");
        console.log(container)
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            const newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(16);
    makeColumns(16); 
}

defaultGrid();


