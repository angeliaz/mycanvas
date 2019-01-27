const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

const start = {x: 100, y: 200};
const end = {x: 500, y: 100};
const control = {x: 300, y: 300};

function drawBase() {
	
	ctx.save();
	ctx.fillStyle = 'blue';
	ctx.fillRect(start.x - 10, start.y - 10, 10, 10);
	ctx.fillRect(control.x, control.y, 10, 10);
	ctx.fillRect(end.x, end.y, 10, 10);
	ctx.fillStyle = '#333';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'bottom';
	ctx.fillText('P0', start.x - 10, start.y - 10);
	ctx.fillText('P2', end.x, end.y);
	ctx.textBaseline = 'top';
	ctx.fillText('P1', control.x, control.y + 10);
	ctx.restore();
}

function drawDemo(){

  ctx.save();
  ctx.lineWith = 6;
  ctx.strokeStyle = 'red';
  
  // 二次贝塞尔曲线
  ctx.save();
	ctx.fillStyle = 'blue';
	ctx.fillRect(230, 250, 10, 10);
	ctx.restore();
	ctx.moveTo(200, 100);
	ctx.quadraticCurveTo(230, 250, 350, 200);
	ctx.stroke();

	// 三次贝塞尔曲线
	ctx.save();
	ctx.fillStyle = 'blue';
	ctx.fillRect(530, 150, 10, 10);
	ctx.fillRect(650, 300, 10, 10);
	ctx.restore();
	ctx.moveTo(450, 250);
	ctx.bezierCurveTo(530, 150, 650, 300, 700, 200);
  ctx.stroke();
  ctx.restore(); 
}

function drawBezierDemo() {
	drawBase();
	ctx.save();
	ctx.lineWith = 1;
	ctx.strokeStyle = 'red';
	ctx.beginPath();
	ctx.moveTo(start.x, start.y);
	ctx.quadraticCurveTo(control.x, control.y, end.x, end.y);
	ctx.stroke();
	ctx.restore(); 
}

// 贝塞尔曲线绘制原理
function drawBezier() {

	drawBase();

	ctx.save();
	ctx.lineWith = 1;
	ctx.strokeStyle = 'red';
	ctx.beginPath();
	ctx.moveTo(start.x , start.y);
	// b = (1-t)*(1-t)*start + 2*t*(1-t)*control + t*t*end
	for (let i = 0; i < 100; i++) {
		const t = i / 100;
		const bx = (1-t)*(1-t)*start.x + 2*t*(1-t)*control.x + t*t*end.x;
		const by = (1-t)*(1-t)*start.y + 2*t*(1-t)*control.y + t*t*end.y;
		ctx.lineTo(bx, by);
	}
	ctx.stroke();
	ctx.restore(); 

	ctx.save();
	ctx.fillStyle = 'blue';
	ctx.fillRect(start.x - 10, start.y - 10, 10, 10);
	ctx.fillRect(control.x, control.y, 10, 10);
	ctx.fillRect(end.x, end.y, 10, 10);
	ctx.fillStyle = '#333';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'bottom';
	ctx.fillText('P0', start.x - 10, start.y - 10);
	ctx.fillText('P2', end.x, end.y);
	ctx.textBaseline = 'top';
	ctx.fillText('P1', control.x, control.y + 10);
	ctx.restore();

}

function drawBezierAnimation(params) {
	
	drawBase();

	// 获取每个贝塞尔曲线的坐标
	const drawBezierPoint = function() {
		ctx.save();
		ctx.lineWith = 1;
		ctx.strokeStyle = 'red';
		
		// b = (1-t)*(1-t)*start + 2*t*(1-t)*control + t*t*end
		const t = count / 100;
		const bx = (1-t)*(1-t)*start.x + 2*t*(1-t)*control.x + t*t*end.x;
		const by = (1-t)*(1-t)*start.y + 2*t*(1-t)*control.y + t*t*end.y;
		ctx.lineTo(bx, by);
		ctx.stroke();

		ctx.restore(); 
		if (count < 100) {
			count++;
			rafTimer = window.requestAnimationFrame(drawBezierPoint);
		} else {
			window.cancelAnimationFrame(rafTimer);
		}
	}

	let rafTimer;
	let count = 0;
	ctx.beginPath();
	ctx.moveTo(start.x , start.y);
	drawBezierPoint();
}

// 找到中间控制点
function drawCurvePath(curveness) {
	// 计算中间控制点
	const cp = {
		x: ( start.x + end.x ) / 2 - ( start.y - end.y ) * curveness,
		y: ( start.y + end.y ) / 2 - ( end.x - start.x ) * curveness
	};
	ctx.beginPath();
	ctx.moveTo( start.x, start.y );
	ctx.quadraticCurveTo( 
		cp.x, cp.y,
		end.x, end.y
	);
	ctx.stroke();
}

// 找到中间控制点-示意图
function drawSketchPic() {
	ctx.save();
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#333';
	ctx.beginPath();
	ctx.moveTo(start.x, start.y);
	ctx.lineTo(end.x, end.y);
	ctx.stroke();

	// 垂直平分线
	ctx.moveTo(( start.x + end.x ) / 2 - ( start.y - end.y ), ( start.y + end.y ) / 2 - ( end.x - start.x ));
	ctx.lineTo(( start.x + end.x ) / 2 - ( start.y - end.y ) * -1, ( start.y + end.y ) / 2 - ( end.x - start.x ) * -1);
	ctx.stroke();

	ctx.restore();

	// P0P1点标注
	ctx.save();
	ctx.fillRect(start.x - 10, start.y - 10, 10, 10);
	ctx.fillRect(end.x, end.y, 10, 10);
	ctx.fillStyle = 'blue';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'bottom';
	ctx.fillText('P0', start.x - 10, start.y - 10);
	ctx.fillText('P2', end.x, end.y);
	ctx.textBaseline = 'top';

	ctx.fillRect(( start.x + end.x ) / 2 - ( start.y - end.y )*0.2, ( start.y + end.y ) / 2 - ( end.x - start.x )*0.2, 10, 10);
	ctx.fillText('P1', ( start.x + end.x ) / 2 - ( start.y - end.y )*0.2, ( start.y + end.y ) / 2 - ( end.x - start.x )*0.2);
	ctx.restore();
}

// 动态控制点，绘制贝塞尔
function drawDanymicCurve(curveness) {
	ctx.save();
	ctx.lineWidth = 2;
	ctx.strokeStyle = 'red';

	// 绘制
	drawSketchPic();
	drawCurvePath(curveness);
	ctx.restore();
}

export function init() {
	// drawDemo();
	// drawBezierDemo();
	// drawBezier();
	// drawBezierAnimation();

	drawDanymicCurve(0.2);
}