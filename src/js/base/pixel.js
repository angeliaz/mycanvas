const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');


export function init() {
	ctx.save();
	ctx.fillStyle = '#333';
	ctx.fillText('origin', 50, 20);
	ctx.fillText('gray', 450, 20);
	ctx.fillText('emboss', 750, 20);
	ctx.restore();

	const img = new Image();
	img.onload = function() {
		ctx.drawImage(img, 200, 0, 250, 350, 10, 100, 250, 350);
		const imageData = ctx.getImageData(20, 100, 250, 350);
		// gray
		for (let i = 0; i < imageData.data.length; i += 4) {
			let gray = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
			imageData.data[i] = gray;
			imageData.data[i + 1] = gray;
			imageData.data[i + 2] = gray;
			imageData.data[i + 3] = 255;
		}
		ctx.putImageData(imageData, 350, 100);
		// emboss
		for (let i = 0; i < imageData.data.length; i += 4) {
			imageData.data[i] = 255 - imageData.data[i];
			imageData.data[i + 1] = 255 - imageData.data[i + 1];
			imageData.data[i + 2] = 255 - imageData.data[i + 2];
		}
		ctx.putImageData(imageData, 700, 100);
	};
	img.src = 'http://test.qq.com/images/Eva1.jpg';
}
