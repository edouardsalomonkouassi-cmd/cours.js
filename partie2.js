let age = 11
let Bm = 1500
let BM = 2500
let Moins16Ans = 0
let Plus16Ans = 0
let sommeTotale = 0
let Age= 18;

console.log("");

console.log("Bonjour et bienvenue à vous, ici ");

console.log("");

while (age <= 20) {
    if (age < 16) {
        console.log(`Lorsque vous avez ${age} ans, votre billet coûte ${Bm} FCFA.`);
        Moins16Ans++;
        sommeTotale += Bm;
    } else {
        console.log(`Lorsque vous avez ${age} ans, votre billet coûte ${BM} FCFA.`);
        Plus16Ans++;
        sommeTotale += BM;
    } 
  age++;
}

console.log("");

console.log(`On aura donc ${Moins16Ans} billets pour les moins de 16 ans`);
console.log(`Et ${Plus16Ans} billets pour les 16 ans et plus`);

console.log("");

console.log(`la somme normale à payer est de ${sommeTotale} FCFA`);

let reduction = 500;
let Plus18Ans = 0;
let somme2= (BM- reduction)
let somme3= 0


console.log("");

console.log("Exceptionnellement :")

    console.log(`A partie de 18 ans, vous avez une réduction de ${reduction} FCFA`);

    console.log("");

    console.log("De ce fait :");

while(Age<=20) {
    console.log(`Celui de ${Age} ans, payera ${somme2} FCFA`); Age++;
    somme3 += reduction
}

console.log("");

console.log(`La somme finale à payer sera de ${sommeTotale - somme3} FCFA.`);

console.log("");
