class Employee{

    constructor(
        public employeeId=0,
        public employeeName="AAA",
        public basicSalary=0,
        public empExperience=0)
        {
        console.log("in EMP contr");
        }
   getGrossSalary():number{
    console.log("in superclass method");
       return this.basicSalary+(0.05*this.basicSalary)+(0.1*this.basicSalary)+(0.15* this.basicSalary)
   }
   getDetails(){
   }
}
class Trainer extends Employee{
    constructor(
        empId=0,
        empName="AAA",
        empSalary=0,
        exp=0,
        public trainingTechnologies:string[]=[],
        public trainingExperience=0,
        public monthlyHrs=0){
        super(empId,empName,empSalary,exp); // calling super class constructor 
        console.log("in Trainer contr");
    }
    getTotalExp(){
       return this.empExperience+this.trainingExperience;
    }
    getExtraPay(){
        return this.monthlyHrs*1000;
    }
    getGrossSalary():number{
        console.log("in subclass overriding method");
        // with super keyword we can call super version of a method which is overriden in subclass
        return super.getGrossSalary()+this.getExtraPay(); 
    }
}

let employee1=new Employee(5678,"Poonam Patil",56000,2);
console.log(employee1);
console.log("Employee Gross Salary"+employee1.getGrossSalary());
// calling sequence of constru in inh : from superclass cntr to sub contr
let trainer1=new Trainer(111,"Komal",45000,2,['HTML','CSS','JS','Bootstrap','JAVA','SASS'],10,30);
console.log(trainer1);
let trainer2=new Trainer(222,"Pravin",34000,2,['PYTHON','CSS','JS','Bootstrap','JAVA','SASS'],12,20);
console.log(trainer2);
console.log("Trainer Gross Salary:"+trainer1.getGrossSalary());  // inherited overriding method
//console.log("Trainer Gross Salary:"+trainer1.getTrainerGrossSalary()); // with extra Pay
console.log(trainer1.getTotalExp());


