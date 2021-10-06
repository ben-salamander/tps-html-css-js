//CLASSES
class Student {
  constructor(nom, prenom, email, etudes, bio) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.etudes = etudes;
    this.bio = bio;
  }
}

//Recuperation des étudiants
const stud1 = new Student(
  "BOSSARD",
  "Benjamin",
  "benjamin.nbossard@gmail.com",
  "Développeur Salesforce",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
);

const stud2 = new Student(
  "GERBEAU",
  "Virginie",
  "gerbeau.virginie@gmail.com",
  "Circacienne",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
);

const stud3 = new Student(
  "LEBRETON",
  "ELOISE",
  "lebreton.eloise@gmail.com",
  "Animalière",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
);

const stud4 = new Student(
  "RICHARD",
  "Ameline",
  "richard.ameline@gmail.com",
  "Mécanicienne",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
);

const etudiants = [stud1, stud2, stud3, stud4];

//Tableau Etudiant
const tableauEtudiants = document.querySelector("#tableau-etudiants");

function etudiantTab() {
  for (let i = 0; i < etudiants.length; i++) {
    const newTr = document.createElement("tr");
    const newTdNom = document.createElement("td");
    const newTdPrenom = document.createElement("td");
    const newTdEmail = document.createElement("td");

    const btnSupp = document.createElement("button");
    btnSupp.innerText = "Supprimer";
    btnSupp.addEventListener("click", supprimer);

    const btnVoir = document.createElement("button");
    btnVoir.innerText = "Voir";
    btnVoir.addEventListener("click", voir);

    newTdNom.innerText = etudiants[i].nom;
    newTdPrenom.innerText = etudiants[i].prenom;
    newTdEmail.innerText = etudiants[i].email;

    console.log(i);
    tableauEtudiants
      .appendChild(newTr)
      .append(newTdNom, newTdPrenom, newTdEmail, btnVoir, btnSupp);
  }
}

//Appuis bouton supprimer
function supprimer() {
  affVoir(this);
  etudiants.splice(this.parentElement.rowIndex, 1);
  this.parentElement.remove();
}

//**********ESPACE VOIR ETUDIANT************
//CONSTANTES
const voirEtudiant = document.querySelector("#voir-etudiant");
const voirNom = document.createElement("div");

const voirEmailDiv = document.createElement("div");
const voirEmailSpan = document.createElement("span");
const voirEmailValue = document.createElement("span");

const voirEtudesDiv = document.createElement("div");
const voirEtudesSpan = document.createElement("span");
const voirEtudesValue = document.createElement("span");

const voirBioDiv = document.createElement("div");
const voirBioSpan = document.createElement("span");
const voirBioValue = document.createElement("span");

//FONCTIONS
let etudiant;
//Affichage section "voir"
function affVoir(thisRowEtu) {
  if (
    etudiant == etudiants[thisRowEtu.parentElement.rowIndex] &&
    voirEtudiant.hidden == false
  ) {
    voirEtudiant.hidden = true;
  } else {
    voirEtudiant.hidden = false;
  }
}

//Actualisation des infos à afficher
function voir() {
  affVoir(this);
  if (voirEtudiant.hidden == true) return;

  etudiant = etudiants[this.parentElement.rowIndex];

  voirNom.classList.add("voir-bold");
  voirNom.innerText = etudiant.nom + " " + etudiant.prenom;
  voirEtudiant.append(voirNom);

  voirEmailSpan.classList.add("voir-bold");
  voirEmailSpan.innerText = "Email : ";
  voirEmailValue.innerText = etudiant.email;
  voirEtudiant.appendChild(voirEmailDiv).append(voirEmailSpan, voirEmailValue);

  voirEtudesSpan.classList.add("voir-bold");
  voirEtudesSpan.innerText = "Etudes faites : ";
  voirEtudesValue.innerText = etudiant.etudes;
  voirEtudiant
    .appendChild(voirEtudesDiv)
    .append(voirEtudesSpan, voirEtudesValue);

  voirBioSpan.classList.add("voir-bold");
  voirBioSpan.innerText = "Bio : ";
  voirBioValue.innerText = etudiant.bio;
  voirEtudiant.appendChild(voirBioDiv).append(voirBioSpan, voirBioValue);
}

etudiantTab();
