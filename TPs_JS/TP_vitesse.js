//CLASSE
class objet {
  constructor() {
    this.distance = parseInt(prompt("Distance (m) :"));
    this.temps = parseInt(prompt("Temps (s):"));
    this.vitesse = this.distance / this.temps;
  }

  affVitesse() {
    console.log(`La vitesse de cette objet est de ${this.vitesse} m/s`);
  }
}

//Prog
const monObjest = new objet();
monObjest.affVitesse();
