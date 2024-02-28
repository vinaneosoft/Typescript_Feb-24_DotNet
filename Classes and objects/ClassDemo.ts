// captial case : 1st letter capital

let accnumber:number;
// blueprint
class BankAccount{
    // variables and functions
    // defining states and behaviour
    // instance variables, instance methods
    accountNumber:number;
    customerId:number;
    customerName:string;
    accountBalance: number;
    accountType:string  // public
    deposit(deptAmt:number):number{
        console.log("in method.................");
        console.log(this);
        this.accountBalance=this.accountBalance+deptAmt; 
        return this.accountBalance;
    }
    withdraw(withAmt:number):number{
        this.accountBalance=this.accountBalance-withAmt; 
        return this.accountBalance;
    }
    checkBalance():number{
        return this.accountBalance;
    }
}
// create (new ) , initialize:state initial value (constructor), behavior:state change, return state (calling methods)
let account1:BankAccount;
account1=new BankAccount(); // calling default contructor provided by tsc
// 1. created, 2. initialized: undefined values 
// constructors called implicitly
console.log(account1); // empty
console.log(account1.accountNumber);
console.log(account1.accountType);
console.log(account1.accountBalance);

account1.accountNumber=898989898;
account1.accountBalance=1000;
account1.accountType="salary";
account1.customerId=9090;
account1.customerName="hari"
console.log(account1);

let account2=new BankAccount();  // object : instance of class
account2.accountBalance=6000;  // instance variable
account2.accountType="savings";
account2.accountBalance=1000;
account2.customerId=9999;
account2.customerName="poonam"
account2.accountNumber=12121212;

console.log("after deposit in account1:  "+account1.deposit(56000));  // instance methods
console.log("after deposit in account2:  "+account2.deposit(45000));

console.log(account1==account2);
console.log(account1===account2);

let accountref=account1;
// it will create new account? or it will refer existing account
// it will refer to existing account
console.log(account1==accountref);
console.log(account1===accountref);

// please implement the same for class student 