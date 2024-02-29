class Employee{
    public employeeId=0;
    employeeName="AAA";
    basicSalary=0;
    empExperience=0;
   // bs+ta+da+hra ta=5% of bs, da=10% bs, hra= 15% of bs
   // we can create seperate functions for ta da hra
   getGrossSalary():number{
    console.log("in superclass method");
       return this.basicSalary+(0.05*this.basicSalary)+(0.1*this.basicSalary)+(0.15* this.basicSalary)
   }
}
let employee1=new Employee();
console.log(employee1);
employee1.employeeId=5678;
employee1.employeeName="Poonam Patil"
employee1.basicSalary=56000;
console.log(employee1);
console.log("Employee Gross Salary"+employee1.getGrossSalary());
// protected members of super class are accessible only inside body of itself and subclasses
class Trainer extends Employee{
    trainingTechnologies:string[]=[];
    trainingExperience=0;
    monthlyHrs=0;
    getTotalExp(){
       return this.empExperience+this.trainingExperience;
    }
    // assume per hr extra pay = 1000
    getExtraPay(){
        return this.monthlyHrs*1000;
    }
    /* getTrainerGrossSalary(){
        return this.getGrossSalary()+this.getExtraPay();
    } */
    // trainer does not want super version of getGrossSalary() method
    // need to override the method : name and signature same , but implement changed
    // inherited overriden property
    getGrossSalary():number{
        console.log("in subclass overriding method");
        
        return this.basicSalary+(0.05*this.basicSalary)+(0.1*this.basicSalary)+(0.15* this.basicSalary)+this.getExtraPay();
    }
}
let trainer1=new Trainer();
trainer1.trainingTechnologies=['HTML','CSS','JS','Bootstrap','JAVA','SASS'];
trainer1.employeeId=1111;
trainer1.employeeName="Priya Khande";
trainer1.basicSalary=56000;
trainer1.empExperience=2;
trainer1.monthlyHrs=30;
trainer1.trainingExperience=10;
console.log(trainer1);
console.log("Trainer Gross Salary:"+trainer1.getGrossSalary());  // inherited overriden method
//console.log("Trainer Gross Salary:"+trainer1.getTrainerGrossSalary()); // with extra Pay
console.log(trainer1.getTotalExp());

