var ctx = document.getElementById("myCanvas").getContext("2d");
ctx.beginPath();
ctx.fillStyle="#6767ff";
ctx.arc(95,80,50,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="blue";
ctx.arc(110,100, 20, 0, 2*Math.PI);
ctx.fill();
function protophase(){
ctx.beginPath();
ctx.fillStyle="#6767ff";
ctx.arc(110,110,100,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="blue";
ctx.arc(150,150, 40, 0, 2*Math.PI);
ctx.fill();
  document.getElementById("b").innerHTML="<button onclick='metaphase()'>Forwards</button>";
  document.getElementById("h").innerHTML="protophase";
}
function metaphase(){
  ctx.beginPath();
ctx.fillStyle="#6767ff";
ctx.arc(110,110,100,0,2*Math.PI);
ctx.fill();
  ctx.beginPath();
ctx.fillStyle="blue";
ctx.arc(150,150, 20, 0, 2*Math.PI);
  ctx.arc(70,150, 20, 0, 2*Math.PI);
ctx.fill();
  var x = 98.5;
  var y = 98.5;
  var x1 = x+25;
  var y1 = y+25;
    ctx.beginPath();
  ctx.strokeStyle="#000000";
  X(x, y, x1, y1);
  X(x, y+35, x1, y1+35);
  X(x, y+70, x1, y1+70);
  X(x, y-35, x1, y1-35);
  X(x, y-70, x1, y1-70);
  ctx.lineWidth=1;
  ctx.moveTo(50, 110);
  ctx.lineTo(110, 110);
  ctx.moveTo(50, 110);
  ctx.lineTo(110, 145);
  ctx.moveTo(50, 110);
  ctx.lineTo(110, 180);
  ctx.moveTo(50, 110);
  ctx.lineTo(110, 110-35);
  ctx.moveTo(50, 110);
  ctx.lineTo(110, 110-70);
  ctx.moveTo(200, 110);
  ctx.lineTo(110, 110);
  ctx.moveTo(200, 110);
  ctx.lineTo(110, 145);
  ctx.moveTo(200, 110);
  ctx.lineTo(110, 180);
  ctx.moveTo(200, 110);
  ctx.lineTo(110, 110-35);
  ctx.moveTo(200, 110);
  ctx.lineTo(110, 110-70);
  ctx.stroke();
  ctx.closePath();
  document.getElementById("h").innerHTML="metaphase";
  document.getElementById("b").innerHTML="<button onclick='anaphase()'>Forwards</button>";
}
function x(x3,y1,y2,cx,cy){
  ctx.moveTo(x3, y1);
  ctx.lineTo(cx, cy);
  ctx.lineTo(x3,y2);
}
function X(x1,y1,x2,y2){
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.moveTo(x2, y1);
  ctx.lineTo(x1, y2);
}
function anaphase(){
  var x1 = 70;
  var x2 = 170;
  ctx.beginPath();
ctx.fillStyle="#6767ff";
ctx.arc(110,110,100,0,2*Math.PI);
ctx.fill();
  ctx.beginPath();
ctx.fillStyle="blue";
ctx.arc(110,175, 20, 0, 2*Math.PI);
  ctx.arc(110,50, 20, 0, 2*Math.PI);
ctx.fill();
  ctx.beginPath();
  ctx.strokeStyle="#000000";
  ctx.lineWidth=1;
  ctx.moveTo(50, 110);
  ctx.lineTo(x1, 110);
  ctx.moveTo(50, 110);
  ctx.lineTo(x1, 145);
  ctx.moveTo(50, 110);
  ctx.lineTo(x1, 180);
  ctx.moveTo(50, 110);
  ctx.lineTo(x1, 110-35);
  ctx.moveTo(50, 110);
  ctx.lineTo(x1, 110-70);
  ctx.moveTo(200, 110);
  ctx.lineTo(x2, 110);
  ctx.moveTo(200, 110);
  ctx.lineTo(x2, 145);
  ctx.moveTo(200, 110);
  ctx.lineTo(x2, 180);
  ctx.moveTo(200, 110);
  ctx.lineTo(x2, 110-35);
  ctx.moveTo(200, 110);
  ctx.lineTo(x2, 110-70);
  x(x2-12.5,110+12.5,110-12.5,x2,110);
  x(x1+12.5,110+12.5,110-12.5,x1,110);
  x(x2-12.5,145+12.5,145-12.5,x2,145);
  x(x1+12.5,145+12.5,145-12.5,x1,145);
  x(x2-12.5,180+12.5,180-12.5,x2,180);
  x(x1+12.5,180+12.5,180-12.5,x1,180);
  x(x2-12.5,75+12.5,75-12.5,x2,75);
  x(x1+12.5,75+12.5,75-12.5,x1,75);
  x(x2-12.5,40+12.5,40-12.5,x2,40);
  x(x1+12.5,40+12.5,40-12.5,x1,40);
  ctx.stroke();
  document.getElementById("h").innerHTML="anaphase";
  document.getElementById("b").innerHTML="<button>Forwards</button>";
}