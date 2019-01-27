const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

function setDemo(params) {
  const img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 50, 100);
  }
  img.src = '../images/test.png';
}

export function init() {

  setDemo();

  ctx.save();
  ctx.globalAlpha = 1;
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(600, 250, 100, 0, Math.PI*2, false);
  ctx.closePath();
  ctx.fill();

  ctx.globalCompositeOperation = 'destination-out';
  // ctx.globalCompositeOperation = 'source-out';
  // ctx.globalCompositeOperation = 'destination-in';
  // ctx.globalCompositeOperation = 'difference';

  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(700, 250, 100, 0, Math.PI*2, false);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
  
}