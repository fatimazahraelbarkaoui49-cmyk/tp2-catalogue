const produits = [ 
    { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
    { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
    { id: 3, nom: "Ecran", categorie: "Informatique", prix: 900, stock: 0 },
    { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }];
console.log("=== Catalogue des produits ===");

for (const produit of produits) {
    console.log(`${produit.nom} : ${produit.prix} MAD`);
}
console.log("=== Produits disponibles ===");

const disponibles = produits.filter(
  (produit) => produit.stock > 0 );
console.log("Nombre de produits disponibles :", disponibles.length);

console.log("=== Valeur du stock ===");

const valeurStock = produits.reduce(
  (total, produit) => total + produit.prix * produit.stock, 0);
console.log("Valeur totale du stock :", valeurStock, "MAD");

console.log("=== Prix minimal ===");

if (disponibles.length === 0) {
    console.log("Aucun produit disponible.");
} else {
    const moinsCher = disponibles.reduce(
        (min, produit) =>
            produit.prix < min.prix ? produit : min
    );
    console.log("Produit le moins cher :", moinsCher.nom);
    console.log("=== Déstructuration ===");
    const { nom, prix, stock } = moinsCher;

    console.log("Nom :", nom);
    console.log("Prix :", prix, "MAD");
    console.log("Stock :", stock, "unités");

}

console.log("=== Résumé des produits ===");

const resume = produits.map(
    (produit) =>
        `${produit.nom} - ${produit.prix} MAD - ${produit.stock} unités`
);

console.log(resume);
console.log("=== Test 1 : Écran à stock nul ===");
for (const produit of disponibles) {
  console.log(produit.nom);
}
console.log("=== Test 2 : Tous les stocks mis à zéro ===");

const testZero = produits.map(p => ({ ...p, stock: 0 }));
const disponiblesZero = testZero.filter(p => p.stock > 0);

console.log( disponiblesZero.length === 0 ? "Aucun produit disponible.": disponiblesZero);
console.log("=== Test 3 : Catalogue vide ===");

const catalogueVide = [];

const valeurStockVide = catalogueVide.reduce(
    (total, p) => total + p.prix * p.stock,
    0
);

console.log("Valeur totale du stock :", valeurStockVide, "MAD");
console.log("=== Test 4: Vérification des données ===");

for (const produit of produits) {
    if (
        Number.isFinite(produit.prix) &&
        produit.prix >= 0 &&
        Number.isFinite(produit.stock) &&
        produit.stock >= 0
    ) {
        console.log(produit.nom, ": Données valides");
    } else {
        console.log(produit.nom, ": Données invalides");
    }
}
console.log("=== Vérification des données ===");

function estValide(produit) {
    return Number.isFinite(produit.prix) &&
           produit.prix >= 0 &&
           Number.isFinite(produit.stock) &&
           produit.stock >= 0;
}

for (const produit of produits) {
    console.log(produit.nom, ":", estValide(produit));
}


