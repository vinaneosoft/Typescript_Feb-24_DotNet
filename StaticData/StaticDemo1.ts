
// assume all accounts getting created in same bank

class SCBankAccount{
    // instance var camel case : noun
    accountNumber:number;
    customerId:number;
    customerName:string;
    accountBalance: number;
    accountType:string;
    static bankName:string;
    constructor(){
        console.log("IN CONSTRUCTOR"); // while creating objects
        console.log("used to initialize the object");
    }
    static{
        console.log("IN STATIC BLOCK"); // class loading
        console.log("used to initialize the static data");
       SCBankAccount.bankName="SC BANK" // initial value of static data
    }
     // camel case : verbs
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
    static getBankName():string{
        return SCBankAccount.bankName;
       //return this.bankName;
    }
}
console.log(SCBankAccount.bankName);
let bankAccount1=new SCBankAccount(); // constructor call
let bankAccount2=new SCBankAccount();
SCBankAccount.bankName="Standard Chartered"; // state change
console.log(SCBankAccount.bankName);
// is bankName constant? no
