// assume all accounts getting created in same bank
var SCBankAccount = /** @class */ (function () {
    function SCBankAccount() {
        console.log("IN CONSTRUCTOR"); // while creating objects
        console.log("used to initialize the object");
    }
    // camel case : verbs
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
        return SCBankAccount.bankName;
        //return this.bankName;
    };
    return SCBankAccount;
}());
(function () {
    console.log("IN STATIC BLOCK"); // class loading
    console.log("used to initialize the static data");
    SCBankAccount.bankName = "SC BANK"; // initial value of static data
})();
console.log(SCBankAccount.bankName);
var bankAccount1 = new SCBankAccount(); // constructor call
var bankAccount2 = new SCBankAccount();
SCBankAccount.bankName = "Standard Chartered"; // state change
console.log(SCBankAccount.bankName);
// is bankName constant? no
