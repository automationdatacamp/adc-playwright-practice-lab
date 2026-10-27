const { test, expect } = require('@playwright/test');

test('appliquer le code promo ADC10', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Ajouter Clavier au panier' }).click();
  await page.getByLabel('Code promo').fill('ADC10');
  await page.getByRole('button', { name: 'Appliquer' }).click();

  await expect(page.getByText('Code appliqué.')).toBeVisible();
});
