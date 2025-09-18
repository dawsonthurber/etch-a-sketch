"use strict";

const gridContainer = document.querySelector("#gridContainer");
const menuContainer = document.querySelector("#menuContainer");
const width = gridContainer.clientWidth;

populateGrid(73);

gridContainer.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("grid")) {
    e.target.style.backgroundColor = "white";

    let currentOpacity = parseFloat(e.target.style.opacity);
    if (!Number.isNaN(currentOpacity)) {
      if (currentOpacity < 1) {
        e.target.style.opacity = `${(currentOpacity += 0.2)}`;
      }
    } else {
      e.target.style.opacity = "0.1";
    }
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
      break;
  }
});

function getNewGridSize() {
  let newSize = prompt(
    "Please enter a number between 1 and 100. The grid will be resized to N x N, N being the number entered."
  );

  let parsedSize = Number.parseInt(newSize);
  if (!Number.isInteger(parsedSize) || parsedSize > 100 || parsedSize < 1) {
    getNewGridSize();
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
      grid.style.backgroundColor = "#000000";
      column.appendChild(grid);
    }
  }
}
