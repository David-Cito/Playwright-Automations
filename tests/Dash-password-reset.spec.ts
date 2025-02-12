import { test, expect } from '@playwright/test';

import { company_address_book, job_titles, New_employee } from '../Test-modules/Dash-module';

import { new_hires } from '../Inputs/Dash-Input';


new_hires.forEach(( employee ) => {
  // You can also do it with test.describe() or with multiple tests as long the test name is unique.
  test(`testing with ${employee.first_name}`, async ({ page }) => {
    
  //Send Employee Password Reset
  await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/Admin/aEmployee.aspx?N=Active');

  //Close pop-ups

  const pop_up_1 = page.locator('#border-2db5fdf1-621d-0e49-a4df-09de01b7a0f8');
  const pop_up_2 =page.locator('#border-e44b9967-5654-8a32-af0f-ee252621f07e');


  if (await pop_up_2.isVisible({ timeout:10_000}))
    await pop_up_2.click();

  if (await pop_up_1.isVisible({ timeout:10_000}))
    await pop_up_1.click();

  if (await pop_up_1.isVisible({ timeout:10_000}))
    await pop_up_1.click();

  await page.getByAltText('Filter Name column').click();
  await page.getByAltText('Filter Name column').fill(`${employee.last_name}, ${employee.first_name}`);
  await page.getByAltText('Filter Name column').press('Enter');
  await page.getByRole('link', { name: 'Edit' }).first().click();

  page.on('dialog', dialog => dialog.accept());

  await page.getByRole('button', { name: 'Reset Password' }).click();


  await expect(page.getByText('Password has been reset')).toBeVisible();

  await page.close();

  });
});
