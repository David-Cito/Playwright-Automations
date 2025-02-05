import { test, expect } from '@playwright/test';

import { new_hires } from '../Inputs/Dash-Input';


new_hires.forEach(( employee ) => {
  // You can also do it with test.describe() or with multiple tests as long the test name is unique.
  test(`Encircle Automation for ${employee.first_name}`, async ({ page }) => {
    //Open Encircle and Login
  await page.goto('https://encircle.us.auth0.com/u/login/identifier?state=hKFo2SBjWXhDS3JKRUdUTUljSXdRdThwZHN0MlRJMUQ5S3NzV6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFBmVFFCN2JEZEYxbkYwblpOMi1IaW5qU2RZMDFGWEJTo2NpZNkgUVRya1RxVWdYSEJHeW9FcW1iSkxxRlZHTjI3clJWYkw');

  await page.goto('https://encircleapp.com/app/settings/organization/436fc6f1-c3ba-457b-b2a2-bc3e20a641fa/members');
  await page.locator('div').filter({ hasText: /^Invite Users$/ }).nth(3).click();
  await page.getByPlaceholder('Enter email...').click();
  await page.getByPlaceholder('Enter email...').fill(employee.FLN_email());
  await page.locator('.BaseButton').first().click();
  await page.getByText(employee.FLN_email());
  

  });
});
