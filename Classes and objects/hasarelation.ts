class Address{
// variables
pincode:number;
// methods
}

class Customer{
    custId:number;
    custName:string;
    custContact:number;
    custAddress : Address;

    // methods
}
class BankAccount{
    accountNumber:number;
    accountBalance: number;
    accountType:string;  
    customer:Customer;   // declaration of has a relation ship
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

let address=new Address();
address.pincode=678789;

let customer1=new Customer();
customer1.custId=6666;
customer1.custName="Rupali";
customer1.custContact=9090909090;
customer1.custAddress=address;

let bankAccount1=new BankAccount();
bankAccount1.accountNumber=898989898;
bankAccount1.accountType="salary";
bankAccount1.accountBalance=2000;
bankAccount1.customer=customer1; // has a relation ship
// who is the user of bankAccount1
// account 898989898 is of 6666,Rupali with contact 9090909090

console.log("account "+bankAccount1.accountNumber+" is of"+bankAccount1.customer);
console.log("account "+bankAccount1.accountNumber+" is of ", bankAccount1.customer);
console.log("account "+bankAccount1.accountNumber+" is of "+bankAccount1.customer.custId+", "+bankAccount1.customer.custName+" with contact "+bankAccount1.customer.custContact);
// implement has relation ship between Address and Customer
// create mutiple customer objects with address
// create multiple bank accounts with customer
console.log(bankAccount1.customer.custAddress.pincode);

console.log("account "+bankAccount1.accountNumber
+" is of "+bankAccount1.customer.custId
+", "
+bankAccount1.customer.custName
+" with contact "+bankAccount1.customer.custContact);

console.log("account ",bankAccount1.accountNumber
," is of ",bankAccount1.customer.custId
,", "
,bankAccount1.customer.custName
," with contact ",bankAccount1.customer.custContact);

// EL  ${}

console.log(`account ${bankAccount1.accountNumber} 
            is of ${bankAccount1.customer.custId}, ${bankAccount1.customer.custName}
            with contact ${bankAccount1.customer.custContact}
             `);
