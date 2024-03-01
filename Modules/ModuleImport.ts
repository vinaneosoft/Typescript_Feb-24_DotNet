// we will import and use the Modules

import { companyName,Student } from "./MyModules/module1";
import * as neo from "./MyModules/module3";
import {companyName as cname, Student as Stud, showCompany} from './MyModules/module2';
/** for importing default exported properties from module do not use {} */
import StudMarks from './MyModules/module2';
import changeDepartment from './MyModules/module3';
console.log(companyName); //module1
console.log(cname);  // module2

let student=new Student(); // from module1
let student2=new Stud();  // module2
//student.studId=5677;// it is protected

let neostudent=new neo.NeoStudent();
neostudent.empId=999;
console.log(neostudent.empId);

console.log(neo.departmentname);
showCompany();

let marks=new StudMarks();
marks.marksArray=[45,67,89,67];

changeDepartment();