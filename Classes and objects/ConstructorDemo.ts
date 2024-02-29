class BankAccount{
    accountNumber:number;
    customerId:number;
    customerName:string;
    accountBalance: number;
    accountType:string
    constructor(){
        // body of constr
        console.log("in constructor....");   
        this.accountBalance=0;
        this.accountNumber=0;
        this.accountType='savings';
        this.customerId=0;
        this.customerName="ABC";
    }
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
let account1=new BankAccount(); // tsc calling default contr no-paramter
let account2=new BankAccount(); 
let account3=new BankAccount();
console.log(account1);console.log(account2);console.log(account3);
account1.accountNumber=789066;
account2.accountNumber=676767667;
account3.accountNumber=45454545;
console.log(account1);console.log(account2);console.log(account3);
console.log(account3.accountType);
console.log(account3.accountType="current");