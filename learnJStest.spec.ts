import { expect, test } from "@playwright/test";


test('Task in Learn JS', async ({ page }) => {

    await page.goto('https://javascript.info/');

    await page.getByRole('link', { name: 'Part 3 Additional articles' }).click();

    await page.getByRole('link', { name: 'Patterns and flags' }).click();

    await expect(page.locator('.codebox__code')).toHaveCount(10);

    await expect(page.locator('.updated-at__content')).toHaveText('December 7, 2020');

    await expect(page.locator('[data-tooltip="Regular expressions"]')).toBeVisible();

    await expect(page.locator('[data-tooltip="Character classes"]')).toBeVisible();

})