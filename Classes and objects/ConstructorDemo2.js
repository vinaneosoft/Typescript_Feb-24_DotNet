var BankAccount = /** @class */ (function () {
    function BankAccount(accNum, customerId, custName, balance, accType) {
        console.log("in p-constructor....");
        this.accountBalance = balance;
        this.accountNumber = accNum;
        this.accountType = accType;
        this.customerId = customerId;
        this.customerName = custName;
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
var account1 = new BankAccount(9090909090, 1111, "Parvin", 2000, 'salary'); // call p constr
var account2 = new BankAccount(7878787878, 2222, "Rupali", 1000, 'salary');
var account3 = new BankAccount(4545454545, 1010, "Kiran", 2000, "savings");
console.log(account1);
console.log(account2);
console.log(account3);
