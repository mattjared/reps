// Global
var now = new Date();

// Day of Month and Day of Week
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    today = now.getDay(),
    nameDay = days[today],
    date = now.getDate(),
    monthDay = date.toString(),
    sequencing = monthDay.substr(monthDay.length - 1);
if (sequencing === "1") { sequencing = "st"; }
else if (sequencing === "2") { sequencing = "nd";}
else if (sequencing === "3") { sequencing = "rd";}
else { sequencing = "th"; }

// Days Remaing in Month
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    month = now.getMonth(),
    currentMonth = months[month];

if (month = 0 || 2 || 4 || 6 || 7 || 9 || 11) { var remaining = 31; }
else if (month = 1 || 3 || 5 || 8 || 10 ) { var remaining = 30; }
else { var remaining = 28; }

var totalRemain = remaining - date;
if (totalRemain == 1) {
  var remainStr = totalRemain + " " + "day";
}
else {
  var remainStr = totalRemain + " " + "days";
}
// Writing to the DOM
document.getElementById("dayOfWeek").innerHTML = nameDay;
document.getElementById("date").innerHTML = date + sequencing + " " +  "of" + " " + currentMonth + ".";
document.getElementById("remaining").innerHTML = remainStr;

