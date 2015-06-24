var square = function(x) {
  return x + x;
};

console.log(square(12));

var gobble = function(){
  console.log("Gobble");
}

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(2, 4 ));