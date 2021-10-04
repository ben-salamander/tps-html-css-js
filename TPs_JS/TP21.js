//CLASSES
class student {
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

  //Fonction de construction de la liste des cours
  newListCours() {
    let cours = "cours";
    let list = [];
    while (cours != "") {
      cours = prompt("Nouveaux cours");
      list.push(cours);
    }
    list.pop();
    return list;
  }

  // constructor(nom,prenom,age,genre,pays,option,isEditable,listCours){
  //     this.nom = nom;
  //     this.prenom = prenom;
  //     this.age = age ;
  //     this.genre = genre;
  //     this.pays = pays;
  //     this.option = option;
  //     this.isEditable = isEditable;
  //     this. listCours = listCours;
  // }

  tostring() {
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
  }
}

//PROGRAMME
const etudiant = new student();
etudiant.tostring();
