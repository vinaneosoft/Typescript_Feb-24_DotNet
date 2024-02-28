var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.prototype.deposit = function (deptAmt) {
        console.log("in method.................");
        console.log(this);
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
var customer1 = new Customer();
customer1.custId = 6666;
customer1.custName = "Rupali";
customer1.custContact = 9090909090;
var bankAccount1 = new BankAccount();
bankAccount1.accountNumber = 898989898;
bankAccount1.accountType = "salary";
bankAccount1.accountBalance = 2000;
bankAccount1.customer = customer1; // has a relation ship
// who is the user of bankAccount1
// account 898989898 is of 6666,Rupali with contact 9090909090
console.log("account " + bankAccount1.accountNumber + " is of" + bankAccount1.customer);
console.log("account " + bankAccount1.accountNumber + " is of ", bankAccount1.customer);
console.log("account " + bankAccount1.accountNumber + " is of " + bankAccount1.customer.custId + ", " + bankAccount1.customer.custName + " with contact " + bankAccount1.customer.custContact);
