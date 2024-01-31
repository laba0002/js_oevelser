document.querySelector("#tjek").addEventListener("click", tjekTal);

var rightNumber = Math.floor(Math.random() * 11);

function tjekTal() {
  var guessedNumber = Number(document.querySelector("#tal").value);

  if (guessedNumber == rightNumber) {
    alert(`TILLYKKE! ${rightNumber} er rigtigt - prøv igen?`);
    nytSpil;
  } else if (guessedNumber < rightNumber) {
    alert("Tallet er for lavt. Prøv igen!");
  } else {
    alert("Tallet er for højt. Prøv igen!");
  }
}

function nytSpil() {
  rightNumber = Math.floor(Math.random() * 11);

  document.querySelector("#tal").value = "";
}
