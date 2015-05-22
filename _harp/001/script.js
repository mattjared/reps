var x = new Date(),
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    now = new Date(),
    today = now.getDay(),
    nameDay = days[today],
    dayOfMonth = now.getDate(),
    monthDay = dayOfMonth.toString();
    sequencing = monthDay.substr(monthDay.length - 1);

if (sequencing === "1") {
  sequencing = "st";
}
else if (sequencing === "2") {
 sequencing = "nd";
}
else if (sequencing === "3") {
  sequencing = "rd";
}
else {
  sequencing = "th";
}

var daysLeft =  31 - monthDay;
document.write(daysLeft);
document.getElementById("dayOfWeek").innerHTML = nameDay;
document.getElementById("dayOfMonth").innerHTML = dayOfMonth + sequencing;
