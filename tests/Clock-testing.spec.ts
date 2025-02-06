import { test, expect } from '@playwright/test';

import * as OTPAuth from "otpauth";

import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file

const __dirname = path.dirname(__filename); // get the name of the directory

console.log('current directory',__dirname);

const authFile = path.join(__dirname, '../../playwright/.auth/intuit-auth.json');

console.log('Authfile',authFile);

test.use({ storageState: authFile });


test('test', async ({ page }) => {

  console.log('Authfile',authFile);

   
  /* await page.screenshot({ path: 'screenshot-tab-one.png' })
  await pageTwo.screenshot({ path: 'screenshot-tab-two.png' }) */

  // Intuit Account login
  await page.goto('https://accounts.intuit.com/app/account-manager/overview');

  // Login Confirmation
  await expect(page.getByRole('heading', { name: 'Hello David!' })).toBeVisible();


  //Login in Username Scenarios
  /* const username_input = page.getByTestId('IdentifierFirstInternationalUserIdInput');

  const email_account = page.getByTestId('AccountChoiceButton_0');

  const email_input_2 = page.getByTestId('IdentifierFirstIdentifierInput');

  const username_locators = [username_input,email_account,email_input_2]; */


  /* for (let i = 0; i < username_locators.length; i++) {
    if (await username_locators[i].isVisible({ timeout: 30_000 })) {
      await username_locators[i].click();
      console.log('loop #',i);
    }
  } */

  //await expect(username_input.or(email_account).first()).toBeVisible({ timeout: 20_000 });


  /* if (await email_account.isVisible({ timeout: 15_000 })) {
    await email_account.click();

  }
  else if (await email_input_2.isVisible({ timeout: 15_000 })) {
    await email_input_2.click();
    await email_input_2.fill('david@koahawaii.com');
    await page.getByTestId('IdentifierFirstSubmitButton').click();
  }
  else {
    await username_input.click();
    await username_input.click();
    await username_input.fill('david@koahawaii.com');
    await page.getByTestId('IdentifierFirstSubmitButton').click();
    }
 */

  //Forgot password
  /* await page.getByTestId('passwordVerificationCancelButton').click();

  //TOTP Option
  await page.getByTestId('challengePickerOption_TOTP').click();

  //Generate TOTP Code
  const otpInput = await page.getByTestId('VerifySoftTokenInput');
  let totp = new OTPAuth.TOTP({
    issuer: "Microsoft",
    label: "david@koahawaii.com",
    algorithm: "SHA1",
    digits: 6,
    period: 30,
    secret: "zffvs5c6rsmlvhvh",
  });
  const code = totp.generate();

  console.log(code);
  
  await otpInput.fill(code);

  await page.context().storageState({ path: "../Playwright-Automations/auth.json" });



  await page.getByTestId('VerifySoftTokenInput').click();
  await page.getByTestId('VerifySoftTokenSubmitButton').click();

  if (await page.getByTestId('userIntentPasswordResetCancelButton').isVisible()) {
    await page.getByTestId('userIntentPasswordResetCancelButton').click();
  } */



/*   await page.getByTestId('IdentifierFirstIdentifierInput').click();
  await page.getByTestId('IdentifierFirstIdentifierInput').fill('david@koahawaii.com');
  await page.getByTestId('IdentifierFirstSubmitButton').click(); */
  //await page.getByTestId('currentPasswordInput').click();
  //await page.getByTestId('currentPasswordInput').fill('Jwy2djwy2d@#!$');
  //await page.getByTestId('passwordVerificationContinueButton').click();
  //const pageTwo = await context.newPage();
  //await page.goto('https://accounts.intuit.com/app/sign-in?app_group=QBTime&asset_alias=Intuit.qbshared.tsheets&redirect_uri=https%3A%2F%2Ftsheets.intuit.com#w_timecard');
  //await pageTwo.reload();
  //await pageTwo.reload();

  //await page.goto('https://tsheets.intuit.com/#w_timecard');

  // Time clock URL
  //await page.goto('https://accounts.intuit.com/app/sign-in?app_group=QBTime&asset_alias=Intuit.qbshared.tsheets&redirect_uri=https%3A%2F%2Ftsheets.intuit.com#w_timecard');
  
 

  //await page.getByTestId('AccountChoiceButton_0').click();
  //await page.getByTestId('IdentifierFirstInternationalUserIdInput')







  

  //Password Input 
  //await page.getByTestId('currentPasswordInput').fill('Jwy2djwy2d@#!$');
  //await page.getByTestId('passwordVerificationContinueButton').click();

  const clock_in_button = page.getByRole('button', { name: 'Clock In' }).locator('nth=1');
  
  //Clock in button click
  //await page.locator('#timecard_advanced_mode_submit').first().click();

  //Verify Clock out button is visible
  await expect(clock_in_button).toContainText('Clock In', { timeout : 50_000 });

  //await expect(page.locator('#timecard_submit')).toContainText('Clock In', { timeout? : 50_000 });

  //await expect(page.getByRole('button', { name: 'Clock Out' })).toBeVisible({ timeout: 50_000 });
  //await expect(page.getByRole('button', { name: 'Clock In' }).locator('nth=1')).toBeVisible({ timeout: 50_000 });


  await browser.close();

  //await pageTwo.getByRole('button', { name: 'Clock Out' }).click();


  //Clock out button click
  //await page.getByRole('button', { name: 'Clock Out' }).click();
  //await page.locator('#timecard_advanced_mode_submit').click();
})
