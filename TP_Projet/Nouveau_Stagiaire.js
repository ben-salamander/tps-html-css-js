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

//Fonction de validation des données
function validation(nom, prenom, email, etudes, bio) {
  return true;
}

//Fonction ajout de l'étudiant
const btnAjouter = document.querySelector("#btn-ajouter");
btnAjouter.addEventListener("click", ajouter);

function ajouter() {
  //Récupération des données dans le formulaire
  const nom = document.querySelector("#nom").value;
  const prenom = document.querySelector("#prenom").value;
  const email = document.querySelector("#email").value;
  const etudes = document.querySelector("#etudes").value;
  const bio = document.querySelector("#bio").value;
  if (validation()) {
    if (!localStorage.getItem("storageEtudiants")) {
      const etudiants = [new Student(nom, prenom, email, etudes, bio)];
      localStorage.setItem("storageEtudiants", JSON.stringify(etudiants));
    } else {
      let etudiants = JSON.parse(localStorage.getItem("storageEtudiants"));
      etudiants.push(new Student(nom, prenom, email, etudes, bio));
      localStorage.removeItem("storageEtudiants");
      localStorage.setItem("storageEtudiants", JSON.stringify(etudiants));
    }
    window.location = "Nos_Stagiaires.html";
  }
}
