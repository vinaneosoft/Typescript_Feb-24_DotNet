import { StudentIntf } from "./StudentIntf";

export class NHPStudent implements StudentIntf{
 
    studentId:number;

    showStudentDetails(): void {
     // u can implement in way u want
     console.log("in NHP");
     
    }
}