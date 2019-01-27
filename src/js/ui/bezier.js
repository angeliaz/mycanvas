export function init() {
  const canvas = document.getElementById('mycanvas');
  const ctx = canvas.getContext('2d');
  ctx.globalAlpha = 0.8;
  ctx.lineWidth = 6;
  ctx.fillStyle = 'pink';
  ctx.strokeStyle = 'red';
  ctx.lineCap = 'round';

  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.bezierCurveTo(120, 150, 160, 180, 200, 200);
  ctx.bezierCurveTo(210, 220, 250, 270, 300, 300);

  ctx.stroke();
}