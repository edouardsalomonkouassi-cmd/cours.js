let GTA6 = 50000 //Ici GTA6 représente le prix du jeu GTA6 en FCFA
let epargne = 4000 // là c'est l'epargne nécessaire
let nbreSemaines = GTA6 / epargne // ici on calcule le nombre de semaines nécessaires pour atteindre l'objectif
let semaine = 0

console.log(`Vous avez besoin de ${GTA6} FCFA pour acheter le jeu GTA6.`)
console.log(`Si vous épargnez ${epargne} FCFA par semaine, vous pouvez atteindre votre objectif en au moins ${nbreSemaines} semaines.`)
console.log("Un peu comme ça : ");
console.log("");
while (semaine < nbreSemaines) {
    console.log(`semaine ${semaine+1}, vous aurez économisé ${epargne * (semaine+1)} FCFA.`), semaine++;
}
console.log("");
console.log("Vous voyez ?");

