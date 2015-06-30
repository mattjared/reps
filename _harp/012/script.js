var reps = ["Batman", "Superman", "Spiderman"]

document.write("There are " + reps.length + " people in this list");
document.write("</br> The first is " + reps[0]);
document.write("</br> The second is " + reps[1]);
document.write("</br> The third is " + reps[2]);

function rotate() {
  var color = ["#D64541", "#F1A9A0", "#674172", "#1E8BC3", "#36D7B7", "#5D76E", "#F9690E", "#D2D7D3"];
  var rand = color[Math.floor(Math.random() * color.length)];
  console.log(rand);
  var add  = document.querySelector("#add");
  add.style.backgroundColor = rand;

}


