let age = prompt("Veuillez entrer l'age de votre enfant :");
if (age >= 7 && age <= 9) {
  alert("Votre enfant est un poussin.");
} else if (age >= 10 && age <= 11) {
  alert("Votre enfant est une pupille.");
} else if (age >= 12 && age <= 13) {
  alert("Votre enfant est un benjamin.");
} else if (age >= 14 && age <= 15) {
  alert("Votre enfant est un minime.");
} else if (age >= 16 && age <= 17) {
  alert("Votre enfant est un cadet.");
} else {
  alert("Cette personne ne rentre pas dans une catégorie.");
}
