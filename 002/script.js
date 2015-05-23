// Global
var now = new Date(),
    date = now.getDate(),
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    month = now.getMonth(),
    currentMonth = months[month];

if (month = 0 || 2 || 4 || 6 || 7 || 9 || 11) { var remaining = 31; }
else if (month = 1 || 3 || 5 || 8 || 10 ) { var remaining = 30; }
else { var remaining = 28; }

var totalRemain = remaining - date;
if (totalRemain == 1) { var remainStr = totalRemain + " " + "day";}
else { var remainStr = totalRemain + " " + "days";}
document.getElementById("remaining").innerHTML = remainStr;

function calc() {
  var pay = document.getElementById("salary").value;
  document.getElementById("moneyLeft").style.display = "block";
  document.getElementById("monthly").innerHTML = ((pay /12) - ((pay / 12) * .25));
  var monthlyVal = document.getElementById("monthly").innerHTML;
  var x = document.getElementById("rent").innerHTML = monthlyVal * .25;
  var y = document.getElementById("retire").innerHTML = monthlyVal * .15;
  var overflow = monthlyVal - (x + y);
  document.getElementById("disposable").innerHTML = overflow;
}
