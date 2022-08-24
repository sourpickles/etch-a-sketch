const gridContainer = document.getElementById("gridContainer");

function makeGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        var row = document.createElement("div");
        row.classList.add("gridRow", "gridBox");
        gridContainer.appendChild(row);
    }
}

function makeColumns(columnNum) {
    for (c = 0; c < columnNum; c++) {
        var column = document.createElement("div");
        column.classList.add("gridColumn", "gridBox");
        gridContainer.appendChild(column);
    }
}

makeGrid();