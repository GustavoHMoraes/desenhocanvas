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
ctx.lineWidth = 5;
ctx.moveTo(100, 430);
ctx.quadraticCurveTo(50, 410, 200, 380);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(100, 430);
ctx.quadraticCurveTo(300, 440, 250, 390);
ctx.stroke();

ctx.lineWidth = 5;
ctx.moveTo(200,380);
ctx.lineTo(250,390);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 210, 70, 0, 2 * Math.PI);
ctx.lineWidth = 10;
ctx.stroke();
