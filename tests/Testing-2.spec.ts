import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {

    await page.goto('https://www.google.com/');
    await expect(page.getByLabel('Gmail')).toBeVisible();
    
})
