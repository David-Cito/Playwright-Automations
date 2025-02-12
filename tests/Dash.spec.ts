import { test, expect } from '@playwright/test';

import { new_hires } from '../Inputs/Dash-Input';

//test.use({ storageState: path.resolve(__dirname, '../playwright/.auth/dash-auth.json') });


//test.use({ storageState: dash_authFile});




new_hires.forEach(( employee ) => {
  // You can also do it with test.describe() or with multiple tests as long the test name is unique.
  test(`Dash Automation for ${employee.first_name}`, async ({ page }) => {
    //Open Dash and Login
  await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/User/Login.aspx');

  //Set Storage State
  //await page.context().storageState({ path: '../Auth-states/dash-auth.json' });

  //Save and close pop window
  const pop_up_1 = page.locator('#border-2db5fdf1-621d-0e49-a4df-09de01b7a0f8');
  const pop_up_2 =page.locator('#border-e44b9967-5654-8a32-af0f-ee252621f07e');

  if (await pop_up_2.isVisible())
    await pop_up_2.click();

  if (await pop_up_1.isVisible())
    await pop_up_1.click();

   //Add New Employee Page
  await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/Admin/aAddEmployee.aspx');

  //await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible({ timeout: 20_000 });
  await expect(page.locator('#aspnetForm')).toContainText('Logout');


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

  //await expect(page.getByText('New employee created')).toBeVisible({ timeout: 10_000 });

  
  await expect(page.getByText('Employee details updated')).toBeVisible({ timeout: 20_000 });

  await page.close();
  });
});
