class BankAccount{
    accountNumber:number;
    customerId:number;
    public customerName:string;
    accountBalance: number;
    accountType:string
    constructor(custName="AAA", accNum=0, customerId=0,  balance=0, accType="savings"){
        console.log("in p-constructor....");   
        this.accountBalance=balance; 
        this.accountNumber=accNum;
        this.accountType=accType;
        this.customerName=custName;
        this.customerId=customerId;
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
let account1=new BankAccount("Parvin",9090909090,1111,2000,'salary'); // call p constr
let account2=new BankAccount("Rupali",7878787878,2222,1000); 
let account3=new BankAccount("Kiran",4545454545,1010);
let account4=new BankAccount("Pooja",4545454545);
let account5=new BankAccount();
let account6=new BankAccount("Vina");
//let account7=new BankAccount("current");
console.log(account1);console.log(account2);console.log(account3);
console.log(account4);console.log(account5);console.log(account6);
//console.log(account7);

