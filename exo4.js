var exo4 = [1, 2, 3, 4, 5];
var valeurRechercher = 4;
var trouvée = false;
exo4[1] = 10;
for (var i = 0; i < exo4.length; i++) {
    if (exo4[i] === valeurRechercher) {
        console.log("La valeur ".concat(valeurRechercher, " a \u00E9t\u00E9 trouv\u00E9e \u00E0 la position ").concat(i, "."));
        trouvée = true;
        break;
    }
}
if (!trouvée) {
    console.log("La valeur ".concat(valeurRechercher, " n'a pas \u00E9t\u00E9 trouv\u00E9e dans le tableau."));
}
exo4.push(6);
exo4.shift();
exo4.sort(function (a, b) { return a - b; });
console.log("Le contenu du tableau après le tri est:", exo4);
