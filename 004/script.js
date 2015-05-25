Date.prototype.addDays = function(days) {
  var finish = new Date(this.valueOf());
  finish.setDate(finish.getDate() + days);
  return finish;
}

var finish = new Date();

document.getElementById('finishing').innerHTML = finish.addDays(100);