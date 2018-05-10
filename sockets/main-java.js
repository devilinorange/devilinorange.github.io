var canvas = document.querySelector('#draw-canvas');
var ctx = canvas.getContext('2d');
var mycolor = "black";

document.querySelector('#blue').onclick = function(){
	document.querySelector('#red').classList.remove('active');
	document.querySelector('#green').classList.remove('active');
	document.querySelector('#black').classList.remove('active');
	document.querySelector('#blue').classList.add('active');
	document.querySelector('#white').classList.remove('active');
	mycolor = "blue";
}
document.querySelector('#red').onclick = function(){
	document.querySelector('#red').classList.add('active');
	document.querySelector('#green').classList.remove('active');
	document.querySelector('#black').classList.remove('active');
	document.querySelector('#blue').classList.remove('active');
	document.querySelector('#white').classList.remove('active');
	mycolor = "red";
}
document.querySelector('#green').onclick = function(){
	document.querySelector('#red').classList.remove('active');
	document.querySelector('#green').classList.add('active');
	document.querySelector('#black').classList.remove('active');
	document.querySelector('#blue').classList.remove('active');
	document.querySelector('#white').classList.remove('active');
	mycolor = "green";
}
document.querySelector('#black').onclick = function(){
	document.querySelector('#red').classList.remove('active');
	document.querySelector('#green').classList.remove('active');
	document.querySelector('#black').classList.add('active');
	document.querySelector('#blue').classList.remove('active');
	document.querySelector('#white').classList.remove('active');
	mycolor = "black";
}
document.querySelector('#white').onclick = function(){
	document.querySelector('#red').classList.remove('active');
	document.querySelector('#green').classList.remove('active');
	document.querySelector('#black').classList.remove('active');
	document.querySelector('#blue').classList.remove('active');
	document.querySelector('#white').classList.add('active');
	mycolor = "white";
}

document.querySelector('#reset').onclick = function(){
	canvas.width = canvas.width;
}
canvas.onmousedown = function(event){
	// canvas.onmousemove = function(event){
	// 	var x = event.offsetX;
 // 		var y = event.offsetY;
 // 		ctx.fillRect(x - 3, y - 3, 6, 6);
 // 		ctx.fillStyle = mycolor;
 // 		ctx.fill();
	// }
	var x = event.offsetX;
  var y = event.offsetY;
  ctx.strokeStyle = mycolor;
  ctx.lineCap = "round";
  ctx.lineWidth = 5;
  ctx.moveTo (x,y);
  ctx.beginPath();
  canvas.onmousemove = function (event){
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.lineTo (x,y);
    ctx.stroke();
	}
	canvas.onmouseup = function(){
		canvas.onmousemove = null;
		ctx.closePath();
	}
}
var socket = io("http://localhost:8080/");