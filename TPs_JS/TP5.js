let compteur = 0;
const email = prompt("Veuillez entrer votre adresse email :");
const mdp = prompt("Veuillez entrer votre mot de passe :");
let emailCk;
let mdpCk;

while (compteur < 5) {
  emailCk = prompt("Veuillez entrer votre adresse email pour vous connecter :");
  mdpCk = prompt(
    "Veuillez entrer votre adresse mot de passe pour vous connecter :"
  );
  compteur++;
  if (email == emailCk && mdp == mdpCk) {
    alert("Bienvenue dans votre espace !");
  } else if (compteur == 5) {
    alert("Vous avez fais trop de tentavives, votre compte est bloqué !");
  } else {
    alert("Erreur de saisie");
  }
}
