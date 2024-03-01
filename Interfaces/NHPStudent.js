"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NHPStudent = void 0;
var NHPStudent = /** @class */ (function () {
    function NHPStudent() {
    }
    NHPStudent.prototype.showStudentDetails = function () {
        console.log("NHP Student id is :" + this.studentId);
        console.log("NHP Student name is : ".concat(this.studentName));
    };
    return NHPStudent;
}());
exports.NHPStudent = NHPStudent;
