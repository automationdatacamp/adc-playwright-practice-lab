// Test tel qu'un assistant IA le propose souvent : il passe, mais que prouve-t-il ?
const { test, expect } = require('@playwright/test');

test('le parcours de commande fonctionne', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('#produits li');

  try {
    await page.click('#produits li:nth-child(1) button');
    await page.click('#valider');
  } catch (e) {
    console.log('Erreur ignorée', e);
  }

  expect(await page.locator('#total').count()).toBe(1);
});
