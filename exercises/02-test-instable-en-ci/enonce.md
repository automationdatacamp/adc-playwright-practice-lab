# Exercice 2 : pourquoi ce scénario devient instable en CI

Le test `avant.spec.js` attend 500 ms « le temps que la page charge », puis compte les produits.

1. Lancez-le : `npx playwright test exercises/02`. Il est vert sur votre poste.
2. Simulez un serveur plus lent, comme souvent en CI : `LATENCE=1200 npx playwright test exercises/02`. Il échoue.
3. Question : que se passe-t-il exactement entre la pause et la vérification ? Pourquoi augmenter la pause n'est pas une correction ?
4. Corrigez le test, puis comparez avec `solutions/02/`.
