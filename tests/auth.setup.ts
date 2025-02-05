import { test as setup, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file

const __dirname = path.dirname(__filename); // get the name of the directory

console.log(__dirname);

const authFile = path.join(__dirname, '../../playwright/.auth/dash-auth.json');

setup(' dash authenticate', async ({ page }) => {

  // Dash Login
  await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/User/Login.aspx');
  await page.getByPlaceholder('Company ID').click();
  await page.getByPlaceholder('Company ID').fill('72474');

  await page.getByPlaceholder('Company ID').press('Tab');
  await page.getByPlaceholder('User Name').fill('davidc');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('Password').fill('Jwy2djwy2d');
  await page.getByPlaceholder('Password').press('Enter');
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.

  // Wait for the final URL to ensure that the cookies are actually set.
  //await page.waitForURL('https://dash-ngs.net/NextGear/Enterprise/Module/User/uPostLogin.aspx');

  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  //await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  await expect(page.locator('#aspnetForm')).toContainText('Logout');


  //await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});