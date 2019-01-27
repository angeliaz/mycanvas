const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

export function init() {
  ctx.save();
  ctx.lineWidth = 6;
  ctx.fillStyle = 'green';
  ctx.strokeStyle = '#00a0f0';
  ctx.textAlign = 'center';
	ctx.textBaseline = 'top';
  ctx.fillText('对照组', 100, 10);
  
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.rect(50, 100, 100, 100);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.rect(50, 250, 100, 100);
  ctx.fill();
  ctx.stroke();

  // group 2
  ctx.translate(200, 0);
  ctx.fillText('实验组', 100, 10);
  
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.rect(50, 100, 100, 100);
  ctx.fill();

  // ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.rect(50, 250, 100, 100);
  ctx.fill();
  ctx.stroke();

  // group 3
  ctx.translate(200, 0);
  ctx.fillText('对照组', 100, 10);
  
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.rect(50, 100, 100, 100);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.arc(100, 300, 50, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();

  // group 4
  ctx.translate(200, 0);
  ctx.fillText('实验组', 100, 10);
  
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.rect(50, 100, 100, 100);
  ctx.fill();

  // ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.arc(100, 300, 50, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}