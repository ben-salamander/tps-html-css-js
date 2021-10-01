const tab = [];

for (let i = 0; i < 10; i++) {
  tab.push(parseInt(prompt("Entrez un nombre : ")));
}

let min = tab[0];
let max = tab[0];

for (let i = 0; i < tab.length; i++) {
  if (tab[i] > max) {
    max = tab[i];
  } else if (tab[i] < min) {
    min = tab[i];
  }
}

console.log(
  `Min de ${tab.toString()} : ${min}\nMax de ${tab.toString()} : ${max}`
);
