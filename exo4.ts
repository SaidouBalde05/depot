let exo4: number [] = [1, 2, 3, 4, 5];
let valeurRechercher: number = 4;
let trouvée: boolean = false;
exo4[1] = 10;
for (let i = 0; i < exo4.length; i++) {
    if (exo4[i] === valeurRechercher) {
        console.log(`La valeur ${valeurRechercher} a été trouvée à la position ${i}.`);
        trouvée = true;
        break;
    }
}

if (!trouvée) {
    console.log(`La valeur ${valeurRechercher} n'a pas été trouvée dans le tableau.`);
}
exo4.push(6);
exo4.shift();

exo4.sort((a, b) => a - b);

console.log("Le contenu du tableau après le tri est:", exo4);
