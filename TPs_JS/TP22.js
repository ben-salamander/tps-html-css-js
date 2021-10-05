//CLASSES
class Student {
  //   constructor() {
  //     alert("Création d'un étudiant");
  //     this.nom = prompt("Nom :");
  //     this.prenom = prompt("Prénom :");
  //     this.age = parseInt(prompt("Age"));
  //     this.genre = prompt("Genre :");
  //     this.pays = prompt("Pays");
  //     this.option = prompt("Option");
  //     this.isEditable = this.modifiable();
  //     this.listCours = this.newListCours();
  //   }

  constructor(nom, prenom, age, genre, pays, option, isEditable, listCours) {
    this.nom = nom.toUpperCase();
    this.prenom = prenom;
    this.age = age;
    this.genre = genre;
    this.pays = pays;
    this.option = option;
    this.isEditable = isEditable;
    this.listCours = listCours;
  }
}

//Fonctions student
Student.prototype.newListCours = function () {
  let cours = "cours";
  let list = [];
  while (cours != "") {
    cours = prompt("Nouveaux cours");
    list.push(cours);
  }
  list.pop();
  return list;
};

Student.prototype.modifiable = function () {
  return prompt("Les nom, prénom et options sont-ils modifables ?") ==
    ("Oui" || "oui" || "o" || "OUI" || "Yes" || "Yes" || "y" || "YES")
    ? true
    : false;
};

Student.prototype.changeFirstName = function (newFirstName) {
  this.nom = newFirstName;
};

Student.prototype.changeLastName = function (newLastName) {
  this.prenom = newLastName;
};

Student.prototype.changeOption = function (newOption) {
  this.option = newOption;
};

Student.prototype.tostring = function () {
  console.log(
    `Nom : ${this.nom}\nPrenom : ${this.prenom}\nAge : ${this.age}\nGenre : ${
      this.genre
    }\nPays : ${this.pays}\nOption : ${this.option}\nModiable : ${
      this.isEditable ? "Oui" : "Non"
    }\nListe des cours : ${this.listCours}`
  );
};

//PROGRAMME
const etudiants = [];

//Initialisation des étudiants
do {
  etudiants.push(
    new Student("BOSSARD", "Benjamin", 26, "M", "France", "Maths", true, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Dupont", "George", 27, "M", "Russie", "Informatique", false, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Patterson", "Emma", 28, "F", "France", "Informatique", true, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Spencer", "Antoinette", 29, "F", "Russie", "Maths", false, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Oreilly", "Marvin", 30, "M", "Chine", "Maths", true, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Hall", "Christian", 31, "M", "Chine", "Maths", false, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Porter", "Marcelo", 32, "M", "France", "Informatique", true, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("King", "Claudie", 33, "F", "Russie", "Maths", false, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Bradley", "Nicolas", 34, "M", "France", "Informatique", true, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Ramos", "Olivier", 35, "M", "Russie", "Maths", true, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Thomas", "Leondrea", 36, "F", "Chine", "Maths", true, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Tirrel", "Sophie", 37, "F", "France", "Informatique", false, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Mitchell", "Keitha", 38, "F", "Chine", "Informatique", false, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Allen", "Davina", 39, "F", "Chine", "Maths", true, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Coleman", "Ernest", 40, "M", "France", "Informatique", true, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Weeb", "Justine", 41, "F", "France", "Informatique", false, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Deegan", "Jimi", 42, "M", "Chine", "Maths", false, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
  etudiants.push(
    new Student("Nguyen", "Aurora", 43, "F", "Russie", "Informatique", false, [
      "Maths",
      "techno",
      "Anglais",
    ])
  );
} while (0);

// 0 - Lister tous les étudiants pour comparer les données avec les résultats
etudiants.forEach((etudiant) => {
  console.log(etudiant.tostring());
});

// 1 - Trouver le nombre des chinoise dans notre collection
console.log("------Nombre de chinoises------");
let chinoises = [];
etudiants.forEach((etudiant) => {
  if (etudiant.pays == "Chine" && etudiant.genre == "F") {
    chinoises.push(etudiant);
    console.log(
      `${etudiant.nom}   ${etudiant.prenom}   ${etudiant.pays}  ${etudiant.genre}`
    );
  }
});
console.log(`Il y a ${chinoises.length} chinoises dans cette liste`);

// 2 - Trouver toutes les personnes dont les prénoms se terminent par “a”
console.log("------Etudiant avec un prenom terminant par 'a'------");
let lastLetterA = [];
etudiants.forEach((etudiant) => {
  if (etudiant.prenom[etudiant.prenom.length - 1] == "a") {
    lastLetterA.push(etudiant);
  }
});
lastLetterA.forEach((element) => {
  console.log(`${element.nom}   ${element.prenom}`);
});

// 3 - Avoir la liste tous toutes les noms
console.log("------Listes des noms------");
const listeNoms = [];
etudiants.forEach((etudiant) => {
  listeNoms.push(etudiant.nom);
});
console.log(listeNoms.toString());

// 4 - La liste de tous les hommes russes
console.log("------Liste des hommes russes------");
const hommesRusses = [];
etudiants.forEach((etudiant) => {
  if (etudiant.pays == "Russie" && etudiant.genre == "M") {
    hommesRusses.push(etudiant);
  }
});

hommesRusses.forEach((etudiant) => {
  console.log(
    `${etudiant.nom} ${etudiant.prenom} ${etudiant.pays} ${etudiant.genre}`
  );
});

// 5 - La liste de toutes les personnes dont les noms commencent par K et qui sont des femmes
console.log("------Liste des femmes dont le prénom commence par K------");
let firstLetterK = [];
etudiants.forEach((etudiant) => {
  if (etudiant.prenom[0] == "K" && etudiant.genre == "F") {
    firstLetterK.push(etudiant);
  }
});
firstLetterK.forEach((element) => {
  console.log(`${element.nom}   ${element.prenom} ${element.genre}`);
});

// 6 - La liste de tous les hommes dont les noms commencent par M
console.log("------Liste des hommes dont le prénom commence par M------");
let firstLetterM = [];
etudiants.forEach((etudiant) => {
  if (etudiant.prenom[0] == "M" && etudiant.genre == "M") {
    firstLetterM.push(etudiant);
  }
});
firstLetterM.forEach((element) => {
  console.log(`${element.nom}   ${element.prenom} ${element.genre}`);
});
