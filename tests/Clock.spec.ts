import { test, expect } from '@playwright/test';


test('test', async ({ browser }) => {

  const context = await browser.newContext()

  const pageOne = await context.newPage()
  /* await pageOne.screenshot({ path: 'screenshot-tab-one.png' })
  await pageTwo.screenshot({ path: 'screenshot-tab-two.png' }) */

  // Intuit Account login
  await pageOne.goto('https://accounts.intuit.com/app/sign-in?app_group=Identity&asset_alias=Intuit.cto.iam.ius');
  await pageOne.getByTestId('IdentifierFirstIdentifierInput').click();
  await pageOne.getByTestId('IdentifierFirstIdentifierInput').fill('david@koahawaii.com');
  await pageOne.getByTestId('IdentifierFirstSubmitButton').click();
  await pageOne.getByTestId('currentPasswordInput').click();
  await pageOne.getByTestId('currentPasswordInput').fill('Jwy2djwy2d@#!$');
  await pageOne.getByTestId('passwordVerificationContinueButton').click();
  test.setTimeout(150_000);
  const pageTwo = await context.newPage()
  await pageTwo.goto('https://accounts.intuit.com/app/sign-in?app_group=QBTime&asset_alias=Intuit.qbshared.tsheets&redirect_uri=https%3A%2F%2Ftsheets.intuit.com#w_timecard');
  await pageTwo.reload();
  //await pageOne.goto('https://tsheets.intuit.com/#w_timecard');

  // Time clock Login
  /* await pageOne.goto('https://accounts.intuit.com/app/sign-in?app_group=QBTime&asset_alias=Intuit.qbshared.tsheets&redirect_uri=https%3A%2F%2Ftsheets.intuit.com#w_timecard');
  await pageOne.getByTestId('IdentifierFirstInternationalUserIdInput').click();
  await pageOne.getByTestId('IdentifierFirstInternationalUserIdInput').fill('david@koahawaii.com');
  await pageOne.getByTestId('IdentifierFirstSubmitButton').click();
  await pageOne.getByTestId('currentPasswordInput').fill('Jwy2djwy2d@#!$');
  await pageOne.getByTestId('passwordVerificationContinueButton').click(); */
  
  //Clock in button click
  //await pageOne.locator('#timecard_advanced_mode_submit').first().click();

  //Verify Clock out button is visible
  //await expect(pageOne.locator('#timecard_submit')).toContainText('Clock Out');

  await expect(pageTwo.getByRole('button', { name: 'Clock Out' })).toBeVisible({ timeout: 50_000 });

  //Clock out button click
  //await pageOne.getByRole('button', { name: 'Clock Out' }).click();
  //await pageOne.locator('#timecard_advanced_mode_submit').click();
})
