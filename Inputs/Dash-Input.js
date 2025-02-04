import { company_address_book, job_titles, New_employee } from '../Test-modules/Dash-module.js'


const Employee_list = [
  ["Matt","Strange","Oahu",job_titles.Assistant_Acountant,],
  ["Jake","Frog","Maui",job_titles.Asbestos_Manger,],
  ["Smith","Hort","Lanai",job_titles.Recon_Journeyman_1,],
  ["Frank","Jared","Kauai",job_titles.Mitigation_Lead_1,]

];

//Employee_list.forEach((employee) => console.log(employee[0],employee[1],employee[2],employee[3]));

export const new_hires = Employee_list.map((employee) => 
  
  new New_employee(employee[0],employee[1],employee[2],employee[3]));

//const new_hires = Employee_list.map((employee) => New_employee(employee[0],employee[1],employee[2],employee[3]));

//new_hires.forEach((employee) => console.log(employee[0],employee[1],employee[2],employee[3]));



//console.log(Object.keys(new_hires));

//const newHire = new New_employee(Employee_list[0][0],Employee_list[0][1],Employee_list[0][2],Employee_list[0][3]);

//new_hires.forEach((employee) => console.log(JSON.stringify(employee)));

//let object_print = JSON.stringify(new_hires[0]);

//new_hires[0].FN_email()



//console.log(object_print);





