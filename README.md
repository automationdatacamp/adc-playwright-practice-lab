# Playwright Practice Lab

**Hands-on Playwright exercises: spot what a test does not prove, then fix it.**
*Exercices Playwright : repérer ce qu'un test ne prouve pas, puis le corriger.*

[Version française](README.fr.md)

Three "before / after" exercises to learn how to review a Playwright test. The original test passes: your job is to say what it does not prove, then fix it.

| # | Topic | What you learn |
|---|---|---|
| 1 | [This test passes, but does not check the business result](exercises/01-test-vert-inutile/enonce.en.md) | Assert the result, not the message |
| 2 | [Why this scenario becomes flaky in CI](exercises/02-test-instable-en-ci/enonce.en.md) | Replace fixed waits with retrying assertions |
| 3 | [Reviewing a test proposed by an AI assistant](exercises/03-test-genere-par-ia/enonce.en.md) | Spot fragile selectors, swallowed errors, empty assertions |

The exercise folders and the shop interface are in French, and so are the messages the tests check (for example "Code appliqué."). The statements and explanations are available in English as `*.en.md` files.

## Setup

Requirement: Node.js 20 or later.

```bash
npm install
npx playwright install chromium
npm test            # exercises + solutions: everything must be green
```

The target is a small local shop (`app/`, started automatically by Playwright on port 4173). Nothing is sent over the Internet.

## How to work

1. Read an exercise statement, run `avant.spec.js` ("before"), write down your answers.
2. Write your own version. Only then look at `solutions/`: each solution comes with an `explication.en.md`.
3. Make the application misbehave to see the original test get it wrong:
   - `BUG=remise npx playwright test`: the ADC10 discount is no longer applied (exercise 1);
   - `LATENCE=1200 npx playwright test`: the API answers more slowly (exercise 2).

`npm run avant` runs only the original tests, `npm run apres` only the solutions. The two runs with `BUG=remise` and `LATENCE=1200` are expected to show failures: that is the point of the demonstration.

## Structure

```
app/          small local shop (Node, no dependency) used as the test target
exercises/    NN-topic/  avant.spec.js ("before" test) + enonce.md / enonce.en.md (statement)
solutions/    NN/        apres.spec.js ("after" test) + explication.md / explication.en.md
playwright.config.js     starts app/server.js on port 4173
```

## Going further

These exercises come from the practice taught in the [AutomationDataCamp Playwright course](https://www.automationdatacamp.com/en/playwright?utm_source=github&utm_medium=referral&utm_campaign=playwright-practice-lab&utm_content=readme-en) (40 hours, ADC certificate). The [free Playwright course](https://www.automationdatacamp.com/en/free-playwright-course?utm_source=github&utm_medium=referral&utm_campaign=playwright-practice-lab&utm_content=readme-en) is a good starting point.

## License

MIT, see [LICENSE](LICENSE).
