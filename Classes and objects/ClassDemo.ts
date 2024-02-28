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
    accountType:string

    deposit(deptAmt:number):number{
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

