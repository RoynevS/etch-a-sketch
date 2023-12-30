const container = document.querySelector(".container");

window.addEventListener("load", () => {
  for (let i = 0; i < 16 * 16; i++) {
    const canvasElement = document.createElement("div");
    canvasElement.classList.add("canvas-element");
    container.appendChild(canvasElement);
  }
});