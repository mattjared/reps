document.querySelector('#first').focus();

// var operation = document.getElementsByName('operation').value;
// console.log(operation.length);

function doMath(){
  var first = parseInt(document.querySelector('#first').value);
  var second = parseInt(document.querySelector('#second').value);
  var third = (first / second) * 100;
  document.querySelector('#answer').innerHTML = third;
}


