document.querySelector('#test1').blur();
console.log(document.activeElement.tagName);

function clicker() {
    console.log("hello");
}

// var form = document.querySelector('form');
// console.log(form.elements[2].type);
// console.log(form.elements.password.type);
// console.log(form.elements.name.type == form);

var form = document.querySelector('form');
form.addEventListener('submit', function(event){
  console.log("Saving value", form.elements.value.value);
  event.preventDefault();
});