var matt = document.querySelector('#matt');

[].forEach.call( document.querySelectorAll('a'), function(el) {
   el.addEventListener('click', function() {
     console.log('link was clicked');
  }, false);
});

var rocket = new Object();
rocket.name = "Rocket";
rocket.lastName = "[redacted]";
rocket.someFunction1 = function someFunction1() {
  console.log(this.rocket);
}


var groot = {
  name: 'Groot',
  lastName: '[redacted]',
  someFunction2: function(){
    document.writeln(this.name);
  }
};

groot.someFunction2();

(function thanos() {
  return {
    firstName: 'Star',
    lastName: 'Lord'
  };
  console.log(firstName);
})();

function chopChop() {
  console.log('chop chop');
}

chopChop();