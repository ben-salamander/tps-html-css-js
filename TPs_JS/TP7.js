let num = parseInt(prompt("Entrez un chiffre entre 10 et 20"));
while (num > 20 || num < 10) {
  if (num > 20) {
    num = parseInt(prompt("Plus petit !"));
  } else {
    num = parseInt(prompt("Plus grand !"));
  }
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
