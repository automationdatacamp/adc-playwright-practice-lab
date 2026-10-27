# Exercise 3: reviewing a test proposed by an AI assistant

The `avant.spec.js` test looks like what an assistant often proposes to "test the checkout flow". It passes.

1. List what it really checks (hint: look at the last line).
2. Find at least three defects: fragile selectors, a swallowed error, an assertion that proves nothing, a missing failure case.
3. Empty the cart in your head: would this test fail if the order were refused?
4. Rewrite it, then compare with `solutions/03/`.

To review any generated test, the [AI test review checklist](https://www.automationdatacamp.com/en/ai-test-review-checklist?utm_source=github&utm_medium=referral&utm_campaign=playwright-practice-lab&utm_content=exercice-3-en) gives 7 points to check.
