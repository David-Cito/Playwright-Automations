// Export the variable
export const myVariable = 42;

// Export a function
export function myFunction() {
  console.log("Hello from myFunction!");
}

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

export function New_employee(first_name, last_name, island, job_title) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.island = island;
  this.office_location = company_address_book.find(({ name }) => name === this.island);
  this.job_title = job_title;
  this.username = this.first_name + "." + this.last_name;

  this.FN_email = function() {
    return this.first_name + "@" + this.office_location.email_suffix + ".com";
  };

  this.FLN_email = function() {
    return this.first_name + "." + this.last_name + "@" + this.office_location.email_suffix + ".com";
  };
}

