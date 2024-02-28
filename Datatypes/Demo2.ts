let companyName:string;
companyName="Neosoft";


let marriedStatus:boolean
marriedStatus=true;

let salary:any;
salary=56000;
salary="fifty six thousand";

let empName;
empName="anand";
console.log(typeof empName);

empName=56788;
console.log(typeof empName);


let age=45; // number
console.log("type of age:"+(typeof age));

//age="fourty five"

console.log(companyName);
console.log(marriedStatus);
console.log(salary)
console.log(empName);
console.log(age);

/*if u want to test output from converted file (js)  at backend
u can execute it on node*/

/** type assertion */

let cityName; // any

cityName="Mumbai";
// as type is any intellisense (AI) wont work : soln : type asserion
let cn=<string>cityName
console.log(cn.length);
console.log((<string>cityName).charAt(0));
