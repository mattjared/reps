var matt = document.querySelector('#matt');

// [].forEach.call( document.querySelector('a'), function(el) {
//   el.addEventListener('click', function(){
//     console.log('link was clicked');
//   }, false);
// });

[].forEach.call( document.querySelectorAll('a'), function(el) {
   el.addEventListener('click', function() {
     console.log('link was clicked');
  }, false);
});