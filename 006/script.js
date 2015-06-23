function myFunc(theObject) {
  theObject.brand = "Toyata"
}

var myCar = {
  brand: "Honda",
  model: "Accord",
  year: 1998
}

var yourCar = {
  brand: "Ford",
  model: "POS",
  year: 2002
}

document.writeln(myCar.brand + "<br/>" + yourCar.brand + "<br/>");

var x = new Number(Math.random(Math.floor()*1));
document.writeln(x + "<br/>");

function writeName() {
  var firstName = document.getElementById("firstName");
  var namer = firstName.value;
  document.getElementById("nameArea").innerHTML = namer;
}
