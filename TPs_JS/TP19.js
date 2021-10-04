//Functions
function sommeDiags(matrice) {
  let diagonale1 = 0;
  let diagonale2 = 0;
  let somme;
  // Calculs
  for (let i = 0; i < matrice.length; i++) {
    diagonale1 = matrice[i][i] + diagonale1;
  }

  for (let i = 0; i < matrice.length; i++) {
    diagonale2 = matrice[i][matrice.length - i - 1] + diagonale2;
  }

  somme = diagonale1 + diagonale2;
  if (matrice.length % 2 != 0) {
    somme =
      somme -
      matrice[parseInt(matrice.length / 2)][parseInt(matrice.length / 2)];
  }
  return somme;
}

//Variables
const matrice = [];
const taille = parseInt(prompt("Saisir la taille de la matrice :"));

//Matrice
for (let i = 0; i < taille; i++) {
  matrice.push([]);
  for (let j = 0; j < taille; j++) {
    matrice[i].push(parseInt(Math.random() * 10));
  }
}

//Calcul

// Affichage
for (let i = 0; i < taille; i++) {
  console.log(matrice[i].toString());
}

console.log(`La somme des diagonales est de ${sommeDiags(matrice)}`);
