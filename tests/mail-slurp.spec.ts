import { test, expect } from '@playwright/test';

import path from 'path';

import * as fs from 'node:fs/promises';

//npm i --save mailslurp-client

import { MailSlurp } from 'mailslurp-client';

import { fileURLToPath } from 'url';


// NEED TO ATTACH SCREENSHOT TO EMAIL
// SET  UP TIMING WITH FREE AWS SCHEDULE ACCOUNT

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file

const __dirname = path.dirname(__filename); // get the name of the directory

console.log('current directory',__dirname);

const imagePath = path.join(__dirname, '../listing-to-buy.png');

console.log('image path',imagePath);

const inboxId = 'fe2b7c12-7941-44a9-ade7-e7cd9bd5b782';


test('test', async ({ page }) => {
  
  await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/User/Login.aspx');

  console.log('test start');
  // create a new instance with your api key
  const mailslurp = new MailSlurp({ apiKey: "5d626f06d9f5112aa575c8e324215d582d7e72ce495f4f52a87f24aaf5b39dba" });
  //console.log('Authfile',authFile);

  /* const inbox = await mailslurp.inboxController.createInbox({
    emailAddress: 'new.hires@mailslurp.biz',
  }) */



  //Create an inbox
  //const inbox = await mailslurp.inboxController.createInboxWithDefaults();
  //expect(inbox.emailAddress).toContain('@mailslurp')

  /* const fileBase64Encoded = await fs.readFile(imagePath, {
          encoding: 'base64',
        });
  
  const body = `<!DOCTYPE html>
  <html lang="en">
      <body>
          <p>Check out my <strong>inline</strong> chihuahua</p>
          <p><img src="cid:${fileBase64Encoded}" alt="ticket-screenshot" width="300" height="300"></p>
      </body>
  </html>`; */

  const inbox = await mailslurp.getInbox(inboxId);
  expect(inbox.id).toEqual(inboxId);

  console.log('inbox id:',inboxId);

  // Wait for an email to arrive at an inbox or return first found result
  const email = await mailslurp.waitForLatestEmail(
    inboxId,
    20_000
  );
  const email_text = email.body.replace(/<[^>]*>/g, '');
  // use a regex in code to extract the content
  console.log('email body:',email_text);
  /* const r = /href="(https[^"]+)"/gs;
  const results = r.exec(email.body!!)!!;
  const url = decodeURIComponent(results[1]);
  console.log('results',results);
  console.log('url',url); */

  // now you can use the verification code
  //expect(url).toBeTruthy();


  // send an email from the inbox to itself
  /* const sent = await mailslurp.inboxController.sendEmailAndConfirm({
  inboxId: inbox.id,
  sendEmailOptions: {
    to: ['david.cito808@gmail.com'],
    subject: 'Test email',
    isHTML: true,
    attachments: [fileBase64Encoded],
    body,
    }
  });
  expect(sent.id).toBeTruthy()
  console.log(sent.id); */

   
  /* await page.screenshot({ path: 'screenshot-tab-one.png' })
  await pageTwo.screenshot({ path: 'screenshot-tab-two.png' }) */

  // Intuit Account login
  /* await page.goto('https://accounts.intuit.com/app/account-manager/overview');

  if (await expect(page.getByTestId('AccountChoiceButton_0')).toBeVisible({ timeout: 15_000 })) {
    page.getByTestId('AccountChoiceButton_0').click();
  }
 */


  //const email_account = page.getByTestId('AccountChoiceButton_0');

  /* if (await page.getByTestId('AccountChoiceButton_0').isVisible({ timeout: 15_000 })) {
    await page.getByTestId('AccountChoiceButton_0').click();
  } */


  // Login Confirmation
  //await expect(page.getByRole('heading', { name: 'Hello David!' })).toBeVisible({ timeout: 15_000 });


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

  /* const clock_in_button = page.getByRole('button', { name: 'Clock In' }).locator('nth=1');
  
  //Clock in button click
  //await page.locator('#timecard_advanced_mode_submit').first().click();

  //Verify Clock out button is visible
  await expect(clock_in_button).toContainText('Clock In', { timeout : 50_000 });

  //await expect(page.locator('#timecard_submit')).toContainText('Clock In', { timeout? : 50_000 });

  //await expect(page.getByRole('button', { name: 'Clock Out' })).toBeVisible({ timeout: 50_000 });
  //await expect(page.getByRole('button', { name: 'Clock In' }).locator('nth=1')).toBeVisible({ timeout: 50_000 });


    await pop_up_2.click();
  await browser.close(); */

  //await pageTwo.getByRole('button', { name: 'Clock Out' }).click();


  //Clock out button click
  //await page.getByRole('button', { name: 'Clock Out' }).click();
  //await page.locator('#timecard_advanced_mode_submit').click();

  page.close();
})
