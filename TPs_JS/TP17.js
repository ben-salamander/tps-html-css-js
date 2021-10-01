// Init
const taille = parseInt(prompt("Entrez la taille de la matrice :"));
const matrice = [];
let diagonale1 = 0;
let diagonale2 = 0;
let sommeDiag = 0;

for (let i = 0; i < taille; i++) {
  matrice.push([]);
  for (let j = 0; j < taille; j++) {
    matrice[i].push(parseInt(Math.random() * 2));
  }
}

// Calculs
for (let i = 0; i < taille; i++) {
  diagonale1 = matrice[i][i] + diagonale1;
}

for (let i = 0; i < taille; i++) {
  diagonale2 = matrice[i][taille - i - 1] + diagonale2;
}

sommeDiag = diagonale1 + diagonale2;
if (taille % 2 != 0) {
  sommeDiag = sommeDiag - matrice[parseInt(taille / 2)][parseInt(taille / 2)];
}

// Affichage
for (let i = 0; i < taille; i++) {
  console.log(matrice[i].toString());
}

console.log(`La somme des diagonales est de ${sommeDiag}`);
