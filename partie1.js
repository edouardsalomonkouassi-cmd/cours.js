let age = 11;
let billetmineur =1500;
let billetmajeur =2500;
let moins16ans = 0;
let plus16ans = 0;
let recettetotale = 0;
while (age<=20) {
    if (age<16) {
    console.log(`${age} ans, l'individu peut acheter un billet de ${billetmineur} FCFA`);
        moins16ans++;
        recettetotale += billetmineur;
    } 
    else {
    console.log(`${age} ans, l'individu peut acheter un billet de ${billetmajeur} FCFA`);
        plus16ans++;
        recettetotale += billetmajeur;
    }
    age++;
    }
    
    console.log(`Recette totale : ${recettetotale} FCFA`);
    console.log(`Nombre de billets vendus pour les moins de 16 ans : ${moins16ans}`);
    console.log(`Nombre de billets vendus pour les plus de 16 ans : ${plus16ans}`);