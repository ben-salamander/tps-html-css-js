function addition(nb1, nb2) {
  return nb1 + nb2;
}

const nombre1 = parseInt(prompt("Saisir un nombre :"));
const nombre2 = parseInt(prompt("Saisir un autre nombre :"));

console.log(
  `la somme de ${nombre1} et ${nombre2} est ${addition(nombre1, nombre2)}`
);
