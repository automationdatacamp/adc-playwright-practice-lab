# Playwright Practice Lab

Trois exercices « avant / après » pour apprendre à relire un test Playwright : le test d'origine passe, votre travail est de dire ce qu'il ne prouve pas, puis de le corriger.

| # | Sujet | Ce que vous apprenez |
|---|---|---|
| 1 | [Ce test passe, mais ne vérifie pas le résultat métier](exercises/01-test-vert-inutile/enonce.md) | Asserter le résultat, pas le message |
| 2 | [Pourquoi ce scénario devient instable en CI](exercises/02-test-instable-en-ci/enonce.md) | Remplacer les pauses fixes par des assertions qui réessaient |
| 3 | [Relire un test proposé par un assistant IA](exercises/03-test-genere-par-ia/enonce.md) | Repérer sélecteurs fragiles, erreurs avalées, assertions creuses |

## Installation

Prérequis : Node.js 20 ou plus.

```bash
npm install
npx playwright install chromium
npm test            # exercices + corrections : tout doit être vert
```

La cible est une petite boutique locale (`app/`, lancée automatiquement par Playwright sur le port 4173). Rien n'est envoyé sur Internet.

## Comment travailler

1. Lisez l'énoncé d'un exercice, lancez `avant.spec.js`, formulez vos réponses.
2. Écrivez votre version. Ne regardez `solutions/` qu'ensuite : chaque correction est accompagnée d'un `explication.md`.
3. Faites réagir l'application pour voir le test d'origine se tromper :
   - `BUG=remise npx playwright test` : la remise ADC10 n'est plus appliquée (exercice 1) ;
   - `LATENCE=1200 npx playwright test` : l'API répond plus lentement (exercice 2).

`npm run avant` lance seulement les tests d'origine, `npm run apres` seulement les corrections.

## Pour aller plus loin

Ces exercices sont extraits de la pratique enseignée dans la [formation Playwright d'AutomationDataCamp](https://www.automationdatacamp.com/formation-playwright-certifiante?utm_source=github&utm_medium=referral&utm_campaign=playwright-practice-lab&utm_content=readme) (40 h, certificat ADC). Le [mini-cours Playwright gratuit](https://www.automationdatacamp.com/mini-cours-gratuit?utm_source=github&utm_medium=referral&utm_campaign=playwright-practice-lab&utm_content=readme) est un bon point de départ.

## Licence

MIT, voir [LICENSE](LICENSE).
