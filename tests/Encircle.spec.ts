import { test, expect } from '@playwright/test';

import { new_hires } from '../Inputs/Dash-Input';


new_hires.forEach(( employee ) => {
  // You can also do it with test.describe() or with multiple tests as long the test name is unique.
  test(`Encircle Automation for ${employee.first_name}`, async ({ page }) => {
    //Open Encircle and Login

    //console.log(JSON.stringify(employee)); 

    await page.goto('https://encircleapp.com/app/settings/org/organization/436fc6f1-c3ba-457b-b2a2-bc3e20a641fa/members');

    //Confirm Login
    await expect(page.getByText('Premier Restoration Hawaii').nth(1)).toBeVisible({ timeout: 10_000 });

    // await expect(page.getByRole('button', { name: 'User Settings' })).toBeVisible({ timeout: 15_000 });

    //Add Employee to Encircle Member list
    /* await page.locator('div').filter({ hasText: /^Invite Users$/ }).nth(3).click();
    await page.getByPlaceholder('Enter email...').click();
    await page.getByPlaceholder('Enter email...').fill(employee.FLN_email());
    await page.locator('.BaseButton').first().click();
    await expect(page.getByText(employee.FLN_email())).toBeVisible({ timeout: 15_000 }); */


  

  });
});
