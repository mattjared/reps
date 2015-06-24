// Basically just copied this one down. Couldn't figure out adding the "#" character and spaces. I should have been thinking about the entire board rather than trying to print an octothorpe. I've cheated on 66% of these so far. I suck, for now! =]

var size = 8;
var board = "";
for (var y = 0; y < size; y++ ) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    }
    else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);