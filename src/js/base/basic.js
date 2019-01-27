export function init() {
  const canvas = document.getElementById('mycanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'pink';
  ctx.fillRect(10, 10, 300, 300);
}