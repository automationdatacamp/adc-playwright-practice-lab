const { test, expect } = require('@playwright/test');

test('commander un clavier', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Ajouter Clavier au panier' }).click();
  await expect(page.locator('#total')).toHaveText('50,00 €');

  await page.getByRole('button', { name: 'Valider la commande' }).click();
  await expect(page.getByText('Commande validée.')).toBeVisible();
});

test('valider un panier vide est refusé', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Valider la commande' }).click();

  await expect(page.getByText('Le panier est vide.')).toBeVisible();
  await expect(page.getByText('Commande validée.')).toHaveCount(0);
});
