const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

const brush = new Image();
let isDrawing;
let lastPoint;

function distanceBetween(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}

function angleBetween(point1, point2) {
  return Math.atan2(point2.x - point1.x, point2.y - point1.y);
}

function mouseDown(e) {
  isDrawing = true;
  lastPoint = getMouse(e, canvas);
}

function mouseMove(e) {
  if (!isDrawing) {
    return;
  }
  const currentPoint = getMouse(e, canvas);
  const dist = distanceBetween(lastPoint, currentPoint);
  const angle = angleBetween(lastPoint, currentPoint);
  let x, y;
  for (let i = 0; i < dist; i++) {
    x = lastPoint.x + Math.sin(angle) * i - 25;
    y = lastPoint.y + Math.cos(angle) * i - 25;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.drawImage(brush, x, y);
  }

  lastPoint = currentPoint;
  handlePercentage(getFilledInPixels(32));
}

function mouseUp(e) {
  isDrawing = false;
}

function getFilledInPixels(stride) {
  if (!stride || stride < 1) {
    stride = 1;
  }
  const pixels = ctx.getImageData(0, 0, width, height);
  const pdata = pixels.data;
  const len = pdata.length;
  const total = len / stride;
  let count = 0;
  for (let i = 0; i < len; i += stride) {
    if (parseInt(pdata[i]) === 0) {
      count++;
    }
  }
  return Math.round((count / total) * 100);
}

function getMouse(e, canvas) {
  let offsetX = 0;
  let offsetY = 0;
  let mx, my;
  if (canvas.offsetParent !== undefined) {
    do {
      offsetX += canvas.offsetLeft;
      offsetY += canvas.offsetTop;
    } while ((canvas = canvas.offsetParent));
  }
  mx = (e.pageX || e.touches[0].clientX) - offsetX;
  my = (e.pageY || e.touches[0].clientY) - offsetY;
  return {
    x: mx,
    y: my
  };
}

function handlePercentage(filledInPixels) {
  filledInPixels = filledInPixels || 0;
  console.log(filledInPixels + '%');
  if (filledInPixels > 80) {
    canvas.parentNode.removeChild(canvas);
  }
}

function draw() {
  brush.src = '../images/brush.png';
  ctx.save();
  ctx.fillStyle = '#ddd';
  ctx.fillRect(0, 0, width - 2, height - 2);
  ctx.restore();
}

function test1() {
  canvas.addEventListener('mousedown', mouseDown, false);
	canvas.addEventListener('mousemove', mouseMove, false);
	canvas.addEventListener('mouseup', mouseUp, false);
	draw();
}

function test2() {
  const img = new Image();
	img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = '../images/audrey.jpeg';
  scratch.classList.remove('test');
  test1();
}

export function init() {
  scratch.classList.add('test');
  ctx.restore();
  test1();
  // test2();
}
