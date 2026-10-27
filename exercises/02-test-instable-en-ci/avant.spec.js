const { test, expect } = require('@playwright/test');

test('ajouter un clavier au panier', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(500); // « le temps que la page charge »
  expect(await page.locator('#produits li').count()).toBe(2);

  await page.getByRole('button', { name: 'Ajouter Clavier au panier' }).click();
  await expect(page.locator('#total')).toHaveText('50,00 €');
});
