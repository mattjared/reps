// Looping a triangle
for (var sym = "#"; sym.length <= 7; sym += "#") {
  document.write(sym + "</br>");
  console.log(sym);
}

//Fizzbuzz
var fizz = "Fizz";
var buzz = "Buzz";

for (var count = 0; count <= 100; count++) {
  if (count % 3 == 0 && count % 5 == 0) {
    console.log(count + fizz+buzz);
  }
  else if (count % 3 == 0) {
    console.log(count + fizz);
  }
  else if (count % 5 == 0) {
    console.log(count + buzz);
  }
}

