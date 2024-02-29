class BankAccount{
    accountNumber:number;
    customerId:number;
    public customerName:string;
    accountBalance: number;
    accountType:string
    constructor(accNum:number, customerId:number, custName:string, balance:number, accType:string){
        console.log("in p-constructor....");   
        this.accountBalance=balance;
        this.accountNumber=accNum;
        this.accountType=accType;
        this.customerId=customerId;
        this.customerName=custName;
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
let account1=new BankAccount(9090909090,1111,"Parvin",2000,'salary'); // call p constr
let account2=new BankAccount(7878787878,2222,"Rupali",1000,'salary'); 
let account3=new BankAccount(4545454545,1010,"Kiran",2000,"savings");
console.log(account1);console.log(account2);console.log(account3);