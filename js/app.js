// 3D Scroll

let zSpacing = -1000;
let lastPos = zSpacing / 5;
let mainFrame = document.getElementsByClassName("frame");
let frame = Array.from(mainFrame);
let zVals = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop;
  let delta = lastPos - top;
  lastPos = top;
};
