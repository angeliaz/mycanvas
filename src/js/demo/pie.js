const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

const radius = 100;
const start = {x: 300, y: 300};
const data = [
  {type: '网络游戏收入', num: 258},
  {type: '社交网络收入', num: 182},
  {type: '社交及其它广告收入', num: 111},
  {type: '媒体广告收入', num: 50},
  {type: '其它业务收入', num: 202}
]

function createColor() {
  return '#xfxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function drawTitle() {
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#333';
  ctx.font = '30px DiNOT';
  ctx.fillText('Q3', 500, 20);
  ctx.restore();
}

function drawSecotr() {
  let total = 0;
  let prevAngle = 0;
  let angle = 0;
  data.forEach(item => {
    total += item.num;
  });

  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#333';
  ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
  ctx.font = 'normal 12px DiNOT';
  data.forEach((item, index) => {
    ctx.beginPath();
    ctx.fillStyle = createColor();
    angle = Math.PI * 2 * (item.num / total);
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(start.x + radius * Math.cos(prevAngle), start.y + radius * Math.sin(prevAngle));
    ctx.arc(start.x, start.y, radius, prevAngle, prevAngle + angle, false);
    prevAngle += angle;
    ctx.rect(500, 200 + index * 30, 20, 20);
    ctx.fill();
    ctx.strokeText(item.type + ' ' + (item.num * 100 / total).toFixed(2) + '%' , 530, 200 + index * 30);
  });
  ctx.restore();
}


export function init() {
  drawTitle();
  drawSecotr();
}