var myHashTable = {};
myHashTable["name"] = "Jason Jasonsonson";
myHashTable.city = "New Alsace";

// var myHashTable = new Object();

for (var n in myHashTable) {
  if (myHashTable.hasOwnProperty(n)) {
    document.writeln("<p>" + n + ": " +  myHashTable[n] + "</p>")
  }
}

var myObj = {
  name: "Sneaky W. Roberts",
  'goto': "jail",
  grade: 'A',
  level: 3
};

var matt = new Object();

matt.living = true;
matt.age = 27;
matt.gender = 'male';
document.writeln(matt.living);