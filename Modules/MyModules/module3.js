"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentname = exports.NeoStudent = void 0;
var module1_1 = require("./module1");
var NeoStudent = /** @class */ (function (_super) {
    __extends(NeoStudent, _super);
    function NeoStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NeoStudent.prototype.test = function () {
        this.studId;
    };
    return NeoStudent;
}(module1_1.Student));
exports.NeoStudent = NeoStudent;
exports.departmentname = "DotNet";
