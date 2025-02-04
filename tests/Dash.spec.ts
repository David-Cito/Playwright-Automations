import { test, expect } from '@playwright/test';

import { company_address_book, job_titles, New_employee } from '../Test-modules/Dash-module';

import { new_hires } from '../Inputs/Dash-Input';


test.use({ storageState: "C:/Users/DavidCito-Rodrigues/Desktop/Playwright-Automations/auth-states/dash-auth.json"});




new_hires.forEach(( employee ) => {
  // You can also do it with test.describe() or with multiple tests as long the test name is unique.
  test(`Dash Automation for ${employee.first_name}`, async ({ page }) => {
    //Open Dash and Login
  await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/User/Login.aspx');
  /* await page.getByPlaceholder('Company ID').click();
  await page.getByPlaceholder('Company ID').fill('72474');

  await page.getByPlaceholder('Company ID').press('Tab');
  await page.getByPlaceholder('User Name').fill('davidc');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('Password').fill('Jwy2djwy2d');
  await page.getByPlaceholder('Password').press('Enter'); */

  //Set Storage State
  //await page.context().storageState({ path: '../dash-auth.json' });

  //Save and close pop window
  const pop_up_1 = page.locator('#border-2db5fdf1-621d-0e49-a4df-09de01b7a0f8');


  if (await pop_up_1.isVisible({ timeout: 50_000 })) {
    await pop_up_1.click();
  }

   //Add New Employee Page
  await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/Admin/aAddEmployee.aspx');

  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();

  //First Name
/* await page.locator('#ctl00_ContentPlaceHolder1_txtFName').click();
  await page.locator('#ctl00_ContentPlaceHolder1_txtFName').fill(employee.first_name);

  //Last Name
  await page.locator('#ctl00_ContentPlaceHolder1_txtFName').press('Tab');
  await page.locator('#ctl00_ContentPlaceHolder1_txtLName').fill(employee.last_name);

  //Username
  await page.locator('#ctl00_ContentPlaceHolder1_txtLName').press('Tab');
  await page.locator('#ctl00_ContentPlaceHolder1_txtDASHID').fill(employee.username);

  //Password
  await page.locator('#ctl00_ContentPlaceHolder1_txtDASHID').press('Tab');
  await page.locator('#ctl00_ContentPlaceHolder1_ExternalEmployeeIDTextBox').press('Tab');
  await page.locator('#ctl00_ContentPlaceHolder1_txtPassword').fill('123456');

  //Job Title
  await page.locator('#ctl00_ContentPlaceHolder1_ddlJobTitle_Input').click();
  await page.getByText(employee.job_title).first().click();

  //Street Address
  await page.locator('#ctl00_ContentPlaceHolder1_txtAddress').click();
  await page.locator('#ctl00_ContentPlaceHolder1_txtAddress').fill(employee.office_location.street);

  //Zipcode
  await page.locator('#ctl00_ContentPlaceHolder1_txtAddress').press('Tab');
  await page.locator('#ctl00_ContentPlaceHolder1_ctl13_ZipCodeTextBox').fill(employee.office_location.zipcode);

  //City
  await page.locator('#ctl00_ContentPlaceHolder1_ctl13_ZipCodeTextBox').press('Tab');
  await page.locator('#ctl00_ContentPlaceHolder1_ctl13_CityTextBox').fill(employee.office_location.city);

  //State
  await page.locator('#ctl00_ContentPlaceHolder1_ctl13_CityTextBox').press('Tab');
  await page.locator('#ctl00_ContentPlaceHolder1_ctl13_StateComboBox_Input').fill(employee.office_location.state);

  //Country
  await page.locator('#ctl00_ContentPlaceHolder1_ctl13_StateComboBox_Input').press('Tab');
  await page.locator('#ctl00_ContentPlaceHolder1_ctl13_CountryComboBox_Input').fill(employee.office_location.country);

  //County
  await page.locator('#ctl00_ContentPlaceHolder1_ctl13_CountryComboBox_Input').press('Tab');
  await page.locator('#ctl00_ContentPlaceHolder1_ctl13_RegionCountyComboBox_Input').fill(employee.office_location.county);

  //Email
  await page.locator('#ctl00_ContentPlaceHolder1_ctl13_RegionCountyComboBox_Input').press('Tab');
  await page.locator('#ctl00_ContentPlaceHolder1_txtEmail').fill(employee.FLN_email());

  //Save Employee
  await page.getByRole('button', { name: 'Save'}).first().click(); */

  //Send Employee Password Reset
  /* await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/Admin/aEmployee.aspx?N=Active');
  await page.getByAltText('Filter Name column').click();
  await page.getByAltText('Filter Name column').fill(employee.last_name);
  await page.getByAltText('Filter Name column').press('Enter');
  await page.getByRole('link', { name: 'Edit' }).first().click(); */


  /* await page.getByRole('button', { name: 'Reset Password' }).first().click();
  page.on("dialog", async (alert) => {
    const text = alert.message(); 
    console.log(text);;
    await alert.dismiss();
    })

    await page.locator("button:has-text('OK')").nth(0).click();
    await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/Admin/aEmployee.aspx?N=Active'); */
  });
});
