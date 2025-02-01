import { test, expect } from '@playwright/test';

import { company_address_book, job_titles, New_employee, pop_ups, check_and_close_pop_ups } from '../Test-modules/Dash-module';

import { new_hires } from '../Inputs/Dash-Input';



test('test', async ({ page }) => {

  //Open Dash and Login
  await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/User/Login.aspx');
  await page.getByPlaceholder('Company ID').click();
  await page.getByPlaceholder('Company ID').fill('72474');

  //Variable print test
  //await page.getByPlaceholder('Company ID').fill(employee.FLN_email); 

  await page.getByPlaceholder('Company ID').press('Tab');
  await page.getByPlaceholder('User Name').fill('davidc');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('Password').fill('Jwy2djwy2d');
  await page.getByPlaceholder('Password').press('Enter');

  //Variable print test
  //await page.getByPlaceholder('Company ID').fill(employee.FLN_email); 
 /*  const pop_up_1 = page.locator('#border-8416e5e3-537d-32f1-672f-02ffa0cc65cc');
  const pop_up_2 = page.locator('#border-3768a2b2-9d3b-2752-9a63-733cad3c65cc');
  const pop_up_3 = page.locator('#border-2014469a-0f98-0d26-91df-7672dd8ffd61');
  const pop_up_4 = page.locator('#border-2db5fdf1-621d-0e49-a4df-09de01b7a0f8'); */

  //Close Pop Up Windows
  /* await expect(page.locator('#border-2db5fdf1-621d-0e49-a4df-09de01b7a0f8')).toBeVisible();
  console.log('its visible');
  await page.locator('#border-2db5fdf1-621d-0e49-a4df-09de01b7a0f8').click(); */
