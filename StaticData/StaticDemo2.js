// Count how many accounts getting created
var SCBankAccount = /** @class */ (function () {
    function SCBankAccount() {
        console.log("IN CONSTRUCTOR");
        _a.count++;
    }
    SCBankAccount.prototype.deposit = function (deptAmt) {
        this.accountBalance = this.accountBalance + deptAmt;
        return this.accountBalance;
    };
    SCBankAccount.prototype.withdraw = function (withAmt) {
        this.accountBalance = this.accountBalance - withAmt;
        return this.accountBalance;
    };
    SCBankAccount.prototype.checkBalance = function () {
        return this.accountBalance;
    };
    SCBankAccount.getBankName = function () {
        return _a.bankName;
    };
    var _a;
    _a = SCBankAccount;
    SCBankAccount.count = 0;
    (function () {
        _a.count = 0;
    })();
    return SCBankAccount;
}());
console.log(SCBankAccount.bankName);
console.log("count is :" + SCBankAccount.count);
var bankAccount1 = new SCBankAccount(); // constructor call
var bankAccount2 = new SCBankAccount();
var bankAccount3 = new SCBankAccount();
console.log("count is :" + SCBankAccount.count);
SCBankAccount.bankName = "Standard Chartered"; // state change
console.log(SCBankAccount.bankName);
// is bankName constant? no
