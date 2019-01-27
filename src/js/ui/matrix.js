const canvas = document.querySelector('canvas');
const	context = canvas.getContext('2d');
const	w = canvas.width;
const	h = canvas.height;

// 初始化
const clearColor = 'rgba(0, 0, 0, .2)'; // 用于绘制渐变阴影
const	wordColor = '#33ff33'; // 文字颜色
const	words = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?";
const	wordsArr = words.split(''); // 将文字拆分进一个数组
const	font_size = 16; // 字体大小
const	clumns = w / font_size; // 文字降落的列数
const	drops = [];

for (let i = 0; i < clumns; i++) {
	drops[i] = 1;
}

function draw() {
	context.save();
	context.fillStyle = wordColor;
	context.font = font_size + 'px arial';
	// 核心
	for (let i = 0; i < drops.length; i++) {
		const text = wordsArr[Math.floor(Math.random() * wordsArr.length)];
		context.fillText(text, i * font_size, drops[i] * font_size);
		if (drops[i] * font_size > h && Math.random() > 0.9) {
			drops[i] = 0;
		}
		drops[i]++;
	}
	context.restore();
}

// 动画循环
export function init() {
	window.matrixRef = window.requestAnimationFrame(init, canvas);
	context.fillStyle = clearColor;
	context.fillRect(0, 0, w, h);
	draw();
}
