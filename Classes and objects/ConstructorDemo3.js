var BankAccount = /** @class */ (function () {
    function BankAccount(custName, accNum, customerId, balance, accType) {
        if (custName === void 0) { custName = "AAA"; }
        if (accNum === void 0) { accNum = 0; }
        if (customerId === void 0) { customerId = 0; }
        if (balance === void 0) { balance = 0; }
        if (accType === void 0) { accType = "savings"; }
        console.log("in p-constructor....");
        this.accountBalance = balance;
        this.accountNumber = accNum;
        this.accountType = accType;
        this.customerName = custName;
        this.customerId = customerId;
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
var account1 = new BankAccount("Parvin", 9090909090, 1111, 2000, 'salary'); // call p constr
var account2 = new BankAccount("Rupali", 7878787878, 2222, 1000);
var account3 = new BankAccount("Kiran", 4545454545, 1010);
var account4 = new BankAccount("Pooja", 4545454545);
var account5 = new BankAccount();
var account6 = new BankAccount("Vina");
//let account7=new BankAccount("current");
console.log(account1);
console.log(account2);
console.log(account3);
console.log(account4);
console.log(account5);
console.log(account6);
//console.log(account7);
