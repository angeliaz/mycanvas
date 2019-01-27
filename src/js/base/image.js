export function init() {
	const canvas = document.getElementById('mycanvas');
	const ctx = canvas.getContext('2d');

	ctx.save();
	ctx.fillStyle = '#333';
	ctx.fillText('drawImage', 50, 20);
	ctx.fillText('HTMLCanvasElement', 350, 20);
	ctx.fillText('createPattern', 700, 20);
	ctx.restore();

	const img = new Image();
	img.onload = function() {
		ctx.drawImage(img, 0, 0, 300, 450, 10, 100, 300, 450);
	};
	img.src = '../images/feifei.png';

	mycanvas1.style.display = 'block';
	const canvas1 = document.getElementById('mycanvas1');
	const ctx1 = canvas1.getContext('2d');
	canvas1.width = 1000;
	canvas1.height = 600;
	const img2 = new Image();
	img2.onload = function() {
		ctx.save();
		ctx1.drawImage(img2, 0, 0, 300, 450, 10, 100, 300, 450);
		ctx.drawImage(canvas1, 320, 0);
		ctx.restore();
	};
	img2.src = '../images/liutao.png';

	ctx.beginPath();
	const img1 = new Image();
	img1.onload = function() {
		ctx.save();
		const ptrn = ctx.createPattern(img1, 'no-repeat');
		ctx.fillStyle = ptrn;
		ctx.translate(680, 100);
		ctx.fillRect(0, 0, 300, 450);
		ctx.restore();
	};
	img1.src = '../images/wangfei.png';
}
