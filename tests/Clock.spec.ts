import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {

  // Time clock Login
  await page.goto('https://accounts.intuit.com/app/sign-in?app_group=QBTime&asset_alias=Intuit.qbshared.tsheets&redirect_uri=https%3A%2F%2Ftsheets.intuit.com#w_timecard');
  await page.getByTestId('IdentifierFirstInternationalUserIdInput').click();
  await page.getByTestId('IdentifierFirstInternationalUserIdInput').fill('david@koahawaii.com');
  await page.getByTestId('IdentifierFirstSubmitButton').click();
  await page.getByTestId('currentPasswordInput').fill('Jwy2djwy2d@#!$');
  await page.getByTestId('passwordVerificationContinueButton').click();
  
  //Clock in button click
  //await page.locator('#timecard_advanced_mode_submit').first().click();

  //Clock out button click
  await page.getByRole('button', { name: 'Clock Out' }).click();
  //await page.locator('#timecard_advanced_mode_submit').click();
})
