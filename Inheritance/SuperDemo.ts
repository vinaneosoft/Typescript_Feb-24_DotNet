class Employee{
    public employeeId=0;
    employeeName="AAA";
    basicSalary=0;
    empExperience=0;
   getGrossSalary():number{
    console.log("in superclass method");
       return this.basicSalary+(0.05*this.basicSalary)+(0.1*this.basicSalary)+(0.15* this.basicSalary)
   }
   getDetails(){

   }
}
class Trainer extends Employee{
    trainingTechnologies:string[]=[];
    trainingExperience=0;
    monthlyHrs=0;
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

let employee1=new Employee();
console.log(employee1);
employee1.employeeId=5678;
employee1.employeeName="Poonam Patil"
employee1.basicSalary=56000;
console.log(employee1);
console.log("Employee Gross Salary"+employee1.getGrossSalary());

let trainer1=new Trainer();
trainer1.trainingTechnologies=['HTML','CSS','JS','Bootstrap','JAVA','SASS'];
trainer1.employeeId=1111;
trainer1.employeeName="Priya Khande";
trainer1.basicSalary=56000;
trainer1.empExperience=2;
trainer1.monthlyHrs=30;
trainer1.trainingExperience=10;
console.log(trainer1);
console.log("Trainer Gross Salary:"+trainer1.getGrossSalary());  // inherited overriding method
//console.log("Trainer Gross Salary:"+trainer1.getTrainerGrossSalary()); // with extra Pay
console.log(trainer1.getTotalExp());


