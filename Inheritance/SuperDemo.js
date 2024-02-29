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
    function Employee() {
        this.employeeId = 0;
        this.employeeName = "AAA";
        this.basicSalary = 0;
        this.empExperience = 0;
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
    function Trainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.trainingTechnologies = [];
        _this.trainingExperience = 0;
        _this.monthlyHrs = 0;
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
var employee1 = new Employee();
console.log(employee1);
employee1.employeeId = 5678;
employee1.employeeName = "Poonam Patil";
employee1.basicSalary = 56000;
console.log(employee1);
console.log("Employee Gross Salary" + employee1.getGrossSalary());
var trainer1 = new Trainer();
trainer1.trainingTechnologies = ['HTML', 'CSS', 'JS', 'Bootstrap', 'JAVA', 'SASS'];
trainer1.employeeId = 1111;
trainer1.employeeName = "Priya Khande";
trainer1.basicSalary = 56000;
trainer1.empExperience = 2;
trainer1.monthlyHrs = 30;
trainer1.trainingExperience = 10;
console.log(trainer1);
console.log("Trainer Gross Salary:" + trainer1.getGrossSalary()); // inherited overriding method
//console.log("Trainer Gross Salary:"+trainer1.getTrainerGrossSalary()); // with extra Pay
console.log(trainer1.getTotalExp());
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test1 = function () {
        console.log("IN A");
    };
    A.prototype.amethod = function () {
        console.log("in another A method");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.test1 = function () {
        console.log("IN B");
        _super.prototype.test1.call(this);
    };
    B.prototype.bmethod = function () {
    };
    return B;
}(A));
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C.prototype.test1 = function () {
        _super.prototype.test1.call(this); // call to B's test1();
        _super.prototype.amethod.call(this); // call to A's 
    };
    return C;
}(B));
new C().test1();
