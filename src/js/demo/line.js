const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

const data = require('../data/tx.js');
const nonGAAPProfit = data.nonGAAPProfit;

const hasBaseLine = false;
const growthCount = 6;
const keyPoint = {
  lt: {x: 100, y: 100},
  lb: {x: 100, y: 500},
  rt: {x: 900, y: 100},
  rb: {x: 900, y: 500}
}


function drawBase() {
  ctx.save();
  ctx.translate(0.5, 0.5);
  ctx.lineWidth = 1;
  ctx.fillStyle = '#333';
  ctx.strokeStyle = hasBaseLine ? '#ddd' : '#666';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
  ctx.font = 'bold 30px DiNOT';
  ctx.fillText('700 Non- GAAP 净利润', 500, 20);
  
  ctx.beginPath();
  ctx.moveTo(keyPoint.lt.x, keyPoint.lt.y);
  ctx.lineTo(keyPoint.lb.x, keyPoint.lb.y);
  ctx.lineTo(keyPoint.rb.x, keyPoint.rb.y);
  ctx.stroke();

  ctx.lineWidth = 1;
  ctx.font = 'bold 14px DiNOT';

  ctx.save();
  ctx.lineWidth = 2;
  ctx.textAlign = 'left';
  ctx.strokeStyle = 'orange';
  ctx.beginPath();
  ctx.moveTo(370, 560);
  ctx.lineTo(390, 560);
  ctx.stroke();
  ctx.fillText('同比增速', 400, 560);
  
  ctx.strokeStyle = '#fb516b';
  ctx.beginPath();
  ctx.moveTo(570, 560);
  ctx.lineTo(590, 560);
  ctx.stroke();
  ctx.fillText('净利率', 600, 560);
  ctx.restore();

  const gridWidth = (keyPoint.rb.x - keyPoint.lb.x) / nonGAAPProfit.length;
  const girdHeight = (keyPoint.lb.y - keyPoint.lt.y) / growthCount;
  // 纵轴
  ctx.textAlign = 'right';
  ctx.beginPath();
  for (let i = 0; i <= growthCount; i++) {
    const cordY = Math.ceil(keyPoint.lb.y - girdHeight * i);
    ctx.fillText(i * 10 + '%', keyPoint.lb.x - 10, cordY);
    if (hasBaseLine) {
      ctx.moveTo(keyPoint.lb.x, cordY);
      ctx.lineTo(keyPoint.rb.x, cordY);
    } else {
      ctx.moveTo(keyPoint.lb.x - 5, cordY);
      ctx.lineTo(keyPoint.lb.x, cordY);
    }
  }
  // 横轴
  ctx.textAlign = 'center';
  for (let j = 0; j < nonGAAPProfit.length; j++) {
    const cordX = Math.ceil(keyPoint.lb.x + gridWidth * (j));
    ctx.fillText(nonGAAPProfit[j].time, cordX, keyPoint.lb.y + 20);
    if (hasBaseLine) {
      ctx.moveTo(cordX, keyPoint.lt.y);
      ctx.lineTo(cordX, keyPoint.lb.y);
    } else {
      ctx.moveTo(cordX, keyPoint.lb.y);
      ctx.lineTo(cordX, keyPoint.lb.y + 5);
    }
  }
  if (hasBaseLine) {
    ctx.moveTo(keyPoint.rt.x, keyPoint.rt.y);
    ctx.lineTo(keyPoint.rb.x, keyPoint.rb.y);
  }
  ctx.stroke();
  
}

function drawYnyRateLine() {
  const gridWidth = (keyPoint.rb.x - keyPoint.lb.x) / nonGAAPProfit.length;
  ctx.save();
  ctx.lineWidth = 2;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'bottom';
  ctx.strokeStyle = 'orange';
  ctx.beginPath();
  nonGAAPProfit.forEach((item, index) => {
    const cordX = Math.ceil(keyPoint.lb.x + gridWidth * index);
    const cordY = Math.ceil(keyPoint.lb.y - ((keyPoint.lb.y - keyPoint.lt.y) * item.ynyGrowthRate) / (growthCount*10));
    if (!index) {
      ctx.moveTo(cordX, cordY);
    } else {
      ctx.lineTo(cordX, cordY);
    }
    ctx.fillText(item.ynyGrowthRate + '%', cordX, cordY - 10);
  });
  ctx.stroke();
  ctx.restore();
}

function drawNetInterestRateLine() {
  const gridWidth = (keyPoint.rb.x - keyPoint.lb.x) / nonGAAPProfit.length;
  ctx.save();
  ctx.lineWidth = 2;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'bottom';
  ctx.strokeStyle = '#fb516b';
  ctx.beginPath();
  nonGAAPProfit.forEach((item, index) => {
    const cordX = Math.ceil(keyPoint.lb.x + gridWidth * index);
    const cordY = Math.ceil(keyPoint.lb.y - ((keyPoint.lb.y - keyPoint.lt.y) * item.netInterestRate) / (growthCount*10));
    if (!index) {
      ctx.moveTo(cordX, cordY);
    } else {
      ctx.lineTo(cordX, cordY);
    }
    ctx.fillText(item.netInterestRate + '%', cordX, cordY - 10);
  });
  ctx.stroke();
  ctx.restore();
}

export function init() {
  ctx.fillStyle = 'pink';
  drawBase();
  drawYnyRateLine();
  drawNetInterestRateLine();
}