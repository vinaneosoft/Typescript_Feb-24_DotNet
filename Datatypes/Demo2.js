var companyName;
companyName = "Neosoft";
var marriedStatus;
marriedStatus = true;
var salary;
salary = 56000;
salary = "fifty six thousand";
var empName;
empName = "anand";
console.log(typeof empName);
empName = 56788;
console.log(typeof empName);
var age = 45; // number
console.log("type of age:" + (typeof age));
//age="fourty five"
console.log(companyName);
console.log(marriedStatus);
console.log(salary);
console.log(empName);
console.log(age);
/*if u want to test output from converted file (js)  at backend
u can execute it on node*/
/** type assertion */
var cityName; // any
cityName = "Mumbai";
// as type is any intellisense (AI) wont work : soln : type asserion
var cn = cityName;
console.log(cn.length);
console.log(cityName.charAt(0));
