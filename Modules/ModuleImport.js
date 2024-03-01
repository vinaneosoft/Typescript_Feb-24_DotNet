"use strict";
// we will import and use the Modules
Object.defineProperty(exports, "__esModule", { value: true });
var module1_1 = require("./MyModules/module1");
var neo = require("./MyModules/module3");
var module2_1 = require("./MyModules/module2");
console.log(module1_1.companyName); //module1
console.log(module2_1.companyName); // module2
var student = new module1_1.Student(); // from module1
var student2 = new module2_1.Student(); // module2
//student.studId=5677;// it is protected
var neostudent = new neo.NeoStudent();
neostudent.empId = 999;
console.log(neostudent.empId);
console.log(neo.departmentname);
