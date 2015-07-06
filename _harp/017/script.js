var paras = document.body.getElementsByTagName("p");
  Array.prototype.forEach.call(paras, function(para) {
    if (para.getAttribute("data-classified") == "unclassified") {
      para.parentNode.removeChild(para);
    }
  });

var bill = document.querySelector('img');
var angle = 0,
    lastTime = null;

function animate(time) {
  if (lastTime != null) {
    angle += (time - lastTime) * 0.001;
  }
  lastTime = time;
  bill.style.top = (Math.sin(angle) * 20) + "px";
  bill.style.left = (Math.cos(angle) * 200) + "px";
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);