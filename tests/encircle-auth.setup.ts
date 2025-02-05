import { test as setup, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file

const __dirname = path.dirname(__filename); // get the name of the directory

console.log('current directory',__dirname);

const authFile = path.join(__dirname, '../../playwright/.auth/encircle-auth.json');

console.log('Authfile',authFile);

setup(' Encircle authenticate', async ({ page }) => {

  // Encircle Login
  await page.goto('https://encircle.us.auth0.com/u/login/identifier?state=hKFo2SBjWXhDS3JKRUdUTUljSXdRdThwZHN0MlRJMUQ5S3NzV6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFBmVFFCN2JEZEYxbkYwblpOMi1IaW5qU2RZMDFGWEJTo2NpZNkgUVRya1RxVWdYSEJHeW9FcW1iSkxxRlZHTjI3clJWYkw');
  
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('david@koahawaii.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Password').fill('Jwy2djwy2d');
  await page.getByRole('button', { name: 'Continue' }).click();

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.

  // Wait for the final URL to ensure that the cookies are actually set.
  //await page.waitForURL('https://dash-ngs.net/NextGear/Enterprise/Module/User/uPostLogin.aspx');

  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  //await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'User Settings' })).toBeVisible();

  //await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});