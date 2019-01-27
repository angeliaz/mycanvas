const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const img = new Image();
let mouseX, mouseY;
let offsetX, offsetY;

function getOffset() {
	const canvasPos = canvas.getBoundingClientRect();
	offsetX = canvasPos.left;
	offsetY = canvasPos.top;
}

function draw(cx, cy, radius) {
	ctx.save();
	ctx.clearRect(0, 0, width, height);
	const radialGradient = ctx.createRadialGradient(cx, cy, 1, cx, cy, radius);
	radialGradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
	radialGradient.addColorStop(0.65, 'rgba(0, 0, 0, 0.11)');
	radialGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

	ctx.beginPath();
	ctx.fillStyle = 'rgba(0,0,0,0.8)';
	ctx.fillRect(0, 0, width, height);
	// ctx.globalCompositeOperation = 'destination-out';
	ctx.arc(cx, cy, radius, 0, Math.PI * 2, false);
	ctx.fillStyle = radialGradient;
  ctx.fill();
  ctx.clip();
  ctx.drawImage(img, 0, 0, width, height);
	ctx.restore();
}

function mouseMove(e) {
	e.preventDefault();
	mouseX = parseInt(e.clientX - offsetX);
	mouseY = parseInt(e.clientY - offsetY);
	draw(mouseX, mouseY, 120);
}

export function init() {
  getOffset();
  img.src = '../images/Eva.jpg';
  ctx.fillStyle = 'rgba(0,0,0,0.8)';
	ctx.fillRect(0, 0, width, height);
  canvas.addEventListener('mousemove', mouseMove, false);
  canvas.addEventListener('touchmove', mouseMove, false);
}
