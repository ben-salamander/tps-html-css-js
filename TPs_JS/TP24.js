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

//AJOUT COURS
const listCours = document.querySelector("#liste-cours");
const btnCours = document.querySelector("#btn-cours");
const ajoutCours = document.querySelector("#ajout-cours");

btnCours.addEventListener("click", newCours);

function newCours() {
  const newLi = document.createElement("li");
  newLi.innerText = ajoutCours.value;
  listCours.appendChild(newLi);
}

//RECUPERATION FORMULAIRE
let etudiants = [];
let nom = document.querySelector("#nom");
let prenom = document.querySelector("#prenom");
let age = document.querySelector("#age");
let genreM = document.querySelector("#genre-m");
let pays = document.querySelector("#pays");
let option = document.querySelector("#option");
let isEditable = document.querySelector("#modifiable-true");
let listeCours = document.querySelector("#liste-cours");
let editable = false;
let genre = "";
let cours = [];

const btnValider = document.querySelector("#btn-valider");

btnValider.addEventListener("click", newEtudiant);

function newEtudiant() {
  editable = isEditable.checked;
  genre = genreM.checked == true ? "M" : "F";
  listCours.querySelectorAll("li").forEach((element) => {
    cours.push(element.innerText);
  });

  etudiants.push(
    new Student(
      nom.value,
      prenom.value,
      age.value,
      genre,
      pays.value,
      option.value,
      editable,
      cours
    )
  );
}

//----------------------
