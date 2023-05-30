const canvas = document.getElementById('canva');
const ctx = canvas.getContext('2d');

ctx.moveTo(10,500);
ctx.fillStyle = "green";
ctx.fillRect(0,400,800,100);

//perna direita

ctx.lineWidth = 5;
ctx.moveTo(450,150);
ctx.lineTo(350,225);
ctx.stroke();

ctx.moveTo(350,225);
ctx.lineTo(250,390);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450, 40);
ctx.bezierCurveTo(250, 180, 280, 160, 200, 380)
ctx.stroke();

ctx.moveTo(272,360);
ctx.lineTo(215,330);
ctx.stroke();

//perna esquerda

ctx.lineWidth = 5;
ctx.moveTo(650,100);
ctx.lineTo(600,225);
ctx.stroke();

ctx.moveTo(600,225);
ctx.lineTo(550,390);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(550, 100);
ctx.bezierCurveTo(520, 180, 510, 160, 500, 380)
ctx.stroke();

ctx.moveTo(500,380);
ctx.lineTo(550,390);
ctx.stroke();

//chuteira direita

ctx.lineWidth = 5;
ctx.beginPath();
ctx.fillStyle="#00C8F0"
ctx.moveTo(200, 430);
ctx.bezierCurveTo(270, 440, 280, 430, 250, 390)
ctx.stroke();
ctx.fill();

ctx.fillStyle="#00C8F0"
ctx.moveTo(200, 430);
ctx.bezierCurveTo(80, 400, 80, 350, 250, 390)
ctx.stroke();
ctx.fill();

ctx.moveTo(200,400);
ctx.quadraticCurveTo(150, 430, 250, 410);
ctx.stroke();

//chuteira esquerda

ctx.lineWidth = 5;
ctx.beginPath();
ctx.fillStyle="#00C8F0"
ctx.moveTo(500, 430);
ctx.bezierCurveTo(370, 410, 380, 360, 550, 390)
ctx.stroke();
ctx.fill();

ctx.fillStyle="#00C8F0"
ctx.moveTo(500, 430);
ctx.bezierCurveTo(580, 440, 580, 430, 550, 390)
ctx.stroke();
ctx.fill();

ctx.moveTo(200,400);
ctx.quadraticCurveTo(150, 430, 250, 410);
ctx.stroke();

//bola
 
ctx.beginPath();
ctx.arc(100, 210, 70, 0, 2 * Math.PI);
ctx.lineWidth = 10;
ctx.stroke();

ctx.lineWidth = 8;
ctx.strokeStyle ="black";
ctx.fillStyle ="black";
ctx.beginPath();
ctx.moveTo(100, 160);
ctx.lineTo(145, 198);
ctx.lineTo(130, 240);
ctx.lineTo(70, 240);
ctx.lineTo(55, 198);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.moveTo(100,160);
ctx.lineTo(100,145);
ctx.stroke();

ctx.moveTo(145,198);
ctx.lineTo(170,198);
ctx.stroke();

ctx.moveTo(130,240);
ctx.lineTo(155,250);
ctx.stroke();

ctx.moveTo(70,240);
ctx.lineTo(45,250);
ctx.stroke();

ctx.moveTo(55,198);
ctx.lineTo(30,198);
ctx.stroke();

//shorts

ctx.moveTo
