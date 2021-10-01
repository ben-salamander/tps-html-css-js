let email = prompt("Veuillez entrer votre adresse email :");
let mdp = prompt("Veuillez entrer votre mot de passe :");
let emailCk = prompt(
  "Veuillez entrer votre adresse email pour vous connecter :"
);
let mdpCk = prompt(
  "Veuillez entrer votre adresse mot de passe pour vous connecter :"
);
while (email != emailCk || mdp != mdpCk) {
  alert("Erreur de saisie");
}
alert("Bienvenue dans votre espace !");
