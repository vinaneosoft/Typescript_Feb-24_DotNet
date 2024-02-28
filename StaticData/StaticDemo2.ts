
// Count how many accounts getting created
class SCBankAccount{
    accountNumber:number;
    customerId:number;
    customerName:string;
    accountBalance: number;
    accountType:string;
    static bankName:string;
    static count:number;
    static{
        console.log("STATIC BLOCK called only 1nce");
       this.count=0;
    }
    constructor(){
        console.log("IN CONSTRUCTOR called everytime when object gets created"); 
        SCBankAccount.count++;
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
    static getBankName():string{
        return SCBankAccount.bankName;
    }
}
console.log(SCBankAccount.bankName);
console.log("count is :"+SCBankAccount.count);

let bankAccount1=new SCBankAccount(); // constructor call
let bankAccount2=new SCBankAccount();
let bankAccount3=new SCBankAccount();

console.log("count is :"+SCBankAccount.count);
SCBankAccount.bankName="Standard Chartered"; // state change
console.log(SCBankAccount.bankName);
// is bankName constant? no
