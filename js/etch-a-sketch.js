"use strict";
const STARTINGCOLOR = "#FFFFFF";
const SKETCHCOLOR = "#000000";

const gridContainer = document.querySelector("#gridContainer");
const menuContainer = document.querySelector("#menuContainer");
const width = gridContainer.clientWidth;

populateGrid(50);

gridContainer.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("grid")) {
    e.target.style.backgroundColor = SKETCHCOLOR;
  }
});

menuContainer.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "sizeButton":
      let gridSize = getNewGridSize();
      gridContainer
        .querySelectorAll(".column")
        .forEach((column) => column.remove());
      populateGrid(gridSize);
      break;
    case "clearButton":
      document
        .querySelectorAll(".grid")
        .forEach((grid) => (grid.style.backgroundColor = STARTINGCOLOR));
      break;
  }
});

function getNewGridSize() {
  let newSize = prompt(
    "Please enter a number between 1 and 100. The grid will be resized to N x N, N being the number entered."
  );

  let parsedSize = Number.parseInt(newSize);
  if (!Number.isInteger(parsedSize) || parsedSize > 100 || parsedSize < 1) {
    return getNewGridSize();
  } else {
    return parsedSize;
  }
}

function populateGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const column = document.createElement("div");
    column.classList = "column";
    gridContainer.appendChild(column);

    for (let y = 0; y < gridSize; y++) {
      const grid = document.createElement("div");
      grid.classList = "grid";
      grid.style.backgroundColor = STARTINGCOLOR;
      column.appendChild(grid);
    }
  }
}
