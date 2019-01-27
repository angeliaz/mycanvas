const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 10;
ctx.fillStyle = '#333';
ctx.strokeStyle = 'red';
ctx.lineCap = 'round';
ctx.font = '30px Dinot';
ctx.textAlign = 'left';
ctx.textBaseline = 'top';

function drawCircle() {
	// 画背景
	ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
	ctx.fillRect(0, 0, 100, 100);
	ctx.fillStyle = '#f05a8c';
	ctx.fillRect(100, 0, 100, 100);
	ctx.fillStyle = 'rgb(0, 255, 255)';
	ctx.fillRect(0, 100, 100, 100);
	ctx.fillStyle = 'green';
	ctx.fillRect(100, 100, 100, 100);
	ctx.fillStyle = '#FFF';

	// 设置透明度值
	ctx.globalAlpha = 0.2;

	// 画半透明圆
	for (var i = 0; i < 0; i++) {
		ctx.beginPath();
		ctx.arc(100, 100, 10 + 10 * i, 0, Math.PI * 2, true);
		ctx.fill();
	}
}

// 调色盘
function drawPalette() {
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			ctx.fillStyle = 'rgb(' + Math.floor(255 - 25.5 * i) + ',' + Math.floor(255 - 25.5 * j) + ', 255)';
			ctx.fillRect(j * 20, i * 20, 20, 20);
		}
	}
}

// 线性渐变
function drawLinearGradient() {
	const linearGradient = ctx.createLinearGradient(200, 0, 200, 200);
	linearGradient.addColorStop(0, '#f05a8c');
	linearGradient.addColorStop(0.5, '#e6b41e');
	linearGradient.addColorStop(1, '#00d796');

	const linearGradient2 = ctx.createLinearGradient(200, 250, 200, 500);
	linearGradient2.addColorStop(0, '#f05a8c');
	linearGradient2.addColorStop(0.5, '#e6b41e');
	linearGradient2.addColorStop(1, '#00d796');
	ctx.fillStyle = linearGradient;
	ctx.strokeStyle = linearGradient2;

	ctx.beginPath();
	ctx.fillRect(0, 0, 200, 200);
	ctx.rect(0, 250, 200, 200);
	ctx.stroke();
	/* ctx.beginPath();
	ctx.arc(60, 60, 30, 0, Math.PI * 2, true);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(150, 60, 30, 0, Math.PI * 2, true);
	ctx.stroke(); */
}

// 径向渐变
function drawRadialGradient() {
	const radialGradient = ctx.createRadialGradient(30, 30, 20, 52, 50, 50);
	radialGradient.addColorStop(0, '#e6b41e');
	radialGradient.addColorStop(0.4, '#f05a8c');
	radialGradient.addColorStop(0.7, '#00B5E2');
	radialGradient.addColorStop(1, 'rgba(0,201,255,0)');
	ctx.fillStyle = radialGradient;
	ctx.strokeStyle = radialGradient;
	ctx.fillRect(0, 0, 100, 100);
	// ctx.strokeRect(20, 20, 50, 50);

	const radialGradient1 = ctx.createRadialGradient(55, 250, 10, 50, 250, 50);
	radialGradient1.addColorStop(0, '#FF5F98');
	radialGradient1.addColorStop(0.6, '#FF01aF');
	radialGradient1.addColorStop(1, 'rgba(255, 1, 136, 0)');
	ctx.fillStyle = radialGradient1;
	ctx.strokeStyle = radialGradient1;
	ctx.fillRect(0, 200, 100, 100);
	// ctx.strokeRect(20, 220, 50, 50);
}

// 图案
function drawPattern() {
	ctx.lineWidth = 30;
	ctx.beginPath();
	ctx.rect(0, 0, 180, 200);
	const img = new Image();
	img.src = 'http://stdl.qq.com/stdl/skin/10/wallpaper/964e4d3ea08af2cd1a5bbdd3c83096a2.webp';
	const img1 = new Image();
	img1.src = 'http://stdl.qq.com/stdl/skin/10/assets/img/fei.png';
	img.onload = function() {
		const ptrn = ctx.createPattern(img, 'repeat');
		ctx.strokeStyle = ptrn;
		ctx.stroke();
	};
	img1.onload = function(params) {
		const ptrn = ctx.createPattern(img1, 'no-repeat');
		ctx.fillStyle = ptrn;
		ctx.fill();
		ctx.restore();
	};
}

export function init() {
	ctx.fillText('color', 50, 10);
	ctx.fillText('linearGradient', 300, 10);
	ctx.fillText('radialGradient', 550, 10);
	ctx.fillText('pattern', 800, 10);

	ctx.save();
	ctx.translate(50, 100);
	drawCircle();
	ctx.restore();

	ctx.save();
	ctx.globalAlpha = 1;
	ctx.translate(50, 350);
	drawPalette();
	ctx.restore();

	ctx.save();
	ctx.translate(300, 100);
	drawLinearGradient();
	ctx.restore();
	
	ctx.save();
	ctx.translate(550, 100);
	drawRadialGradient();
	ctx.restore();

	ctx.save();
	ctx.translate(800, 100);
	drawPattern();
}
