import { test, expect } from '@playwright/test';

import { company_address_book, job_titles, New_employee } from '../Test-modules/Dash-module';

import { new_hires } from '../Inputs/Dash-Input';


let company_address_book = [
  {name:"Oahu",
   street:"2815 Kaihikapu Street, Unit 104",
   zipcode:"96819",
   city:"Honolulu",
   state:"Hawaii",
   country:"USA",
   county:"Honolulu",
   email_suffix: "premhi"
  },
  {name: "Maui",
    street:"344 East Ahuliu Way",
    zipcode:"96793",
    city:"Wailuku",
    state:"Hawaii",
    country:"USA",
    county:"Hawaii",
    email_suffix: "premhi"
   },
   {name:"Big island",
    street:"74-5587 Alapa Street",
    zipcode:"96740",
    city:"Kailua-Kona",
    state:"Hawaii",
    country:"USA",
    county:"Hawaii",
    email_suffix: "premhi"
   },
   {name: "Kauai",
    street:"4247 Kapaia Road",
    zipcode:"96766",
    city:"Lihue",
    state:"Hawaii",
    country:"USA",
    county:"Hawaii",
    email_suffix: "premhi"
   }
  ];

let job_titles = {
  Assistant_Acountant: 'ADMINISTRATIVE ASSISTANT ACCT',
  BDM: 'BUSINESS DEVELOPMENT MANAGER',
  Chairman: 'CHAIRMAN',
  C3: 'CLIENT CARE COORDINARTOR',
  Contents_TIT: 'CONTENTS TECH IN TRAINING',
  Contents_Tech_2: 'CONTENTS TECH II',
  Contents_Manager: 'CONTENTS MANAGER',
  Office_Manager: 'OFFICE MANAGER',
  GM: 'GENERAL MANAGER',
  President: 'PRESIDENT',
  Svp_sales_and_Marketing: 'SVP SALES & MARKETING',
  Mitigation_Lead_3: 'MITIGATION LEAD III',
  Mitigation_Lead_2: 'MITIGATION LEAD II',
  Mitigation_Lead_1: 'MITIGATION LEAD I',
  Mitigation_Pm_3: 'MITIGATION PM III',
  Mitigation_Pm_2: 'MITIGATION PM II',
  Mitigation_Pm_1: 'MITIGATION PM I',
  Mitigation_Tech_3: 'MITIGATION TECH III',
  Mitigation_Tech_2: 'MITIGATION TECH II',
  Mitigation_Tech_1: 'MITIGATION TECH I',
  Mitigation_Tech_Temp: 'MITIGATION TECH-TEMP',
  Mitigation_Tech_Training: 'MITIGATION TECH IN TRAINING',
  Office_Manager: 'OFFICE MANAGER',
  SVP_Operations: 'SVP OPERATIONS',
  Recon_Estimator: 'RECON ESTIMATOR',
  Recon_Tech_In_Training: 'RECON TECH IN TRAINING',
  Recon_Manager: 'RECON MANAGER',
  Recon_Tech_3: 'RECON TECH III',
  Asbestos_Manger: 'ASBESTOS',
  Contents_Tech_1: 'CONTENTS TECH I',
  Contents_Lead_2: 'CONTENTS TECH II',
  Contents_Lead_1: 'CONTENTS TECH I',
  Contents_Supervisor: 'CONTENTS SUPERVISOR',
  Recon_Tech_2: 'RECON TECH II',
  Recon_Tech_1: 'RECON TECH I',
  Recon_Apprentice_2: 'RECON APPRENTICE II',
  Recon_Apprentice_1: 'RECON APPRENTICE I',
  Recon_Journeyman_2: 'RECON JOURNEYMAN II',
  Recon_Journeyman_1: 'RECON JOURNEYMAN I',
  Mitigation_Manager: 'MITIGATION MANAGER',
  Abatement_Supervisor_Oahu: 'ABATEMENT SUPERVISOR - OAHU',
  Abatement_Lead_Oahu: 'ABATEMENT LEAD - OAHU',
  Abatement_Tech_Oahu: 'ABATEMENT TECH - OAHU',
  Asbestos_Tech_Oahu: 'ASBESTOS TECH - OAHU',
  Material_Selection_Manager: 'MATERIAL SELECTION MANAGER',
  Safety_Manager: 'SAFETY MANAGER',
  Warehouse_Manager: 'WAREHOUSE_MANAGER',
  Mitigation_Admin: 'MITIGATION ADMIN'

};


function New_employee(first_name, last_name, island) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.island = island;
  this.office_location = company_address_book.find(({ name }) => name === this.island);
  this.username = this.first_name + "." + this.last_name;
  this.FN_email = this.first_name + "@" + this.office_location.email_suffix + ".com";
  this.FLN_email = this.first_name + "." + this.last_name + "@" + this.office_location.email_suffix + ".com";
}

const employee = new New_employee("Test","Lastname","Oahu");


new_hires.forEach(addEmployee);

function addEmployee (employee) {

  

}




test('test', async ({ page }) => {

  //Open Dash and Login

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
  await page.getByText(job_titles.Asbestos_Manger).first().click();

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
  await page.locator('#ctl00_ContentPlaceHolder1_txtEmail').fill(employee.FLN_email);

  //Save Employee
  await page.getByRole('button', { name: 'Save'}).first().click();

  //Send Employee Password Reset
  await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/Admin/aEmployee.aspx?N=Active');
  await page.getByAltText('Filter Name column').click();
  await page.getByAltText('Filter Name column').fill(employee.last_name);
  await page.getByAltText('Filter Name column').press('Enter');
  await page.getByRole('link', { name: 'Edit' }).first().click();


  /* await page.getByRole('button', { name: 'Reset Password' }).first().click();
  page.on("dialog", async (alert) => {
    const text = alert.message(); 
    console.log(text);;
    await alert.dismiss();
    })

    await page.locator("button:has-text('OK')").nth(0).click();
    await page.goto('https://dash-ngs.net/NextGear/Enterprise/Module/Admin/aEmployee.aspx?N=Active'); */
  })