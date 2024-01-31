var currentHour = new Date().getHours();

function sigGoddag(hour) {
  if (hour >= 5 && hour < 10) {
    console.log("Godmorgen");
  } else if (hour >= 10 && hour < 18) {
    console.log("Goddag");
  } else if (hour >= 18 && hour < 24) {
    console.log("Godaften");
  } else {
    console.log("Godnat");
  }
}

var hilsen = sigGoddag(currentHour);

console.log(hilsen);
