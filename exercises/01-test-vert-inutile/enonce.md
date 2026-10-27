# Exercice 1 : ce test passe, mais ne vérifie pas le résultat métier

Le test `avant.spec.js` applique le code promo `ADC10` et vérifie le message « Code appliqué. ».

1. Lancez-le : `npx playwright test exercises/01`. Il est vert.
2. Relancez-le avec la remise cassée : `BUG=remise npx playwright test exercises/01`. Il reste vert.
3. Question : qu'est-ce que ce test prouve réellement ? Que laisse-t-il passer ?
4. Écrivez la version qui détecte le défaut, puis comparez avec `solutions/01/`.
