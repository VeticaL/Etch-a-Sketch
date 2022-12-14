const container = document.getElementById("grid-container");
const colorPicker = document.getElementById("colorPicker");
const colorBtn = document.getElementById("colorBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const randomBtn = document.getElementById("randomBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");

let color = "#333333";
let girdsize = 16;
let mode = "colorMode";

function makegrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid-container");
    container.appendChild(grid);
    grid.style.backgroundColor = "White";
    grid.addEventListener("mousedown", changeColor);
    grid.addEventListener("mouseover", changeColor);
  }
}

// change grid color

function changeColor() {
  this.style.backgroundColor = color;
  // Rainbow Mode
  if (mode === "rainbowMode") {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${R}, ${B}, ${G})`;
  }
}

// change gridSize

sizeSlider.oninput = function () {
  girdsize = this.value;
  sizeValue.innerHTML = `${girdsize} X ${girdsize}`;
  makegrid(girdsize);
};

// color Picker

colorPicker.oninput = function () {
  let defaultColor = colorBtn.value;
  let newColor = this.value;
  color = newColor;
};

//Buttons

colorBtn.onclick = function () {
  mode = "colorMode";
  color = "#333333";
};

eraserBtn.onclick = function () {
  mode = "eraserMode";
  color = "White";
};

clearBtn.onclick = function () {
  mode = "clearMode";
  container.innerHTML = "";
  makegrid(girdsize);
};

rainbowBtn.onclick = function () {
  mode = "rainbowMode";
};

randomBtn.onclick = function() {
  mode = "fillMode";
  color = `hsl(${Math.random() * 360}, 100%, 50%`;
}

window.onload = () => {
  makegrid(girdsize);
};
