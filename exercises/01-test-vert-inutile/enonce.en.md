# Exercise 1: this test passes, but does not check the business result

The `avant.spec.js` test applies the promo code `ADC10` and checks the message "Code appliqué." ("Code applied.").

1. Run it: `npx playwright test exercises/01`. It is green.
2. Run it again with the discount broken: `BUG=remise npx playwright test exercises/01`. It stays green.
3. Question: what does this test really prove? What does it let through?
4. Write the version that catches the defect, then compare with `solutions/01/`.
