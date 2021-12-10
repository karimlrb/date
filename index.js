// let dateActuelle = Date();
// console.log(dateActuelle);
// // Renvoie -> Fri Dec 10 2021 17:59:51 GMT+0100 (heure normale d’Europe centrale)

// let dateEnSecondes = Date.now();
// console.log(dateEnSecondes);
// // Renvoie -> 1639155690021

// let datePrecise = new Date(2022, 7, 9, 18, 05);
// console.log(datePrecise);
// Au-dessus :
//   - annee (obligatoire)
//   - mois (obligatoire) qui commence par 0

//   - jour (facultatif) qui commence par 1
//   - heure (facultatif) qui commence par 0
//   - minute (facultatif) qui commence par 0
//   - secondes (facultatif) qui commence par 0
//   - millisecondes (facultatif) qui commence par 0

// let dateActuelle = new Date();
// console.log(dateActuelle.getFullYear());
// console.log(dateActuelle.getDay());
// console.log(dateActuelle.getDate());

// dateActuelle.setFullYear(2054);
// console.log(dateActuelle.getFullYear());

// let dateActuelle = new Date();

// // toLocaleDateString = jour, mois, l'année
// // toLocaleTimeString = l'heure
// // toLocaleString = jour, mois, l'année l'heure
// // On choisit les options qu'on veut
// let dateLocale = dateActuelle.toLocaleString("fr-FR", {
//   weekday: "long", // short(3 premières lettres du jours) ou long(toutes les lettres)
//   year: "numeric", //(AAAA)
//   month: "long",
//   day: "numeric",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
// });
// console.log(dateLocale);

// console.log(navigator.language);

// Templates string
let date = new Date().getFullYear();
let copyright = `${date} © Karimlrb`;
console.log(copyright);

// Calcul avec templates string
let aliments = { fruits: 5, legumes: 1, gateaux: 75 };
let panier = `Dans votre panier, vous avez ${
  aliments.fruits + aliments.legumes + aliments.gateaux
} articles`;
console.log(panier);
