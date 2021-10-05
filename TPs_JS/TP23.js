const btnCalculer = document.querySelector("#btn-calculer");

const diametreOutput = document.querySelector("#diametre-output");
const circonferenceOutput = document.querySelector("#circonference-output");
const aireOutput = document.querySelector("#aire-output");

let rayon = 0;
let dimatre = 0;
let circonference = 0;
let aire = 0;

btnCalculer.addEventListener("click", calculer);

function calculer() {
  rayon = document.querySelector("#rayon-input").value;
  diametre = 2 * rayon;
  circonference = 2 * Math.PI * rayon;
  aire = Math.PI * rayon ** 2;
  diametreOutput.innerText = diametre;
  circonferenceOutput.innerText = circonference;
  aireOutput.innerText = aire;
}
