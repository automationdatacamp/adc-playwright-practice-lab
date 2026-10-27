const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Ajouter Clavier au panier' }).click();
});

test('ADC10 réduit le total de 10 %', async ({ page }) => {
  await page.getByLabel('Code promo').fill('ADC10');
  await page.getByRole('button', { name: 'Appliquer' }).click();

  await expect(page.getByText('Code appliqué.')).toBeVisible();
  await expect(page.locator('#total')).toHaveText('45,00 €'); // le résultat métier
});

test('un code inconnu est refusé et ne change pas le total', async ({ page }) => {
  await page.getByLabel('Code promo').fill('FAUX');
  await page.getByRole('button', { name: 'Appliquer' }).click();

  await expect(page.getByText('Code invalide.')).toBeVisible();
  await expect(page.locator('#total')).toHaveText('50,00 €');
});
