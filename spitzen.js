const spitzen = {
  src:
    "http://www.team-bhp.com/forum/attachments/travelogues/1079291d1367318179-bolero-4wd-takes-us-sandakphu-3rd-time-dsc_1018.jpg",
  texts: ["2200", "2211", "4711"]
};

export function setSrc(value) {
  meme.src = value;
  log();
}

export function setText(index, value) {
  meme.texts[index] = value;
  log();
}

export function getSrc() {
  return meme.src;
}

export function getText(index) {
  return meme.texts[index];
}

function log() {
  console.log(meme);
}
