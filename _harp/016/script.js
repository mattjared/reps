window.onload = function() {
  setInterval(rotate, 500);
}

function rotate() {
  var color = ["#4183D7", "#D64541", "#F9F1DC"];
  var filter = color[Math.floor(Math.random() * color.length)];
  var add  = document.querySelector("html");
  add.style.backgroundColor = filter;

  if (filter == "#F9F1DC") {
    var white = document.querySelector("html");
    white.style.color = "blue";
  } else {
    var white = document.querySelector("html");
    white.style.color = "white";
  }
}

