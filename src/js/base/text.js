export function init(params) {
	const canvas = document.getElementById('mycanvas');
	const ctx = canvas.getContext('2d');

	ctx.save();
	ctx.lineWidth = 1;
	ctx.fillStyle = '#333';
	ctx.strokeStyle = 'green';
	ctx.lineCap = 'round';

	ctx.moveTo(200, 0);
	ctx.lineTo(200, 600);
	ctx.moveTo(400, 0);
	ctx.lineTo(400, 600);
	ctx.moveTo(600, 0);
	ctx.lineTo(600, 600);
	ctx.moveTo(800, 0);
	ctx.lineTo(800, 600);
	ctx.stroke();

	ctx.moveTo(0, 150);
	ctx.lineTo(1000, 150);
	ctx.moveTo(0, 250);
	ctx.lineTo(5000, 250);
	ctx.moveTo(0, 350);
	ctx.lineTo(1000, 350);
	ctx.moveTo(0, 450);
	ctx.lineTo(1000, 450);
	ctx.moveTo(0, 550);
	ctx.lineTo(1000, 550);
	ctx.stroke();
	ctx.restore();

	ctx.save();
	ctx.fillStyle = '#333';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.direction = 'inherit';
	ctx.font = 'bold 30px DiNOT';

	ctx.fillText('textAlign', 200, 50);
	ctx.fillText('textBaseline', 400, 50);
	ctx.fillText('other', 800, 50);

	ctx.textAlign = 'left';
	ctx.fillText('left', 200, 150);
	ctx.textAlign = 'center';
	ctx.fillText('center', 200, 250);
	ctx.textAlign = 'right';
	ctx.fillText('right', 200, 350);

	ctx.textAlign = 'center';
	ctx.textBaseline = 'top';
	ctx.fillText('top', 400, 150);
	ctx.textBaseline = 'middle';
	ctx.fillText('middle', 400, 250);
	ctx.textBaseline = 'bottom';
	ctx.fillText('bottom-g', 400, 350);
	ctx.textBaseline = 'alphabetic';
	ctx.fillText('alphabetic', 400, 450);
	ctx.textBaseline = 'hanging';
	ctx.fillText('hanging', 400, 550);

	// 阴影
	ctx.lineWidth = 2;
	ctx.font = '64px DiNOT';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.shadowOffsetX = 5;
	ctx.shadowOffsetY = 5;
	ctx.shadowBlur = 10;
	ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
	ctx.fillStyle = 'red';
	ctx.strokeStyle = 'green';
	ctx.fillText('QQBROWSER', 800, 150);
	ctx.strokeText('QQBROWSER', 800, 150);

	// 渐变
	const linearGradient = ctx.createLinearGradient(800, 200, 900, 300);
	linearGradient.addColorStop(0, '#f05a8c');
	linearGradient.addColorStop(0.5, '#e6b41e');
	linearGradient.addColorStop(1, '#00d796');
	ctx.fillStyle = linearGradient;
	ctx.strokeStyle = '#ccc';
	ctx.fillText('QQBROWSER', 800, 250);
	ctx.strokeText('QQBROWSER', 800, 250);

	// 图案
	ctx.font = 'bold 64px DiNOT';
	const img = new Image();
	img.src = 'http://stdl.qq.com/stdl/skin/10/wallpaper/964e4d3ea08af2cd1a5bbdd3c83096a2.webp';
	img.onload = function() {
		const ptrn = ctx.createPattern(img, 'repeat');
		ctx.fillStyle = ptrn;
		ctx.strokeStyle = ptrn;
		ctx.strokeText('QQBROWSER', 800, 450);
		ctx.fillText('QQBROWSER', 800, 350);
		ctx.restore();
	};
}
