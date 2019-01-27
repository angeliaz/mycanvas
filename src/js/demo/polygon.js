const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

const radius = 100;
const start = {x: 300, y: 300};
const side = 6;

function drawTitle() {
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#333';
  ctx.font = '30px DiNOT';
  ctx.fillText('多边形', 500, 20);
  ctx.restore();
}

function drawPolygon() {

  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#333';
  ctx.beginPath();
  ctx.moveTo(start.x + radius, start.y);
  for (let i = 0; i < side; i++) {
    ctx.lineTo(start.x + radius * Math.cos(Math.PI*2*i / side), start.y + radius * Math.sin(Math.PI*2*i / side));
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
  
}


export function init() {
  drawTitle();
  drawPolygon();
}