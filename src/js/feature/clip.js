const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

export function init() {
  ctx.save();

  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  ctx.arc(250, 200, 80, 0, Math.PI*2, false);
  // ctx.fill();
  ctx.clip();

  ctx.fillStyle = 'rgba(255,0,0,0.2)';
  ctx.fillRect(50, 100, 200, 200);
  
  ctx.fillStyle = 'rgba(255,0,0,0.2)';
  ctx.fillRect(260, 100, 200, 200);
  
  ctx.restore();
  ctx.save();
  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  ctx.fillRect(400, 100, 200, 200);
  ctx.restore();
}