export function init(params) {
	const canvas = document.getElementById('mycanvas');
	const ctx = canvas.getContext('2d');

	ctx.save();
	ctx.lineWidth = 2;
	ctx.fillStyle = '#333';
	ctx.strokeStyle = 'red';
	ctx.font = '40px Dinot';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('fillRect', 10, 10);
	ctx.fillText('strokeRect', 300, 10);
	ctx.fillText('clearRect', 600, 10);

	ctx.fillStyle = 'pink';
	ctx.fillRect(10, 100, 200, 200);
	ctx.strokeRect(300, 100, 200, 200);

	ctx.fillRect(600, 100, 200, 200);
	ctx.clearRect(620, 130, 160, 160);
	ctx.restore();
}
