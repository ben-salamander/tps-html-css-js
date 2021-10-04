const num = prompt("Entrez un chiffre entre 1 et 3 compris :");
while (num < 1 || num > 3) {
  num = prompt(
    "Un petit effort... Un chiffre entre 1 et 3, petit indice : il y a 2 aussi !"
  );
}
