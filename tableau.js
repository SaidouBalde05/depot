var nombres = [1, 2, 3, 4, 5];
var valeurRecherchée = 4;
var trouvée = false;
for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
console.log("Le troisième élément est:", nombres[2]);
nombres[1] = 10;
{
    console.log("Le contenu du tableau après modif 1 est:", nombres);
}
nombres.push(6);
nombres.shift();
{
    console.log("Le contenu du tableau après modif 2 est:", nombres);
}
for (var i = 0; i < nombres.length; i++) {
    if (nombres[i] === valeurRecherchée) {
        console.log("La valeur ".concat(valeurRecherchée, " a \u00E9t\u00E9 trouv\u00E9e \u00E0 la position ").concat(i, "."));
        trouvée = true;
        break;
    }
}
if (!trouvée) {
    console.log("La valeur ".concat(valeurRecherchée, " n'a pas \u00E9t\u00E9 trouv\u00E9e dans le tableau."));
}
// Utiliser la méthode sort() pour trier le tableau par ordre croissant
nombres.sort(function (a, b) { return a - b; });
nombres.sort(function (a, b) { return a - b; });
console.log("Le contenu du tableau après le tri est:", nombres);
