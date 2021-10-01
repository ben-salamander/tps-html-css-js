const list1 = [];
const list2 = [];
const result = [];

for (let i = 0; i < 5; i++) {
  list1.push(parseInt(prompt(`Liste 1 [${i}] : `)));
}

for (let i = 0; i < 5; i++) {
  list2.push(parseInt(prompt(`Liste 2 [${i}] : `)));
}

for (let i = 0; i < list1.length; i++) {
  result.push(list1[i] + list2[i]);
}

console.log(
  `List 1 : ${list1.toString()}\n
List 2 : ${list2.toString()}\n
Résultante : ${result.toString()}\n`
);
