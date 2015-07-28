document.querySelector('#roundable').focus();

function doMath(){
  var roundable = parseInt(document.querySelector('#roundable').value);
  var rounded = Math.floor(roundable);
  document.querySelector('#answer').innerHTML = rounded;
}

console.log('gonna make more later but just testing this for now and again now')
