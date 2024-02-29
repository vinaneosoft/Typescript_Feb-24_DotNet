class Employee{
     public employeeId=0;
     employeeName="AAA";
     basicSalary=0;
     empExperience=0;
    // bs+ta+da+hra ta=5% of bs, da=10% bs, hra= 15% of bs
    // we can create seperate functions for ta da hra
    getGrossSalary(){
        return this.basicSalary+(0.05*this.basicSalary)+(0.1*this.basicSalary)+(0.15* this.basicSalary)
    }
}

let employee1=new Employee();
console.log(employee1);
employee1.employeeId=5678;
employee1.employeeName="Poonam Patil"
employee1.basicSalary=56000;
console.log(employee1);
console.log(employee1.getGrossSalary());
// protected members of super class are accessible only inside body of itself and subclasses
class Trainer extends Employee{
     trainingTechnologies:string[]=[];
     trainingExperience=0;
   
     getTotalExp(){
        return this.empExperience+this.trainingExperience;
     }
     
}

let trainer1=new Trainer();
trainer1.trainingTechnologies=['HTML','CSS','JS','Bootstrap','JAVA','SASS'];
trainer1.employeeId=1111;
trainer1.employeeName="Priya Khande";
trainer1.basicSalary=89000;
trainer1.empExperience=2;
trainer1.trainingExperience=10;
console.log(trainer1);
console.log(trainer1.getGrossSalary());
console.log(trainer1.getTotalExp());

