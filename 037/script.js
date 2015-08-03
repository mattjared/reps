var toyota = {
  make: toyota,
  year: 1997,
  speed: 20,
  accelerate: function(){
          this.speed += 10;
  }
};

console.log(toyota);
console.log(toyota.speed);
console.log(toyota.accelerate());
console.log(toyota.speed);

var honda = {
  make: 'honda',
  year: 2002,
  speed: 20
};

console.log(honda.speed);
console.log(toyota.accelerate.call(honda));
console.log(honda.speed);
// console.log(honda.accelerate());

// var divs = document.querySelectorAll('div');
// divs instanceOf Array

// divs.forEach(function(div){
//     console.log(div);
// });

// var divs = Array.protoype.slice.call(document.querySelectorAll('div'));
// // divs instanceOf Array;
// div.forEach(function(div){
//     div.style.outline = "1px solid red";
// });

// function showArgs() {
//     console.log(arguments);
//     console.log(arguments instanceof Array);
// }

// console.log(showArgs('stuff', 'things', 10, []));

function showArgs() {
    var args = Array.prototype.slice.apply(arguments);
    args.forEach(function(arg) {
        console.log(arg);
    });
    console.log(args instanceof Array);
}

showArgs('stuff', 'things', 10, []);
