//CLASSES
class Student {
  constructor(nom, prenom, age, genre, pays, option, isEditable, listCours) {
    this.nom = nom;
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
