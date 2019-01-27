const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
  
function drawGrid(ctx, w, h, stroke, steps) {
  ctx.save();
  ctx.lineWidth = 1;
  ctx.fillStyle = 'red';
  ctx.strokeStyle = stroke;
  ctx.font = 'bold 30px DiNOT';
  
  ctx.beginPath();
	for (let i = 0.5; i < w; i += steps) {
		ctx.moveTo(i, 0);
		ctx.lineTo(i, h);
	}
	for (let i = 0.5; i < h; i += steps) {
		ctx.moveTo(0, i);
		ctx.lineTo(w, i);
  }
  ctx.rect(0, 50, 50, 50);
  ctx.fillText('(x:0, y:0)', 0, 0);
  ctx.fill();
  ctx.stroke();
	ctx.restore();
}

export function init() {
  drawGrid(ctx, canvas.width, canvas.height, '#ccc', 20);
  ctx.save();
  ctx.translate(100, 100);
  drawGrid(ctx, canvas.width - 100, canvas.height - 100, '#00a0f0', 20);
  ctx.restore();

  
  ctx.save();
  ctx.translate(200, 200);
  ctx.rotate(Math.PI / 6);
  drawGrid(ctx, canvas.width - 100, canvas.height - 100, '#e6b41e', 20);
  ctx.restore();

}
