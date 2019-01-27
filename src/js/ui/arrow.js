const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

function draw() {
	const arrowWidth = 50;
	const arrowHeight = 50;
	const lineHeight = 100;
	ctx.save();
	ctx.beginPath();
	ctx.strokeStyle = '#A5DEF1';
	ctx.fillStyle = '#49f';
	ctx.lineWidth = 5;

	ctx.moveTo(arrowWidth, 0);
	ctx.lineTo(0, arrowHeight);
	ctx.lineTo(arrowWidth / 2, arrowHeight);

	ctx.lineTo(arrowWidth / 2, arrowHeight + lineHeight);
	ctx.lineTo((arrowWidth * 3) / 2, arrowHeight + lineHeight);
	ctx.lineTo((arrowWidth * 3) / 2, arrowHeight);
	ctx.lineTo(arrowWidth * 2, arrowHeight);
	ctx.lineTo(arrowWidth, 0);

	ctx.stroke();
	ctx.fill();
	ctx.closePath();
	ctx.restore();
}

export function init() {
	/* ctx.save();
	ctx.strokeStyle = '#A5DEF1';
	ctx.beginPath();
	ctx.moveTo(500, 500);
	ctx.lineTo(200, 100);
	ctx.stroke();
	ctx.closePath();
	ctx.restore(); */

	draw();
}
