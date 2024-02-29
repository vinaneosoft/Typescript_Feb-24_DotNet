var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(employeeId, employeeName, basicSalary, empExperience) {
        if (employeeId === void 0) { employeeId = 0; }
        if (employeeName === void 0) { employeeName = "AAA"; }
        if (basicSalary === void 0) { basicSalary = 0; }
        if (empExperience === void 0) { empExperience = 0; }
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.basicSalary = basicSalary;
        this.empExperience = empExperience;
        console.log("in EMP contr");
    }
    Employee.prototype.getGrossSalary = function () {
        console.log("in superclass method");
        return this.basicSalary + (0.05 * this.basicSalary) + (0.1 * this.basicSalary) + (0.15 * this.basicSalary);
    };
    Employee.prototype.getDetails = function () {
    };
    return Employee;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(empId, empName, empSalary, exp, trainingTechnologies, trainingExperience, monthlyHrs) {
        if (empId === void 0) { empId = 0; }
        if (empName === void 0) { empName = "AAA"; }
        if (empSalary === void 0) { empSalary = 0; }
        if (exp === void 0) { exp = 0; }
        if (trainingTechnologies === void 0) { trainingTechnologies = []; }
        if (trainingExperience === void 0) { trainingExperience = 0; }
        if (monthlyHrs === void 0) { monthlyHrs = 0; }
        var _this = _super.call(this, empId, empName, empSalary, exp) || this; // calling super class constructor 
        _this.trainingTechnologies = trainingTechnologies;
        _this.trainingExperience = trainingExperience;
        _this.monthlyHrs = monthlyHrs;
        console.log("in Trainer contr");
        return _this;
    }
    Trainer.prototype.getTotalExp = function () {
        return this.empExperience + this.trainingExperience;
    };
    Trainer.prototype.getExtraPay = function () {
        return this.monthlyHrs * 1000;
    };
    Trainer.prototype.getGrossSalary = function () {
        console.log("in subclass overriding method");
        // with super keyword we can call super version of a method which is overriden in subclass
        return _super.prototype.getGrossSalary.call(this) + this.getExtraPay();
    };
    return Trainer;
}(Employee));
var employee1 = new Employee(5678, "Poonam Patil", 56000, 2);
console.log(employee1);
console.log("Employee Gross Salary" + employee1.getGrossSalary());
// calling sequence of constru in inh : from superclass cntr to sub contr
var trainer1 = new Trainer(111, "Komal", 45000, 2, ['HTML', 'CSS', 'JS', 'Bootstrap', 'JAVA', 'SASS'], 10, 30);
console.log(trainer1);
var trainer2 = new Trainer(222, "Pravin", 34000, 2, ['PYTHON', 'CSS', 'JS', 'Bootstrap', 'JAVA', 'SASS'], 12, 20);
console.log(trainer2);
console.log("Trainer Gross Salary:" + trainer1.getGrossSalary()); // inherited overriding method
//console.log("Trainer Gross Salary:"+trainer1.getTrainerGrossSalary()); // with extra Pay
console.log(trainer1.getTotalExp());
