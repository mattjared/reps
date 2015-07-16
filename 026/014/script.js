var canvas = document.querySelector("#c1");
var context = canvas.getContext('2d');
context.fillStyle = 'blue';
context.fillRect(10, 10, 100, 100);

var cx = document.querySelector('#c2').getContext('2d');
cx.strokeStyle = "blue";
cx.strokeRect(5, 5, 50, 50);
cx.lineWidth = 15;
cx.strokeRect(135, 5, 150, 150);
