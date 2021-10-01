const tab = [5, 87, 4, 92, 12, 35, 64, 14];
let sum = 0;
for (let i = 0; i < tab.length; i++) {
  sum = sum + tab[i];
}

console.log(`Somme de ${tab.toString()} = ${sum}`);
