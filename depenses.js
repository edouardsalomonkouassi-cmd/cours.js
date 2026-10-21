const nom = 'Awa'; // Type : string
const budget = 30000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA
console.log("");
// TODO : convertissez les trois dépenses en nombres.
const transport = Number(transportTexte);
const alimentation = Number(alimentationTexte);
const loisirs = Number(loisirsTexte);

// TODO : calculez le total, le budget restant et budgetRespected.
const total = transport + alimentation + loisirs;
const budgetRestant = budget - total;
const budgetRespected = (budgetRestant >= 0);

// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log("Rapport de dépenses à compléter pour " + nom + ".");
console.log("");
console.log("le budget initial est de " + budget + " FCFA.");
console.log("");
console.log("Trois dépenses :");
console.log("Transport : " + transport + " FCFA.");
console.log("Alimentation : " + alimentation + " FCFA.");
console.log("Loisirs : " + loisirs + " FCFA.");
console.log("");
console.log("Total des dépenses : " + total + " FCFA.");
console.log("");
console.log("Budget restant : " + budgetRestant + " FCFA.");
console.log("");
console.log("Budget respecté : " + (budgetRespected ? 'true' : 'false') + ".");
