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
    function Employee(employeeId, employeeName, basicSalary) {
        if (employeeId === void 0) { employeeId = 0; }
        if (employeeName === void 0) { employeeName = "AAA"; }
        if (basicSalary === void 0) { basicSalary = 0; }
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.basicSalary = basicSalary;
    }
    // bs+ta+da+hra ta=5% of bs, da=10% bs, hra= 15% of bs
    // we can create seperate functions for ta da hra
    Employee.prototype.getGrossSalary = function () {
        return this.basicSalary + (0.05 * this.basicSalary) + (0.1 * this.basicSalary) + (0.15 * this.basicSalary);
    };
    return Employee;
}());
var employee1 = new Employee(678, "Poonam Patil", 67000);
console.log(employee1);
console.log(employee1.getGrossSalary());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(traningTechnologies, trainingExperience) {
        if (traningTechnologies === void 0) { traningTechnologies = []; }
        if (trainingExperience === void 0) { trainingExperience = 0; }
        var _this = _super.call(this) || this;
        _this.traningTechnologies = traningTechnologies;
        _this.trainingExperience = trainingExperience;
        return _this;
    }
    ;
    return Trainer;
}(Employee));
