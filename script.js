const container = document.querySelector(".container");
const gridSizeSelector = document.querySelector("#grid-size");
const valueOutput = document.querySelector(".value");

const removeGrid = () => {
  const canvasElements = document.querySelectorAll(".canvas-element");
  canvasElements.forEach((element) => {
    container.removeChild(element);
  });
};

const drawGrid = (value) => {
  for (let i = 0; i <  value * value; i++) {
    const canvasElement = document.createElement("div");
    canvasElement.classList.add("canvas-element");
    container.appendChild(canvasElement);
  }
};

const onHover = () => {
  const canvasElements = document.querySelectorAll(".canvas-element");
  canvasElements.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      if (event.buttons === 1) {
        element.style.backgroundColor = "black";
      }
    });
  });
};

window.addEventListener("load", () => {
  drawGrid(gridSizeSelector.value);
  onHover();

  gridSizeSelector.addEventListener("input", () => {
    valueOutput.textContent = gridSizeSelector.value;
    removeGrid();
    drawGrid(gridSizeSelector.value);
    onHover();
  });
});

