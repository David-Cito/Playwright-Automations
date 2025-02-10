import { test, expect } from '@playwright/test';

//import path from 'path';

//import * as fs from 'node:fs/promises';

import { MailSlurp } from 'mailslurp-client';

//import { fileURLToPath } from 'url';


// NEED TO ATTACH SCREENSHOT TO EMAIL
// SET  UP TIMING WITH FREE AWS SCHEDULE ACCOUNT

/* const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file

const __dirname = path.dirname(__filename); // get the name of the directory

console.log('current directory',__dirname);

const imagePath = path.join(__dirname, '../listing-to-buy.png');

console.log('image path',imagePath); */



test('test', async ({ page }) => {

  //console.log('Authfile',authFile);

   
  /* await page.screenshot({ path: 'screenshot-tab-one.png' })
  await pageTwo.screenshot({ path: 'screenshot-tab-two.png' }) */

  // Stubhub Account login
  await page.goto('https://www.stubhub.com/still-woozy-honolulu-tickets-2-14-2025/event/156772869/?quantity=0');

  //await page.goto('https://www.stubhub.com/still-woozy-brisbane-tickets-2-12-2025/event/156339898/');

  
  await page.getByTestId('quantity-modal').getByLabel('Number of tickets').selectOption('1');
  await page.getByRole('button', { name: 'Continue' }).click();

  const listings = page.locator("[data-listing-id]");

  const listings_count = await listings.count();

  let current_prices = [];

  let max_price = 165;

  let event_name = 'Still Woozy';


  for (let i=0; i<listings_count; i++) {
    //get the text of the quote
    //text = await quotes.nth(i).textContent();
    let str = await listings.nth(i).getAttribute('data-price');
    let price = parseInt(str.slice(1));
    //log it to the console
    if (price<=max_price){
      //console.log( `${price} is less than or equal to ${max_price}`);
      // upload attachments to mailslurp



      // create a new instance with your api key
      const mailslurp = new MailSlurp({ apiKey: "5d626f06d9f5112aa575c8e324215d582d7e72ce495f4f52a87f24aaf5b39dba" });
      //console.log('Authfile',authFile);
    
      //Create an inbox
      const inboxWithMailSlurpDomain = await mailslurp.inboxController.createInboxWithOptions({
        createInboxDto: {
          // you can specify a mailslurp domain or your own custom one
          // see https://api.mailslurp.com/available-domains/
          domainName: 'mailslurp.biz'
        }
      });


  

      expect(inboxWithMailSlurpDomain.domain).toEqual('mailslurp.biz'); 

      const sent = await mailslurp.inboxController.sendEmailAndConfirm({
      inboxId: inboxWithMailSlurpDomain.id,
      sendEmailOptions: {
        to: ['david.cito808@gmail.com'],
        subject: `Tickets for ${event_name} are now $${price}`,
        isHTML: true,
        //attachments: [fileBase64Encoded],
        useInboxName: true,
        body: `Tickets for ${event_name} are now $${price}`,
      }
      });
      expect(sent.id).toBeTruthy()
      console.log(sent.id);
    }
    console.log(`data-price: ${price}`);
    current_prices.push(price);

  }

  //console.log('current prices:',current_prices);
  //close the browser
  await page.close();

  /* for (let step = 270; step > 0; step--) {
    let string = step.toString();
    string = '$' + string;
    console.log(string);
    if (await locator.filter({ hasText: string }).isVisible({ timeout: 10_000 }))
      {
      console.log('Ticket price is at $', string);
      console.log(locator.textContent());
    }
    //await expect(locator).toContainText('97', { timeout: 10_000 });
  }  */


  
 


  //.filter({ hasText: regex}); 
  //console.log(locator.textContent());

  //await expect(page.locator('#listings-container')).toContainText(\$\b(1?[0-9]{1,2})\b);



  //await expect(page.locator('#listings-container')).toMatchText("\$\b(1?[0-9]{1,2})\b");

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


  await browser.close(); */

  //await pageTwo.getByRole('button', { name: 'Clock Out' }).click();


  //Clock out button click
  //await page.getByRole('button', { name: 'Clock Out' }).click();
  //await page.locator('#timecard_advanced_mode_submit').click();
})
