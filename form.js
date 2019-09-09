import { getText, setText } from "./spitzen.js";
import { updatePreview } from "./canvas.js";

const text1 = document.querySelector(".first");
const text2 = document.querySelector(".second");
const text3 = document.querySelector(".third");

export function initTextInputs() {
  // set initial value
  text1.value = getText(0);
  text2.value = getText(1);
  text3.value = getText(2);

  text1.addEventListener("input", function() {
    setText(0, text1.value);
    updatePreview();
  });
  text2.addEventListener("input", function() {
    setText(1, text2.value);
    updatePreview();
  });
  text3.addEventListener("input", function() {
    setText(2, text3.value);
    updatePreview();
  });
}
