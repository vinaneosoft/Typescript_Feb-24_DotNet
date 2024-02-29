var BankAccount = /** @class */ (function () {
    function BankAccount() {
        // body of constr
        console.log("in constructor....");
        this.accountBalance = 0;
        this.accountNumber = 0;
        this.accountType = 'savings';
        this.customerId = 0;
        this.customerName = "ABC";
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
var account1 = new BankAccount(); // tsc calling default contr no-paramter
var account2 = new BankAccount();
var account3 = new BankAccount();
console.log(account1);
console.log(account2);
console.log(account3);
account1.accountNumber = 789066;
account2.accountNumber = 676767667;
account3.accountNumber = 45454545;
console.log(account1);
console.log(account2);
console.log(account3);
console.log(account3.accountType);
console.log(account3.accountType = "current");
