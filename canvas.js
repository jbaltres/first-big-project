import { getText } from "./spitzen.js";

const previewCanvas = document.querySelector(".canvas");
const previewCanvasContext = previewCanvas.getContext("2d");

const generatorImage = document.querySelector(".little_image");

export function updatePreview() {
  previewCanvas.width = generatorImage.width * 4;
  previewCanvas.height = generatorImage.height * 4;

  previewCanvasContext.clearRect(
    0,
    0,
    previewCanvas.width,
    previewCanvas.height
  );

  previewCanvasContext.drawImage(
    generatorImage,
    0,
    0,
    previewCanvas.width,
    previewCanvas.height
  );

  previewCanvasContext.font = "16px Cyber Monkey";
  previewCanvasContext.fillStyle = "white";
  previewCanvasContext.textAlign = "center";
  previewCanvasContext.shadowColor = "black";
  previewCanvasContext.shadowBlur = 6;
  previewCanvasContext.shadowOffsetX = 3;
  previewCanvasContext.shadowOffsetY = 3;
  previewCanvasContext.fillText(getText(0), 120, 260);
  previewCanvasContext.fillText(getText(1), 290, 280);
  previewCanvasContext.fillText(getText(2), 420, 240);
}

updatePreview();

// const previewCanvas = document.querySelector(".preview__canvas");
// const previewCanvasContext = previewCanvas.getContext("2d");
// const generatorImage = document.querySelector(".generator__img");

// export function updatePreview() {
//   previewCanvas.width = generatorImage.naturalWidth;
//   previewCanvas.height = generatorImage.naturalHeight;

//   previewCanvasContext.clearRect(
//     0,
//     0,
//     previewCanvas.width,
//     previewCanvas.height
//   );

//   previewCanvasContext.drawImage(
//     generatorImage,
//     0,
//     0,
//     previewCanvas.width,
//     previewCanvas.height
//   );

//   previewCanvasContext.font = "60px Arial";
//   previewCanvasContext.fillStyle = "white";
//   previewCanvasContext.textAlign = "center";
//   previewCanvasContext.shadowColor = "black";
//   previewCanvasContext.shadowBlur = 6;
//   previewCanvasContext.shadowOffsetX = 3;
//   previewCanvasContext.shadowOffsetY = 3;
//   previewCanvasContext.fillText(getText(0), 400, 600);
//   previewCanvasContext.fillText(getText(1), 840, 390);
//   previewCanvasContext.fillText(getText(2), 1220, 510);
// }
