const container = document.getElementById("grid-container");
const colorPicker = document.getElementById("colorPicker");
const colorBtn = document.getElementById("colorBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");

function makegrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid-container");
    container.appendChild(grid);
    grid.style.backgroundColor = "blue";
  }
}

makegrid(16)

function changeSize() {
 let newSize = sizeSlider.value;
 sizeValue.innerHTML = `${newSize} X ${newSize}`;
 console.log(newSize)
}

changeSize()