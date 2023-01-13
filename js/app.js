// 3D Scroll

let zSpacing = -1000;
let lastPos = zSpacing / 5;
let mainFrame = document.getElementsByClassName("frame");
let frames = Array.from(mainFrame);
let zVals = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop;
  let delta = lastPos - top;
  lastPos = top;

  frames.forEach(function (n, i) {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -5.5;
    let frame = frames[i];
    let transform = `translateZ(${zVals[i]}px)`;
    let opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    frame.setAttribute("style", `transform:${transform}; opacity:${opacity}`);
  });
};
window.scrollTo(0, 1);
