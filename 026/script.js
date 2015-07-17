document.querySelector('#test1').blur();
console.log(document.activeElement.tagName);

function clicker() {
    console.log("hello");
}

var form = document.querySelector('form');
console.log(form.elements[2].type);
console.log(form.elements.password.type);
console.log(form.elements.name.type == form);

var form1 = document.querySelector('#form1');
form1.addEventListener('submit', function(event){
  console.log("Saving value", form1.elements.value.value);
  event.preventDefault();
});

var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', function(event){
  if (event.keyCode == 113) {
    replaceSelection(textarea, "Khasekhemwy");
    event.preventDefault();
  }
});