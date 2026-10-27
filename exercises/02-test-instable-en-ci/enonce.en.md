# Exercise 2: why this scenario becomes flaky in CI

The `avant.spec.js` test waits 500 ms "for the page to load", then counts the products.

1. Run it: `npx playwright test exercises/02`. It is green on your machine.
2. Simulate a slower server, as is common in CI: `LATENCE=1200 npx playwright test exercises/02`. It fails.
3. Question: what exactly happens between the wait and the check? Why is a longer wait not a fix?
4. Fix the test, then compare with `solutions/02/`.
