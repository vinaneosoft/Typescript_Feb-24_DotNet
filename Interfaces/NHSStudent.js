"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NHSStudent = void 0;
var NHSStudent = /** @class */ (function () {
    function NHSStudent() {
    }
    NHSStudent.prototype.showStudentDetails = function () {
        // u can implement in way u want
        console.log("in NHS");
        console.log("NHS Student id :" + this.studentId);
        console.log("NHS Student name  : ".concat(this.studentName));
    };
    return NHSStudent;
}());
exports.NHSStudent = NHSStudent;
