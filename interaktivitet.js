const snaps = document.querySelector("#snaps");
const oel = document.querySelector("#oel");
const fanta = document.querySelector("#fanta");
const cola = document.querySelector("#cola");

snaps.addEventListener("mousedown", alkohol);
oel.addEventListener("mousedown", alkohol);
fanta.addEventListener("mousedown", alkohol);
cola.addEventListener("mousedown", alkohol);

function alkohol() {
  if (this.alt == "snaps" || this.alt == "oel") {
    console.log("Indeholder alkohol");
  } else;
  {
    console.log("Indeholder ikke alkohol");
  }
}
