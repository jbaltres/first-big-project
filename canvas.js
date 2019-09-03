const previewCanvas = document.querySelector(".canvas");
const previewCanvasContext = previewCanvas.getContext("2d");

const text1 = document.querySelector(".first");
const text2 = document.querySelector(".second");
const text3 = document.querySelector(".third");

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
  previewCanvasContext.fillText(text1.value, 120, 260);
  previewCanvasContext.fillText(text2.value, 290, 280);
  previewCanvasContext.fillText(text3.value, 420, 240);
}

text1.addEventListener("input", updatePreview);
text2.addEventListener("input", updatePreview);
text3.addEventListener("input", updatePreview);

updatePreview();
