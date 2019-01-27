;(function (window, document) {

  const canvas = document.getElementById('mycanvas');
  const ctx = canvas.getContext('2d');

  const x = 200;
  const y = 200;
  const width = 20;
  const height = 20;

  let rotation = 0;

  function drawScreen() {

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 300,300);

    ctx.fillStyle = '#fff';
    ctx.font = '20px Microsoft Yahei';
    ctx.textBaseline = 'top';
    ctx.fillText('test', 200-width/2, 360);

    ctx.save();

    let angle = 30 * Math.PI / 180;

    ctx.translate(x, y);
    ctx.rotate(angle);

    // draw ship
    ctx.beginPath();

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;

    ctx.moveTo(0, -width/2);
    ctx.lineTo(-width/2, height/2);
    ctx.lineTo(0, 0);

    ctx.moveTo(0, -width/2);
    ctx.lineTo(width/2, height/2);
    ctx.lineTo(0, 0);

    ctx.moveTo(-width/10, height/2);
    ctx.lineTo(width/10, height/2)

    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    // ctx.strokeStyle = '#f11';
    ctx.moveTo(0, height/2);
    ctx.lineTo(0, height);
    ctx.stroke();

    ctx.closePath();

    ctx.restore();

    rotation++;

  }

  drawScreen()

  setInterval( () => {

    // drawScreen()

  }, 100);

})(window, document);