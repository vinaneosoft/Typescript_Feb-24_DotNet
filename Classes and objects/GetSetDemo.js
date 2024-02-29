var BankAccount = /** @class */ (function () {
    /** in this way, compulsory put scope to instance variables (public, protected, private ) */
    function BankAccount(customerName, accountBalance, accountType, accountNumber, customerId) {
        if (customerName === void 0) { customerName = "AAA"; }
        if (accountBalance === void 0) { accountBalance = 0; }
        if (accountType === void 0) { accountType = "savings"; }
        if (accountNumber === void 0) { accountNumber = 0; }
        if (customerId === void 0) { customerId = 0; }
        this.customerName = customerName;
        this.accountBalance = accountBalance;
        this.accountType = accountType;
        this.accountNumber = accountNumber;
        this.customerId = customerId;
    }
    Object.defineProperty(BankAccount.prototype, "custName", {
        get: function () {
            return this.customerName;
        },
        set: function (customerName) {
            this.customerName = customerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "accType", {
        get: function () {
            return this.accountType;
        },
        set: function (accountType) {
            this.accountType = accountType;
        },
        enumerable: false,
        configurable: true
    });
    // implement get set for other variables
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
    BankAccount.prototype.test = function () {
        console.log("this is private method");
    };
    return BankAccount;
}()); // private scope will end here
var account1 = new BankAccount("Parvin", 2000, 'salary', 9090909090, 1111); // call p constr
var account2 = new BankAccount("Rupali", 1000, 'current', 7878787878);
var account3 = new BankAccount("Kiran", 3000, 'salary');
var account4 = new BankAccount("Pooja", 1000);
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
// what is account number of customer 1111 (account1)
//console.log(account1.accountNumber); // instance variables are fully visible
// Kiran account type to change to savings (account3)
account3.accType = "savings"; // set used as property 
console.log(account3.accType); // get used as property
