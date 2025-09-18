"use strict";

const gridContainer = document.querySelector("#gridContainer");
const width = gridContainer.clientWidth;

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

for (let i = 0; i < 16 * 16; i++) {
  const grid = document.createElement("div");
  grid.classList = "grid";
  grid.style.backgroundColor = "#000000";
  grid.style.width = `${Math.floor(width / 16)}px`;
  gridContainer.appendChild(grid);
}
