const utils = require('util/util.js');
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

export function init() {
	ctx.fillStyle = '#000';
	ctx.font = '20px DiNOT';

	const img = new Image();
	img.onload = function() {
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height, 200, 50, canvas.width, canvas.height);
	};
	img.src = 'http://test.qq.com/images/emma.jpg';

	const mouse = utils.captureMouse(canvas);
	canvas.addEventListener('click', e => {
		ctx.clearRect(0, 0, 200, 500);
		ctx.fillText('x:' + mouse.x + ', y:' + mouse.y, 0, 100);
		const color = ctx.getImageData(mouse.x, mouse.y, 1, 1).data;
		ctx.fillText('rgba(' + (color[0] + ',' + color[1] + ',' + color[2] + ',' + color[3] + ')'), 0, 50);
	});

	canvas.addEventListener('mousedown', e => {
		console.log(e.type);
	});

	canvas.addEventListener('mouseover', e => {
		console.log(e.type);
	});

	canvas.addEventListener('mousemove', e => {
		// console.log(e.type);
	});

	canvas.addEventListener('mouseout', e => {
		console.log(e.type);
	});

	canvas.addEventListener('mouseleave', e => {
		console.log(e.type);
	});

	canvas.addEventListener('mousewheel', e => {
		console.log(e.type);
	});

	canvas.addEventListener('contextmenu', e => {
		console.log(e.type);
	});

	canvas.addEventListener('dragenter', e => {
		e.preventDefault();
		e.dataTransfer.effectAllowed = 'copy';
	});

	canvas.addEventListener('dragover', e => {
		e.preventDefault();
	});

	window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

	canvas.addEventListener('drop', e => {
		const file = e.dataTransfer.files[0];
		window.requestFileSystem(
			window.TEMPORARY,
			5 * 1024 * 1024,
			function(fs) {
				fs.root.getFile(
					file.name, { create: true }, fileEntry => {
						fileEntry.createWriter(writer => {
							writer.write(file);
						});
						const image = new Image();
						image.onload = function() {
							ctx.drawImage(image, 0, 0, canvas.width, canvas.height, 200, 50, canvas.width, canvas.height);
						};
						image.src = fileEntry.toURL();
						console.log('drop', fileEntry.toURL())
						alert(fileEntry.toURL())
				});
			},

			function(e) {
				alert(e.code);
			}
		);
		e.preventDefault();
	}, false);
}
