(function(window, document) {
	const canvas = document.getElementById('mycanvas');
	const ctx = canvas.getContext('2d');

	/* ctx.fillStyle = '#333';
	ctx.beginPath();
	// ctx.moveTo(0, 0)
	ctx.lineTo(100, 100);
	ctx.lineTo(200, 100);
	ctx.stroke(); */

	const demos = {};
	// 1.basic
	demos.basic = require('./base/basic.js');
	// 2.canvas宽高
	demos.size = require('./base/size.js');
	// 3.矩形
	demos.rect = require('./base/rect.js');
	// 4.路径
	demos.path = require('./base/path.js');
	// 5.color 渐变 图案
	demos.color = require('./base/color.js');
	// 6. image
	demos.image = require('./base/image.js');
	// 7. video
	demos.video = require('./base/video.js');
	// 8. text
	demos.text = require('./base/text.js');
	// 9. pixel
	demos.pixel = require('./base/pixel.js');
	// coordinate
	demos.coordinate = require('./base/coordinate.js');
	// beginpath
	demos.beginpath = require('./base/beginpath.js');
	demos.arc = require('./base/arc.js');
	demos.bezier = require('./base/bezier.js');

	// feature
	// event
	demos.event = require('./feature/event.js');
	// save & restore
	demos.saveRestore = require('./feature/save_restore.js');
	// composite
	demos.composite = require('./feature/composite.js');
	// scratch
	demos.scratch = require('./feature/scratch.js');
	// clip
	demos.clip = require('./feature/clip.js');
	demos.light = require('./feature/light.js');

	// demos
	demos.line = require('./demo/line.js');
	demos.bar = require('./demo/bar.js');
	demos.pie = require('./demo/pie.js');
	demos.kline = require('./demo/kline.js');
	demos.polygon = require('./demo/polygon.js');

	demos.loading = require('./ui/loading.js');
	demos.curve = require('./demo/curve.js');
	demos.arrow = require('./ui/arrow.js');
	demos.matrix = require('./ui/matrix.js');
	demos.raycasting = require('./util/raycasting.js');

	document.getElementById('demos').addEventListener('click', e => {
		const id = e.target.getAttribute('data-id');
		if (id) {
			document.getElementById('mycanvas1').style.display = 'none';
			document.getElementById('mycanvas2').style.display = 'none';
			ctx.clearRect(0, 0, 1000, 600);
			scratch.classList.remove('test');
			if (window.raf) {
				window.cancelAnimationFrame(window.raf);
			}
			if (window.loadRaf) {
				window.cancelAnimationFrame(window.loadRaf);
			}
			if (window.matrixRef) {
				window.cancelAnimationFrame(window.matrixRef);
			}
			demos[id].init();
		}
	});

	const hash = location.hash ? location.hash.match(/#(.*)/)[1] : 'basic';
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	demos[hash].init();

	function testRaycasting() {
		const pointer = {
			x: 200,
			y: 200,
		};
		const poly = [
			{
				x: 100,
				y: 100,
			},
			{
				x: 300,
				y: 100,
			},
			{
				x: 200,
				y: 200,
			},
		];

		for (var i = 0, j = 4; i < 5; j = i, i++) {
			console.log(i, j);
		}
	}
})(window, document);
