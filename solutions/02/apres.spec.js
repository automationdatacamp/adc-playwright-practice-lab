const { test, expect } = require('@playwright/test');

test('ajouter un clavier au panier, quelle que soit la latence', async ({ page }) => {
  await page.goto('/');
  // Pas de pause fixe ni de count() figé : expect(...) réessaie jusqu'à l'affichage des produits.
  await expect(page.locator('#produits li')).toHaveCount(2);

  await page.getByRole('button', { name: 'Ajouter Clavier au panier' }).click();
  await expect(page.locator('#total')).toHaveText('50,00 €');
});
