const container = document.querySelector(".container");
const gridSizeSelector = document.querySelector("#grid-size");
const valueOutput = document.querySelector(".value");
const btnClear = document.querySelector("#clear");
const btnColorMode = document.querySelector("#colormode");
const btnEraser = document.querySelector("#eraser");
const colorPicker = document.querySelector("#pen-color");

const removeGrid = () => {
  const canvasElements = document.querySelectorAll(".canvas-element");
  canvasElements.forEach((element) => {
    container.removeChild(element);
  });
};

const getSize = (value) => {
  return `${560 / value}px`;
};

const drawGrid = (value) => {
  for (let i = 0; i <  value * value; i++) {
    const canvasElement = document.createElement("div");
    canvasElement.classList.add("canvas-element");
    const size = getSize(value);
    canvasElement.style.width = size;
    canvasElement.style.height = size;
    container.appendChild(canvasElement);
  }
};

const onHover = (color) => {
  const canvasElements = document.querySelectorAll(".canvas-element");
  canvasElements.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      if (event.buttons === 1) {
        element.style.backgroundColor = color;
      }
    element.addEventListener("mousedown", () => {
      element.style.backgroundColor = color;
    })
    });
  });
};

window.addEventListener("load", () => {
  drawGrid(gridSizeSelector.value);
  onHover(colorPicker.value);

  colorPicker.addEventListener("input", () => {
    btnColorMode.classList.contains("active") ? onHover(colorPicker.value) : onHover("white");
  });

  gridSizeSelector.addEventListener("input", () => {
    value = gridSizeSelector.value;
    valueOutput.textContent = `${value} x ${value}`;
  });

  gridSizeSelector.addEventListener("change", () => {
    removeGrid();
    drawGrid(gridSizeSelector.value);

    if (!btnColorMode.classList.contains("active")) {
      btnEraser.classList.toggle("active");
      btnColorMode.classList.toggle("active");
    }

    onHover(colorPicker.value);
  });

  btnClear.addEventListener("click", () => {
    removeGrid();
    drawGrid(gridSizeSelector.value);

    if (!btnColorMode.classList.contains("active")) {
      btnEraser.classList.toggle("active");
      btnColorMode.classList.toggle("active");
    }
    
    onHover(colorPicker.value);
  });

  btnEraser.addEventListener("click", () => {
    if (!btnEraser.classList.contains("active")) {
      btnEraser.classList.toggle("active");
      btnColorMode.classList.toggle("active");
      onHover("white");
    }
  });

  btnColorMode.addEventListener("click", () => {
    if (!btnColorMode.classList.contains("active")) {
      btnEraser.classList.toggle("active");
      btnColorMode.classList.toggle("active");
      onHover(colorPicker.value);
    }
  });
});

