var Person = function(living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function() {
    return this.gender;
  }
}

var matt = new Person(true, 27, 'male');
document.writeln(JSON.stringify(matt));