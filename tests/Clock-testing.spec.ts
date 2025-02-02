import { test, expect } from '@playwright/test';

//import { AuthFile } from "../auth.json";

test.use({ storageState: "../Playwright-Automations/auth.json"});

test('test', async ({ browser }) => {

  const context = await browser.newContext();

  const pageOne = await context.newPage();

  //await pageOne.context().storageState({ path: AuthFile });

  await pageOne.context().storageState({ path: "../Playwright-Automations/auth.json" });

  /* await pageOne.screenshot({ path: 'screenshot-tab-one.png' })
  await pageTwo.screenshot({ path: 'screenshot-tab-two.png' }) */

  // Intuit Account login
/*   await pageOne.goto('https://accounts.intuit.com/app/sign-in?app_group=Identity&asset_alias=Intuit.cto.iam.ius');
  await pageOne.getByTestId('IdentifierFirstIdentifierInput').click();
  await pageOne.getByTestId('IdentifierFirstIdentifierInput').fill('david@koahawaii.com');
  await pageOne.getByTestId('IdentifierFirstSubmitButton').click();
  await pageOne.getByTestId('currentPasswordInput').click();
  await pageOne.getByTestId('currentPasswordInput').fill('Jwy2djwy2d@#!$');
  await pageOne.getByTestId('passwordVerificationContinueButton').click(); */
  //const pageTwo = await context.newPage();
  //await pageOne.goto('https://accounts.intuit.com/app/sign-in?app_group=QBTime&asset_alias=Intuit.qbshared.tsheets&redirect_uri=https%3A%2F%2Ftsheets.intuit.com#w_timecard');
  //await pageTwo.reload();
  //await pageTwo.reload();

  //await pageOne.goto('https://tsheets.intuit.com/#w_timecard');

  // Time clock URL
  await pageOne.goto('https://accounts.intuit.com/app/sign-in?app_group=QBTime&asset_alias=Intuit.qbshared.tsheets&redirect_uri=https%3A%2F%2Ftsheets.intuit.com#w_timecard');
  
  //Login in Username Scenarios
  const username_input = pageOne.getByTestId('IdentifierFirstInternationalUserIdInput');

  const email_account = pageOne.getByTestId('AccountChoiceButton_0');

  //await pageOne.getByTestId('AccountChoiceButton_0').click();
  //await pageOne.getByTestId('IdentifierFirstInternationalUserIdInput')


  await expect(username_input.or(email_account).first()).toBeVisible({ timeout: 50_000 });
  if (await email_account.isVisible())
    await email_account.click();
  else {
    await username_input.click();
    await pageOne.getByTestId('IdentifierFirstInternationalUserIdInput').click();
    await pageOne.getByTestId('IdentifierFirstInternationalUserIdInput').fill('david@koahawaii.com');
    await pageOne.getByTestId('IdentifierFirstSubmitButton').click();
  }






  

  //Password Input 
  await pageOne.getByTestId('currentPasswordInput').fill('Jwy2djwy2d@#!$');
  await pageOne.getByTestId('passwordVerificationContinueButton').click();

  const clock_in_button = pageOne.getByRole('button', { name: 'Clock In' }).locator('nth=1');
  
  //Clock in button click
  //await pageOne.locator('#timecard_advanced_mode_submit').first().click();

  //Verify Clock out button is visible
  await expect(clock_in_button).toContainText('Clock In', { timeout : 50_000 });

  //await expect(pageOne.locator('#timecard_submit')).toContainText('Clock In', { timeout? : 50_000 });

  //await expect(pageOne.getByRole('button', { name: 'Clock Out' })).toBeVisible({ timeout: 50_000 });
  //await expect(pageOne.getByRole('button', { name: 'Clock In' }).locator('nth=1')).toBeVisible({ timeout: 50_000 });


  await browser.close();

  //await pageTwo.getByRole('button', { name: 'Clock Out' }).click();


  //Clock out button click
  //await pageOne.getByRole('button', { name: 'Clock Out' }).click();
  //await pageOne.locator('#timecard_advanced_mode_submit').click();
})
