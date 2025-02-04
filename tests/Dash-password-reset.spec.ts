import { test, expect } from '@playwright/test';

import { company_address_book, job_titles, New_employee } from '../Test-modules/Dash-module';

import { new_hires } from '../Inputs/Dash-Input';


new_hires.forEach(( employee ) => {
  // You can also do it with test.describe() or with multiple tests as long the test name is unique.
  test(`testing with ${employee.first_name}`, async ({ page }) => {
    //Open Dash and Login
  await page.context().storageState({ path: '../auth.json' });
  /* await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/User/Login.aspx');
  await page.getByPlaceholder('Company ID').click();
  await page.getByPlaceholder('Company ID').fill('72474'); */

  //Variable print test
  //await page.getByPlaceholder('Company ID').fill(employee.FLN_email); 

  /* await page.getByPlaceholder('Company ID').press('Tab');
  await page.getByPlaceholder('User Name').fill('davidc');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('Password').fill('Jwy2djwy2d');
  await page.getByPlaceholder('Password').press('Enter'); */

  //Variable print test
  //await page.getByPlaceholder('Company ID').fill(employee.FLN_email); 


  //Close Pop Up Windows
  /* await page.locator('#border-8416e5e3-537d-32f1-672f-02ffa0cc65cc').click();
  await page.locator('#border-3768a2b2-9d3b-2752-9a63-733cad3c65cc').click();
  await page.locator('#border-2014469a-0f98-0d26-91df-7672dd8ffd61').click();
  */


   //Add New Employee Page
  await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/Admin/aAddEmployee.aspx');

  //First Name
  await page.locator('#ctl00_ContentPlaceHolder1_txtFName').click();
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
  await page.getByRole('button', { name: 'Save'}).first().click();

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
