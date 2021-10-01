let email = prompt("Veuillez entrer votre adresse email :");
let mdp = prompt("Veuillez entrer votre mot de passe :");
let emailCk = prompt(
  "Veuillez entrer votre adresse email pour vous connecter :"
);
let mdpCk = prompt(
  "Veuillez entrer votre adresse mot de passe pour vous connecter :"
);
if ((email == emailCk) & (mdp == mdpCk)) {
  alert("Bienvenue dans votre espace !");
} else {
  alert("Erreur de saisie");
}
