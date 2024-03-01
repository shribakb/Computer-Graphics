const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 800;

const width = canvas.width;
const height = canvas.height;

ctx.clearRect(0, 0, width, height);

ctx.beginPath();
ctx.moveTo(0, height / 2);
ctx.lineTo(width, height / 2);
ctx.moveTo(width / 2, 0);
ctx.lineTo(width / 2, height);
ctx.strokeStyle = '#000';
ctx.stroke();

ctx.fillText(0, width / 2 - 10, height / 2 + 10);

const step = 40; 
for (let i = -width / 2; i < width / 2; i += step) {


  ctx.beginPath();
  ctx.moveTo(width / 2 + i, height / 2 - 5);
  ctx.lineTo(width / 2 + i, height / 2 + 5);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(width / 2 - 5, height / 2 - i);
  ctx.lineTo(width / 2 + 5, height / 2 - i);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  if (i % 20 === 0) { 
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText(i.toString(), width / 2 + i - 5, height / 2 + 15);
    ctx.fillText(i.toString(), width / 2 - 25, height / 2 - i + 5);
  }
function funcDrawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = 'rgb(97, 97, 97)';
  ctx.stroke();
  ctx.closePath();
}
  
ctx.font = '20px Arial'; 
ctx.fillStyle = 'rgb(97, 97, 97)'; 

funcDrawLine(500, 0, 490, 15);
funcDrawLine(500, 0, 510, 15);

ctx.fillText("y", 520, 15);

funcDrawLine(1000, 400, 990, 390);
funcDrawLine(1000, 400, 990, 410);

ctx.fillText("x", 985, 425);



  function funcDrawButton() {
    const x1 = parseInt(document.getElementById('x1').value) + width / 2;
    const y1 = -1 * parseInt(document.getElementById('y1').value) + height / 2;
    const x2 = parseInt(document.getElementById('x2').value) + width / 2;
    const y2 = -1 * parseInt(document.getElementById('y2').value) + height / 2;

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2))
    {
      alert('Невірні дані. Поля повинні бути заповнені числами.');
    }
    else if(x1 < 0 || y1 < 0 || x2 > 1000 || y2 > 800)
    {
      alert('Невірні координати. Ви виходите за межі області площини.');
    }
    else if (x1 > 500 || y1 > 400 || x2 > 500 || y2 > 400)
    {
      alert('Невірні координати. Прямокутник має бути розміщений в 2 координатній чверті.');
    }
    else if (x1 > x2 || y2 < y1)
    {
      alert('Невірні координати. x1 має бути меншим за x2 і y1 має бути більшим за y2. Натисніть OK для перезавантаження сторінки.');
    }
    else {
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.rect(x1, y1, x2 - x1, y2 - y1);
      ctx.stroke();
      ctx.closePath(); 
    }
    }

    const drawDiagonalButton = document.getElementById('drawDiagonalButton');

    drawDiagonalButton.addEventListener('click', () => {
      const x1 = parseInt(document.getElementById('x1').value) + width / 2;
      const y1 = -1* parseInt(document.getElementById('y1').value) + height / 2;
      const x2 = parseInt(document.getElementById('x2').value) + width / 2;
      const y2 = -1 * parseInt(document.getElementById('y2').value) + height / 2;
      const color = document.getElementById('color').value;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.closePath();

    });

    function getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }

    randomTrianglesButton.addEventListener('click', () => {
      const x1 = parseInt(document.getElementById('x1').value) + width / 2;
      const y1 = -1* parseInt(document.getElementById('y1').value) + height / 2;
      const x2 = parseInt(document.getElementById('x2').value) + width / 2;
      const y2 = -1 * parseInt(document.getElementById('y2').value) + height / 2;

      const x4 = x2;
      const y4 = y1;

      const x3 = x1;
      const y3 = y2;


      const triangle1 = [[x1, y1], [x4, y4], [x2, y2]];
      const triangle2 = [[x1, y1], [x3, y3], [x2, y2]];

      const color1 = getRandomColor();
      const color2 = getRandomColor();

      ctx.beginPath();
      ctx.moveTo(triangle1[0][0], triangle1[0][1]);
      ctx.lineTo(triangle1[1][0], triangle1[1][1]);
      ctx.lineTo(triangle1[2][0], triangle1[2][1]);
      ctx.closePath();
      ctx.fillStyle = color1;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(triangle2[0][0], triangle2[0][1]);
      ctx.lineTo(triangle2[1][0], triangle2[1][1]);
      ctx.lineTo(triangle2[2][0], triangle2[2][1]);
      ctx.closePath();
      ctx.fillStyle = color2;
      ctx.fill();

    });

    const drawCircleButton = document.getElementById('drawCircleButton');

    drawCircleButton.addEventListener('click', () => {
      const x1 = parseInt(document.getElementById('x1').value) + width / 2;
      const y1 = -1* parseInt(document.getElementById('y1').value) + height / 2;
      const x2 = parseInt(document.getElementById('x2').value) + width / 2;
      const y2 = -1 * parseInt(document.getElementById('y2').value) + height / 2;
      const color = document.getElementById('color').value;

      const centerX = (x1 + x2) / 2; 
      const centerY = (y1 + y2) / 2;
      const radius = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)) / 2;

      ctx.beginPath();
      ctx.strokeStyle = 'rgb(97, 97, 97)';
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.stroke();
    });
    
}
