var ewok = {};
ewok.speak = function(line) {
  document.write("The ewok says '" + line + "'");
};
ewok.speak("Oooteeni");

var starWars = {};
starWars.hanSolo = function() {
  document.getElementById('han').innerHTML = "I know";
  console.log("Han Solo");
}
starWars.lukeSkywalker = function() {
  document.getElementById('luke').innerHTML = "I'm a Jedi, like my father before me";
    console.log("Luke Skywalker")
}
starWars.leiaOrgana = function() {
  document.getElementById('leia').innerHTML = "You're a little short to be a storm trooper";
  console.log("Leia Organa")
}
