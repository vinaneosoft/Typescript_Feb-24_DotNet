class Employee{
    constructor(
        public employeeId=0,
        public employeeName="AAA",
        public basicSalary=0
    ){}
    // bs+ta+da+hra ta=5% of bs, da=10% bs, hra= 15% of bs
    // we can create seperate functions for ta da hra
    getGrossSalary(){
        return this.basicSalary+(0.05*this.basicSalary)+(0.1*this.basicSalary)+(0.15* this.basicSalary)
    }
}

let employee1=new Employee(678,"Poonam Patil",67000);
console.log(employee1);
console.log(employee1.getGrossSalary());

class Trainer extends Employee{
    constructor(public traningTechnologies=[],public trainingExperience=0){
        super();
    };
}

