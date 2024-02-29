class BankAccount{
    /** in this way, compulsory put scope to instance variables (public, protected, private ) */
    constructor(
    private customerName="AAA", 
    private accountBalance =0, 
    private accountType="savings",
    private accountNumber=0, 
    private customerId=0)
    {}

     get custName(){
        return this.customerName;
     }
     set custName(customerName:string){
        this.customerName=customerName;
     }
     get accType(){
        return this.accountType
     }
     set accType(accountType:string){
        this.accountType=accountType;
     }
     // implement get set for other variables
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
    private test(){
        console.log("this is private method");
    }
}// private scope will end here
let account1=new BankAccount("Parvin",2000,'salary',9090909090,1111); // call p constr
let account2=new BankAccount("Rupali",1000,'current',7878787878); 
let account3=new BankAccount("Kiran",3000, 'salary');
let account4=new BankAccount("Pooja",1000);
let account5=new BankAccount();
let account6=new BankAccount("Vina");
console.log(account1);console.log(account2);console.log(account3);
console.log(account4);console.log(account5);console.log(account6);
account3.accType="savings";  // set used as property 
console.log(account3.accType); // get used as property
