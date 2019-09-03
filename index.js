"use strict";
const previewCanvas = document.querySelector(".canvas");
const previewCanvasContext = previewCanvas.getContext("2d");

const text1 = document.querySelector(".first");
const text2 = document.querySelector(".second");
const text3 = document.querySelector(".third");

const generatorImage = document.querySelector(".little_image");

function updatePreview() {
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

  previewCanvasContext.font = "16px Coming Soon";
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

// /* let formInput1 = document.querySelector(".first");
// let formOutput1 = document.querySelector(".output1");
// let formInput2 = document.querySelector(".second");
// let formOutput2 = document.querySelector(".output2");
// let formInput3 = document.querySelector(".third");
// let formOutput3 = document.querySelector(".output3");
// let formInput4 = document.querySelector(".fourth");
// let formOutput4 = document.querySelector(".output4");

// function generateText(event) {
//   formOutput1.innerHTML = event.target.value;
// }
// function generateText2(event) {
//   formOutput2.innerHTML = event.target.value;
// }
// function generateText3(event) {
//   formOutput3.innerHTML = event.target.value;
// }
// function generateText4(event) {
//   formOutput4.innerHTML = event.target.value;
// }

// formInput1.addEventListener("keyup", generateText);
// formInput2.addEventListener("keyup", generateText2);
// formInput3.addEventListener("keyup", generateText3);
// formInput4.addEventListener("keyup", generateText4);
// */

// const canvas = document.querySelector(".canvas");
// const ctx = canvas.getContext("2d");
// const img = document.querySelector(".little_image");

// ctx.drawImage(img, 0, 0, 100, 100);

// //-----------

// // let c = document.getElementById("canvas");
// // let ctx = c.getContext("2d");
// // let img = document.getElementById("little-image");
// // ctx.drawImage(img, 0, 0);

// // function drawImage(text) {
// //   const canvas = document.getElementById("canvas");
// //   const ctx = canvas.getContext("2d");
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);
// //   const img = document.getElementById("little-image");
// //   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// // }

// // document.getElementById("litte-image").addEventListener("click", drawImage);

// // window.onload = function() {
// //   drawImage();
// // };
