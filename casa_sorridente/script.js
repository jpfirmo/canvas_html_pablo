var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//base da casa
ctx.fillStyle = '#8b4513';
ctx.fillRect(175, 200, 150, 150);

// Desenhar o telhado
ctx.beginPath();
ctx.fillStyle = '#A52A2A'; 
ctx.moveTo(175, 200); 
ctx.lineTo(250, 125); 
ctx.lineTo(325, 200); 
ctx.closePath(); 
ctx.fill(); 

// sorriso da casa
ctx.beginPath();
ctx.arc(250, 280, 50, 0, 1 * Math.PI);
ctx.fillStyle = '#ffffff';
ctx.fill();
ctx.fillStyle = '#000000'; 

// Primeira janela
ctx.beginPath();
ctx.arc(200, 240, 15, 0, 2 * Math.PI); 
ctx.fill();

// Segunda janela
ctx.beginPath();
ctx.arc(300, 240, 15, 0, 2 * Math.PI); 
ctx.fill();
