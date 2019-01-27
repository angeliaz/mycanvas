export function init(params) {
	const canvas = document.getElementById('mycanvas');
  const ctx = canvas.getContext('2d');
  
  ctx.save();
	ctx.globalAlpha = 0.8;
	ctx.lineWidth = 6;
	ctx.fillStyle = '#333';
	ctx.strokeStyle = 'red';
	ctx.lineCap = 'round';
	ctx.font = '40px Dinot';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText('line', 10, 10);
	ctx.fillText('rect', 100, 10);
	ctx.fillText('arc&ellipse', 250, 10);
	ctx.fillText('bezier', 500, 10);
	ctx.fillText('path2D', 700, 10);

	// 直线路径
	ctx.beginPath();
	ctx.moveTo(50, 100);
	ctx.lineTo(50, 300);
	ctx.stroke();

	// 矩形路径
	ctx.beginPath();
	ctx.rect(100, 100, 100, 100);
	ctx.stroke();

	// 圆弧路径
	ctx.beginPath();
	ctx.arc(300, 150, 50, 0, Math.PI * 2, true);
	ctx.stroke();

	// 椭圆
	ctx.beginPath();
	ctx.ellipse(300, 320, 50, 30, 0, 0, Math.PI * 2, true);
	ctx.stroke();

	// 二次贝塞尔曲线
	ctx.save();
	ctx.fillStyle = 'blue';
	ctx.fillRect(530, 200, 10, 10);
	ctx.restore();
	ctx.moveTo(500, 100);
	ctx.quadraticCurveTo(530, 200, 600, 200);
	ctx.stroke();

	// 三次贝塞尔曲线
	ctx.save();
	ctx.fillStyle = 'blue';
	ctx.fillRect(530, 300, 10, 10);
	ctx.fillRect(550, 500, 10, 10);
	ctx.restore();
	ctx.moveTo(450, 400);
	ctx.bezierCurveTo(530, 300, 550, 500, 600, 400);
	ctx.stroke();

	// Path2D
	const rectPath = new Path2D();
	rectPath.rect(700, 100, 100, 100);
	ctx.stroke(rectPath);

	var arcPath = new Path2D();
	arcPath.arc(750, 300, 50, 0, Math.PI * 2, true);
	ctx.stroke(arcPath);

	var arcPath1 = new Path2D();
	arcPath1.moveTo(700, 380);
	arcPath1.quadraticCurveTo(730, 420, 800, 380);
	ctx.stroke(arcPath1);

	// Path2D svg
	const svgPath = new Path2D('M700 450 h 80 v 80 h 30 v 30 h -140 v -30 h 30 Z');
	ctx.stroke(svgPath);

	// 三角形
	ctx.beginPath();
	ctx.moveTo(50, 400);
	ctx.lineTo(150, 400);
	ctx.lineTo(100, 480);
	ctx.closePath();
	ctx.stroke();
	// 八边形
	ctx.restore();
}
