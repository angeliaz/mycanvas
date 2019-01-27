const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

function getRads(deg) {
  return Math.PI * deg / 180;
}

function drawScreen () { 
  const arc = { x: canvas.width / 2, y: canvas.height / 2, r: 100 };const w = canvas.width;
  const h = canvas.height; 

  ctx.save(); 
  ctx.lineWidth = 1; 
  // 绘制大圆 
  ctx.beginPath(); 
  ctx.fillStyle = '#fff'; 
  ctx.arc(arc.x, arc.y, arc.r, getRads(-90), getRads(90), false); ctx.fill(); 
  ctx.beginPath(); 
  ctx.fillStyle = '#000'; 
  ctx.arc(arc.x, arc.y, arc.r, getRads(-90), getRads(90), true); ctx.fill(); 

  // 绘制小圆 
  ctx.beginPath(); 
  ctx.fillStyle = '#fff'; 
  ctx.arc(arc.x, arc.y - arc.r/2, arc.r / 2, getRads(-90), getRads(90), true); ctx.fill(); 
  ctx.beginPath(); 
  ctx.fillStyle = '#000'; 
  ctx.arc(arc.x, arc.y + arc.r/2, arc.r / 2, getRads(-90), getRads(90), false); ctx.fill(); 

  // 绘制小黑点 
  ctx.beginPath(); 
  ctx.fillStyle = '#000'; 
  ctx.arc(arc.x, arc.y - arc.r/2, arc.r / 10, getRads(0), getRads(360), false); ctx.fill(); 
  ctx.beginPath(); 
  ctx.fillStyle = '#fff'; 
  ctx.arc(arc.x, arc.y + arc.r/2, arc.r / 10, getRads(0), getRads(360), false); 
  ctx.fill();
}

export function init() {
  ctx.save();
  ctx.fillStyle = '#eee';
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = 'pink';
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 2; 
  ctx.beginPath();
  ctx.arc(100, 100, 100, 0, Math.PI / 2, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(200, 100, 100, 0, Math.PI / 2, false);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 100, 100, 0, Math.PI / 2, false);
  ctx.fill();
  ctx.restore();

  drawScreen();
}