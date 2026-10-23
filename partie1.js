let age = 11
let Bm = 1500
let BM = 2500
let Moins16Ans = 0
let Plus16Ans = 0
let sommeTotale = 0


while (age <= 20) {
    if (age < 16) {
        console.log(`${age}, votre billet coûte ${Bm}`);
        Moins16Ans++;
        sommeTotale += Bm;
    } else {
        console.log(`${age}, votre billet coûte ${BM}`);
        Plus16Ans++;
        sommeTotale += BM;
    } 
  age++;
}

console.log(`Nombre de billets pour les moins de 16 ans : ${Moins16Ans}`);
console.log(`Nombre de billets pour les 16 ans et plus : ${Plus16Ans}`);

    



