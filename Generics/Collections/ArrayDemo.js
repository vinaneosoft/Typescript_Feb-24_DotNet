var ageArray1 = new Array();
ageArray1.push(23, 56, 12, 34);
var cityArray = new Array();
cityArray.push("mumbai", "pune");
var salaryArray = new Array();
var salary1 = new Number(34000);
var salary2 = new Number(34000);
salaryArray.push(salary1, salary2, 78000);
for (var _i = 0, salaryArray_1 = salaryArray; _i < salaryArray_1.length; _i++) {
    var salary = salaryArray_1[_i];
    console.log(salary);
    console.log(typeof salary);
}
