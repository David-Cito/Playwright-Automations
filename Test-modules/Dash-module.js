

export const company_address_book = [
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

export const job_titles = {
  Assistant_Accountant: 'ADMINISTRATIVE ASSISTANT ACCT',
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

export function New_employee(first_name, last_name, island, job_title, start_date) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.island = island;
  this.office_location = company_address_book.find(({ name }) => name === this.island);
  this.job_title = job_title;
  this.username = this.first_name + "." + this.last_name;
  this.start_date = start_date;

  this.FN_email = function() {
    return this.first_name + "@" + this.office_location.email_suffix + ".com";
  };

  this.FLN_email = function() {
    return this.first_name + "." + this.last_name + "@" + this.office_location.email_suffix + ".com";
  };
}

export const pop_ups = [
  {
    name:'Pop-up 1',
    locator:'#border-8416e5e3-537d-32f1-672f-02ffa0cc65cc'
  },
  {
    name:'Pop-up 2',
    locator:'#border-3768a2b2-9d3b-2752-9a63-733cad3c65cc'
  },
  {
    name:'Pop-up 3',
    locator:'#border-2014469a-0f98-0d26-91df-7672dd8ffd61'
  }
];

/* export function check_and_close_pop_ups( current_page, pop_up_list) {
  for (let i = 0; i < pop_up_list.length; i++) {
    pop_up_list.forEach(element => {
       if (expect(current_page.locator(element.locator)).toBeVisible()) {
        current_page.locator(element.locator).click()
      } 
    });
  }
} */
/* await expect(page.getByText('Welcome')).toBeVisible();
current_page.locator(element.locator).toBeVisible() */

