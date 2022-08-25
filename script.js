const gridContainer = document.getElementById("gridContainer");
var rows = document.getElementsByClassName("gridRow");
var gridBox = document.querySelectorAll(".gridBox");

function makeGrid() {
    makeRows();
    makeColumns();
    //Adds missing grid box in the bottom right corner
    var extra = document.createElement("div");
    extra.classList.add("gridBox");
    gridContainer.appendChild(extra);
}

function makeRows(rowNum) {
    gridSize();
    for (r = 0; r < rowNum; r++) {
        var row = document.createElement("div");
        row.classList.add("gridRow", "gridBox");
        gridContainer.appendChild(row);
    }
}

function makeColumns(columnNum) {
    gridSize();
    for (r = 0; r < rows.length; r++) {
        for (c = 0; c < columnNum; c++) {
            var column = document.createElement("div");
            column.classList.add("gridColumn", "gridBox");
            gridContainer.appendChild(column);
        }
    }
}

makeGrid();

gridContainer.addEventListener('mouseover', function (e) {
    if (e.target.matches('.gridBox')) {
        e.target.classList.add('gridColored');
      }
});

function gridSize() {
    var btn = document.querySelectorAll("#gridBtn").value;
    if (btn = "xs") {
        makeRows(8);
        makeColumns(8);
    } else if (btn = "s") {
        makeRows(16);
        makeColumns(16);
    } else if (btn = "m") {
        makeRows(32);
        makeColumns(32);
    } else if (btn = "l") {
        makeRows(64);
        makeColumns(64);
    } else if (btn = "xl") {
        makeRows(124);
        makeColumns(124);
    }
}