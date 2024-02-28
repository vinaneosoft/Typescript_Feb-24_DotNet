// captial case : 1st letter capital
var accnumber;
// blueprint
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.prototype.deposit = function (deptAmt) {
        this.accountBalance = this.accountBalance + deptAmt;
        return this.accountBalance;
    };
    BankAccount.prototype.withdraw = function (withAmt) {
        this.accountBalance = this.accountBalance - withAmt;
        return this.accountBalance;
    };
    BankAccount.prototype.checkBalance = function () {
        return this.accountBalance;
    };
    return BankAccount;
}());
// create (new ) , initialize:state initial value (constructor), behavior:state change, return state (calling methods)
var account1;
account1 = new BankAccount(); // calling default contructor provided by tsc
// 1. created, 2. initialized: undefined values 
// constructors called implicitly
console.log(account1); // empty
console.log(account1.accountNumber);
console.log(account1.accountType);
console.log(account1.accountBalance);
console.log(account1.accountNumber + 1000);
