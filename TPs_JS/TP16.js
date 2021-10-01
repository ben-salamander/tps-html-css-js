const taille = parseInt(prompt("Entrez la taille de la matrice :"));
const matrice = [];
let diagonale = 0;

for (let i = 0; i < taille; i++) {
  matrice.push([]);
  for (let j = 0; j < taille; j++) {
    matrice[i].push(parseInt(Math.random() * 10));
  }
}

for (let i = 0; i < taille; i++) {
  diagonale = matrice[i][i] + diagonale;
}

for (let i = 0; i < taille; i++) {
  console.log(matrice[i].toString());
}

console.log(`La somme de la diagonale est de ${diagonale}`);
