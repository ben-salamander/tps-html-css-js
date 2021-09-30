email = prompt("Veuillez entrer votre adresse email :");
mdp = prompt("Veuillez entrer votre mot de passe :");
emailCk = prompt("Veuillez entrer votre adresse email pour vous connecter :");
mdpCk = prompt(
  "Veuillez entrer votre adresse mot de passe pour vous connecter :"
);
if ((email == emailCk) & (mdp == mdpCk)) {
  alert("Bienvenue dans votre espace !");
} else {
  alert("Erreur de saisie");
}
