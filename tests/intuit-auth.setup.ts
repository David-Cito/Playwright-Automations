import { test as setup, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file

const __dirname = path.dirname(__filename); // get the name of the directory

console.log('current directory',__dirname);

const authFile = path.join(__dirname, '../../playwright/.auth/intuit-auth.json');

console.log('Authfile',authFile);

setup(' Intuit Authenticate', async ({ page }) => {

  // Intuit Website
  await page.goto('https://accounts.intuit.com/app/sign-in?app_group=Identity&asset_alias=Intuit.cto.iam.ius');
  
  //Login in Username Scenarios
  const username_input = page.getByTestId('IdentifierFirstInternationalUserIdInput');

  const email_account = page.getByTestId('AccountChoiceButton_0');

  const email_input_2 = page.getByTestId('IdentifierFirstIdentifierInput');


  if (await email_account.isVisible({ timeout: 15_000 })) {
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

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.

  // Wait for the final URL to ensure that the cookies are actually set.
  //await page.waitForURL('https://dash-ngs.net/NextGear/Enterprise/Module/User/uPostLogin.aspx');

  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  //await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Hello David!' })).toBeVisible();


  //await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});