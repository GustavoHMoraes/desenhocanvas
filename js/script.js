const canvas = document.getElementById('canva');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 5;
ctx.moveTo(550,150);
ctx.lineTo(350,225);
ctx.stroke();

ctx.lineWidth = 5;
ctx.moveTo(350,225);
ctx.lineTo(250,390);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(550, 100);
ctx.quadraticCurveTo(220, 80, 200, 380);
ctx.stroke();

ctx.lineWidth = 5;
ctx.moveTo(272,360);
ctx.lineTo(210,300);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="#00C8F0"
ctx.lineWidth = 5;
ctx.moveTo(200, 430);
ctx.bezierCurveTo(270, 440, 300, 440, 250, 390)
ctx.stroke();
ctx.fill();


ctx.beginPath();
ctx.fillStyle="#00C8F0"
ctx.lineWidth = 5;
ctx.moveTo(200, 430);
ctx.quadraticCurveTo(10, 400, 200, 380);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(100, 210, 70, 0, 2 * Math.PI);
ctx.lineWidth = 10;
ctx.stroke();

ctx.lineWidth = 5;
ctx.moveTo(200,380);
ctx.lineTo(250,390);
ctx.stroke();

ctx.lineWidth = 5;
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