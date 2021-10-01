let age = 0;
age = prompt("Entrez un chiffre entre 1 et 3 compris :");
while (age < 1 || age > 3) {
  age = prompt(
    "Un petit effort... Un chiffre entre 1 et 3, petit indice : il y a 2 aussi !"
  );
}
