// let knop = document.querySelector("#knop");

// knop.addEventListener("click", zegHallo);

// function zegHallo() {
//   alert("Hallo");
// }

let pokemonguess = document.querySelector("#pokemonimage");
let pokemon = "True";
let myInput = document.querySelector("#myInput");
let myButton = document.querySelector("#myButton");

myButton.addEventListener("click", myFunc);

function myFunc() {
  let antwoord = myInput.value.toLowerCase().trim();
  console.log(antwoord);

  if (antwoord == "guess") {
    pokemonimage.src = "Images/Whosthatpokemonsilhouette.png";
  } else if (antwoord == "ampharos") {
    pokemonimage.src = "Images/Whosthatpokemonfull.png";
  } else {
    pokemonimage.src = "Images/Whosthatreally.png";
  }
}

let knop2 = document.querySelector("#knop2");

knop2.addEventListener("click", VeranderKnop);

function VeranderKnop() {
  knop2.style.color = "pink";
  knop2.innerHTML = "Mareep is an anagram of Ampere.";
}
