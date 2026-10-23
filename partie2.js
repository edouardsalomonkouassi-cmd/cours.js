let age = 11;
let billetmineur =1500;
let billetmajeur =2500;
let billetreduit =billetmajeur-500;
let moins16ans = 0;
let plus16ans = 0;
let recettetotale = 0;
while (age<=20) {
    if (age<16) {
        moins16ans++;
        recettetotale += billetmineur;
    } 
    else {
        plus16ans++;
        recettetotale += billetmajeur;
        if (age>= 18 && age<=20) {
            console.log(`${age} ans , l'individu beneficie d'une reduction à ${billetreduit} FCFA`);
            recettetotale -= 500;
        }
    }
    age++;
    }
     console.log(`Recette totale : ${recettetotale} FCFA`);