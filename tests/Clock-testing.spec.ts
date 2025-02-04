import { test, expect } from '@playwright/test';

import * as OTPAuth from "otpauth";


//import { AuthFile } from "../auth.json";

test.use({ storageState: "../Playwright-Automations/intuit-auth.json"});

test('test', async ({ browser }) => {

  const context = await browser.newContext();

  const pageOne = await context.newPage();

  //await pageOne.context().storageState({ path: AuthFile });
   
  await pageOne.context().clearCookies();

  /* await pageOne.screenshot({ path: 'screenshot-tab-one.png' })
  await pageTwo.screenshot({ path: 'screenshot-tab-two.png' }) */

  // Intuit Account login
  await pageOne.goto('https://accounts.intuit.com/app/sign-in?app_group=Identity&asset_alias=Intuit.cto.iam.ius');

  //Login in Username Scenarios
  const username_input = pageOne.getByTestId('IdentifierFirstInternationalUserIdInput');

  const email_account = pageOne.getByTestId('AccountChoiceButton_0');

  const email_input_2 = pageOne.getByTestId('IdentifierFirstIdentifierInput');

  const username_locators = [username_input,email_account,email_input_2];


  /* for (let i = 0; i < username_locators.length; i++) {
    if (await username_locators[i].isVisible({ timeout: 30_000 })) {
      await username_locators[i].click();
      console.log('loop #',i);
    }
  } */

  //await expect(username_input.or(email_account).first()).toBeVisible({ timeout: 20_000 });


  if (await email_account.isVisible({ timeout: 15_000 })) {
    await email_account.click();

  }
  else if (await email_input_2.isVisible({ timeout: 15_000 })) {
    await email_input_2.click();
    await email_input_2.fill('david@koahawaii.com');
    await pageOne.getByTestId('IdentifierFirstSubmitButton').click();
  }
  else {
    await username_input.click();
    await username_input.click();
    await username_input.fill('david@koahawaii.com');
    await pageOne.getByTestId('IdentifierFirstSubmitButton').click();
    }


  //Forgot password
  await pageOne.getByTestId('passwordVerificationCancelButton').click();

  //TOTP Option
  await pageOne.getByTestId('challengePickerOption_TOTP').click();

  //Generate TOTP Code
  const otpInput = await pageOne.getByTestId('VerifySoftTokenInput');
  let totp = new OTPAuth.TOTP({
    issuer: "Microsoft",
    label: "david@koahawaii.com",
    algorithm: "SHA1",
    digits: 6,
    period: 30,
    secret: "zffvs5c6rsmlvhvh",
  });
  const code = totp.generate();
  
  await otpInput.fill(code);

  await pageOne.context().storageState({ path: "../Playwright-Automations/auth.json" });



  await pageOne.getByTestId('VerifySoftTokenInput').click();
  await pageOne.getByTestId('VerifySoftTokenSubmitButton').click();

  if (await pageOne.getByTestId('userIntentPasswordResetCancelButton').isVisible()) {
    await pageOne.getByTestId('userIntentPasswordResetCancelButton').click();
  }



/*   await pageOne.getByTestId('IdentifierFirstIdentifierInput').click();
  await pageOne.getByTestId('IdentifierFirstIdentifierInput').fill('david@koahawaii.com');
  await pageOne.getByTestId('IdentifierFirstSubmitButton').click(); */
  //await pageOne.getByTestId('currentPasswordInput').click();
  //await pageOne.getByTestId('currentPasswordInput').fill('Jwy2djwy2d@#!$');
  //await pageOne.getByTestId('passwordVerificationContinueButton').click();
  //const pageTwo = await context.newPage();
  //await pageOne.goto('https://accounts.intuit.com/app/sign-in?app_group=QBTime&asset_alias=Intuit.qbshared.tsheets&redirect_uri=https%3A%2F%2Ftsheets.intuit.com#w_timecard');
  //await pageTwo.reload();
  //await pageTwo.reload();

  //await pageOne.goto('https://tsheets.intuit.com/#w_timecard');

  // Time clock URL
  //await pageOne.goto('https://accounts.intuit.com/app/sign-in?app_group=QBTime&asset_alias=Intuit.qbshared.tsheets&redirect_uri=https%3A%2F%2Ftsheets.intuit.com#w_timecard');
  
 

  //await pageOne.getByTestId('AccountChoiceButton_0').click();
  //await pageOne.getByTestId('IdentifierFirstInternationalUserIdInput')







  

  //Password Input 
  //await pageOne.getByTestId('currentPasswordInput').fill('Jwy2djwy2d@#!$');
  //await pageOne.getByTestId('passwordVerificationContinueButton').click();

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
