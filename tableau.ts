
let nombres: number [] = [1, 2, 3, 4, 5];
let valeurRecherchée: number = 4;
let trouvée: boolean = false;
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

console.log("Le troisième élément est:", nombres[2]);

nombres[1] = 10;{
    console.log("Le contenu du tableau après modif 1 est:", nombres);
}
nombres.push(6);

nombres.shift();{
 console.log("Le contenu du tableau après modif 2 est:", nombres);
}

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === valeurRecherchée) {
        console.log(`La valeur ${valeurRecherchée} a été trouvée à la position ${i}.`);
        trouvée = true;
        break;
    }
}

if (!trouvée) {
    console.log(`La valeur ${valeurRecherchée} n'a pas été trouvée dans le tableau.`);
}

// Utiliser la méthode sort() pour trier le tableau par ordre croissant
nombres.sort((a, b) => a - b);

nombres.sort((a, b) => a - b);
console.log("Le contenu du tableau après le tri est:", nombres);
