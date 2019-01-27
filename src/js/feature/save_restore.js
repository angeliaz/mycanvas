const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

export function init() {
 
  ctx.save();
  ctx.translate(100, 100);

  ctx.fillStyle = 'red';
  ctx.fillRect(10, 0, 200, 200);
  ctx.save();

  ctx.fillStyle = 'green';
  ctx.fillRect(20, 50, 200, 200);
  ctx.save();

  ctx.fillStyle = 'yellow';
  ctx.fillRect(30, 100, 200, 200);
  ctx.save();

  ctx.fillStyle = 'blue';
  ctx.fillRect(40, 150, 200, 200);
  ctx.save();

  ctx.restore();
  ctx.fillRect(310, 0, 200, 200);

  ctx.restore();
  ctx.fillRect(320, 50, 200, 200);

  ctx.restore();
  ctx.fillRect(330, 100, 200, 200);

  ctx.restore();
  ctx.fillRect(340, 150, 200, 200);

  ctx.restore();
  // ctx.fillRect(350, 200, 200, 200);

 /*  ctx.restore();
  ctx.fillRect(350, 200, 200, 200); */


}