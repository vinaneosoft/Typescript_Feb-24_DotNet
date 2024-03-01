import { Student } from "./module1";

export class NeoStudent extends Student{
     empId:number;

    test(){
       console.log("test method");
       this.studId=90;
    }
}

export let departmentname="DotNet";

let changeDepartment=function(){

}

export default changeDepartment;