document.querySelector('#first').focus();

// var operation = document.getElementsByName('operation').value;
// console.log(operation.length);

function doMath(){
  var first = parseInt(document.querySelector('#first').value);
  var second = parseInt(document.querySelector('#second').value);

  if (document.getElementById("add").checked) {
    var third = first + second;
    document.querySelector('#answer').innerHTML = third;
  }
  else if (document.getElementById("subtract").checked) {
    var third = first - second;
    document.querySelector('#answer').innerHTML = third;
  }
  else if (document.getElementById("multiply").checked) {
    var third = first * second;
    document.querySelector('#answer').innerHTML = third;
  }else if (document.getElementById("divide").checked) {
    var third = first / second;
    document.querySelector('#answer').innerHTML = third;
  }

}


