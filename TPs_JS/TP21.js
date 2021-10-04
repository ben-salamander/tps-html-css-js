//CLASSES
class Student {
  constructor() {
    alert("Création d'un étudiant");
    this.nom = prompt("Nom :");
    this.prenom = prompt("Prénom :");
    this.age = parseInt(prompt("Age"));
    this.genre = prompt("Genre :");
    this.pays = prompt("Pays");
    this.option = prompt("Option");
    this.isEditable =
      prompt("Les nom, prénom et options sont-ils modifables ?") ==
      ("Oui" || "oui" || "o" || "OUI" || "Yes" || "Yes" || "y" || "YES")
        ? true
        : false;
    this.listCours = this.newListCours();
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

Student.prototype.tostring = function () {
  console.log(
    `Nom : ${this.nom}
Prenom : ${this.prenom}
Age : ${this.age}
Genre : ${this.genre}
Pays : ${this.pays}
Option : ${this.option}
Modiable : ${this.isEditable ? "Oui" : "Non"}
Liste des cours : ${this.listCours}`
  );
};

//PROGRAMME
const nbEtudiants = parseInt(prompt("Nombre d'étudiants à incrire :"));
const etudiants = [];

for (let i = 0; i < nbEtudiants; i++) {
  etudiants.push(new Student());
}

etudiants.forEach((etudiant) => {
  if (etudiant.pays == "Chine") {
    etudiant.tostring();
  }
});
