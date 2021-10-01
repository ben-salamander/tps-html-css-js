let compteur = 0;
let email = prompt("Veuillez entrer votre adresse email :");
let mdp = prompt("Veuillez entrer votre mot de passe :");
let emailCk;
let mdpCk;

while (compteur < 5) {
  emailCk = prompt("Veuillez entrer votre adresse email pour vous connecter :");
  mdpCk = prompt(
    "Veuillez entrer votre adresse mot de passe pour vous connecter :"
  );
  if (email == emailCk && mdp == mdpCk) {
    alert("Bienvenue dans votre espace !");
  } else {
    alert("Erreur de saisie");
  }
  compteur++;
}
if (compteur == 5 && (email != emailCk || mdp != mpdCk)) {
  alert(
    "Vous avez essayez de vous connecter trop de fois, votre compte est bloqué."
  );
}
