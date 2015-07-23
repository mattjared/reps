document.querySelector('#first').focus();

function doMath(){
  var first = parseInt(document.querySelector('#first').value);
  var second = parseInt(document.querySelector('#second').value);
  var third = first + second;
  document.querySelector('#answer').innerHTML = third;
}


