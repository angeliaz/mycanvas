export function init(params) {
  const canvas = document.getElementById('mycanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(10, 10, 100, 100);

  mycanvas1.style.display = 'block';
  mycanvas2.style.display = 'block';

  const canvas1 = document.getElementById('mycanvas1');
  const ctx1 = canvas1.getContext('2d');
  ctx1.fillStyle = 'red';
  ctx1.fillRect(10, 10, 100, 100);

  const canvas2 = document.getElementById('mycanvas2');
  const ctx2 = canvas2.getContext('2d');
  ctx2.fillStyle = 'red';
  ctx2.fillRect(10, 10, 100, 100);
}
