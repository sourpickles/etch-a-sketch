const gridContainer = document.getElementById("gridContainer");
var rows = document.getElementsByClassName("gridRow");
var gridBox = document.querySelectorAll(".gridBox");

function makeGrid() {
    makeRows(15);
    makeColumns(16);
    //Adds missing grid box in the bottom right corner
    var extra = document.createElement("div");
    extra.classList.add("gridBox");
    gridContainer.appendChild(extra);
}

function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        var row = document.createElement("div");
        row.classList.add("gridRow", "gridBox");
        gridContainer.appendChild(row);
    }
}

function makeColumns(columnNum) {
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
