var cx = document.querySelector('#c1').getContext('2d');
cx.beginPath();
cx.moveTo(50, 10);
cx.lineTo(10, 70);
cx.lineTo(90, 70);
cx.fill();

var cx = document.querySelector('#c2').getContext('2d');
cx.beginPath();
cx.moveTo(10, 90);
// control=(60, 10) goal=(90, 90);
cx.quadraticCurveTo(60, 10, 90, 90);
cx.lineTo(60, 10);
cx.closePath();
cx.stroke();