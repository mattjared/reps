var myHashTable = {};
myHashTable["name"] = "Jason Jasonsonson";
myHashTable.city = "New Alsace";

// var myHashTable = new Object();

for (var n in myHashTable) {
  if (myHashTable.hasOwnProperty(n)) {
    document.writeln("<p>" + n + ": " +  myHashTable[n] + "</p>")
  }
}