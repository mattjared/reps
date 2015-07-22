
var button = document.querySelector("button");
button.addEventListener("mousedown", function(event){
  if (event.which == 1) {
    console.log("first stupid thing, one finger tap");
  }
  else {
    console.log("no more stupid things, two finger tap");
  }
});