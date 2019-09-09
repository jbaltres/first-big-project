"use strict";

import { updatePreview } from "./canvas.js";
import { initTextInputs } from "./form.js";

initTextInputs();
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
