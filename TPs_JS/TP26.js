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
const btnCours = document.querySelector("#btn-cours");
const listCours = document.querySelector("#liste-cours");
let coursChild = [];

btnCours.addEventListener("click", newCours);

function newCours() {
  const ajoutCours = document.querySelector("#ajout-cours");
  const newLi = document.createElement("li");
  newLi.innerText = ajoutCours.value;
  coursChild.push(newLi);
  listCours.appendChild(newLi);
}

//RECUPERATION FORMULAIRE
let etudiants = [];

function newEtudiant() {
  const nom = document.querySelector("#nom");
  const prenom = document.querySelector("#prenom");
  const age = document.querySelector("#age");
  const genreM = document.querySelector("#genre-m");
  const pays = document.querySelector("#pays");
  const option = document.querySelector("#option");
  const isEditable = document.querySelector("#modifiable-true");
  const cours = [];
  const editable = isEditable.checked;
  const genre = genreM.checked == true ? "M" : "F";

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

//Ajout dernier etudiant
const tableauEtudiants = document.querySelector("#tableau-etudiants");

function etudiantTab() {
  const newTr = document.createElement("tr");
  const newTdNom = document.createElement("td");
  const newTdPrenom = document.createElement("td");
  const newTdAge = document.createElement("td");
  const newTdGenre = document.createElement("td");
  const newTdPays = document.createElement("td");
  const newTdOption = document.createElement("td");
  const newTdModifiable = document.createElement("td");
  const newTdCours = document.createElement("td");

  for (let i = 0; i < etudiants.length; i++) {
    newTdNom.innerText = etudiants[i].nom;
    newTdPrenom.innerText = etudiants[i].prenom;
    newTdAge.innerText = etudiants[i].age;
    newTdGenre.innerText = etudiants[i].genre;
    newTdPays.innerText = etudiants[i].pays;
    newTdOption.innerText = etudiants[i].option;
    newTdModifiable.innerText = etudiants[i].isEditable == true ? "Oui" : "Non";
    newTdCours.innerText = etudiants[i].listCours.toString();

    tableauEtudiants
      .appendChild(newTr)
      .append(
        newTdNom,
        newTdPrenom,
        newTdAge,
        newTdGenre,
        newTdPays,
        newTdOption,
        newTdModifiable,
        newTdCours
      );
  }
}

//Appuis bouton valider
const btnValider = document.querySelector("#btn-valider");

btnValider.addEventListener("click", validation);

function validation() {
  newEtudiant();
  etudiantTab();
  coursChild.forEach((element) => {
    listCours.removeChild(element);
  });
  coursChild = [];
  console.log(etudiants[etudiants.length - 1].tostring());
  document.querySelector("#fiche-inscription").reset();
}
