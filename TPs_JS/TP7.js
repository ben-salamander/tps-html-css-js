let num = parseInt(prompt("Entrez un chiffre entre 10 et 20"));
while (num > 20 || num < 10) {
  if (num > 20) {
    num = parseInt(prompt("Plus petit !"));
  } else {
    num = parseInt(prompt("Plus grand !"));
  }
}
