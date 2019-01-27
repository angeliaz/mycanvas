const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const rad = (Math.PI * 2) / 100;
let rotation = 0;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// ctx.setTransform(1,0,0,1,0,0);
// ctx.translate(canvasWidth/2, canvasHeight/2);
// ctx.rotate();
// ctx.save();

function drawText() {
	ctx.save();
	ctx.fillStyle = '#F47C7C';
	ctx.font = '30px Microsoft Yahei';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(rotation.toFixed(0) + '%', centerX, centerY);
	ctx.restore();
}

function drawBgCircle() {
	ctx.save();
	ctx.strokeStyle = '#A5DEF1';
	ctx.lineWidth = 12;
	ctx.beginPath();
	ctx.arc(centerX, centerY, 100, 0, 2 * Math.PI, false);
	ctx.stroke();
	ctx.closePath();
	ctx.restore();
}

function drawAnimateCircle() {
	ctx.save();
	ctx.beginPath();
	ctx.strokeStyle = '#49f';
	ctx.lineWidth = 12;
	ctx.arc(centerX, centerY, 100, -Math.PI / 2, -Math.PI / 2 + rotation * rad, false);
	ctx.stroke();
	ctx.closePath();
	ctx.restore();
}

export function init() {
	window.loadRaf = requestAnimationFrame(init, canvas);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	drawBgCircle();
	drawText();
	drawAnimateCircle();

	rotation = rotation > 100 ? 0 : rotation;
	rotation += 0.1;
}
