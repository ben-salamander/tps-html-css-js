const table1 = parseInt(prompt("Entrez le nombre de la première table : "));
const tableN = parseInt(prompt("Entrez le nombre de la dernière table : "));
const min = parseInt(prompt("Entrez le nombre des premièrs facteurs : "));
const max = parseInt(prompt("Entrez le nombre des derniers facteurs : "));

for (let i = table1; i <= tableN; i++) {
  console.log(`\n\nTable de ${i}`);
  for (let j = min; j <= max; j++) {
    console.log(`${i}x${j}=${i * j}`);
  }
}
