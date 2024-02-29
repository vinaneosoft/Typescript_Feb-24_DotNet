class BankAccount{
    /** in this way, compulsory put scope to instance variables (public, protected, private ) */
    constructor(
    public customerName="AAA", 
    public accountBalance =0, 
    public accountType="savings",
    public accountNumber=0, 
    public customerId=0)
    {}
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
let account1=new BankAccount("Parvin",2000,'salary',9090909090,1111); // call p constr
let account2=new BankAccount("Rupali",1000,'current',7878787878); 
let account3=new BankAccount("Kiran",3000, 'salary');
let account4=new BankAccount("Pooja",1000);
let account5=new BankAccount();
let account6=new BankAccount("Vina");
//let account7=new BankAccount("current");
console.log(account1);console.log(account2);console.log(account3);
console.log(account4);console.log(account5);console.log(account6);
//console.log(account7);

