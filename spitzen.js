import { setItem, getItem } from "./storage.js";

function loadMeme() {
  const spitzen = getItem("spitzen") || {
    src:
      "http://www.team-bhp.com/forum/attachments/travelogues/1079291d1367318179-bolero-4wd-takes-us-sandakphu-3rd-time-dsc_1018.jpg",
    texts: ["2200", "2211", "4711"]
  };

  return spitzen;
}

const spitzen = loadMeme();

// const storageMeme = getItem("meme");
// let meme;
// if (storageMeme) {
//   meme = storageMeme;
// } else {
//   meme = {
//     src: "assets/Distracted-Boyfriend.jpg",
//     texts: ["VSCode", "DEV", "CodePen"]
//   };
// }

export function setSrc(value) {
  spitzen.src = value;
  log();
  setItem("spitzen", spitzen);
}

export function setText(index, value) {
  spitzen.texts[index] = value;
  log();
  setItem("spitzen", spitzen);
}

export function getSrc() {
  return spitzen.src;
}

export function getText(index) {
  return spitzen.texts[index];
}

function log() {
  console.log(spitzen);
}
