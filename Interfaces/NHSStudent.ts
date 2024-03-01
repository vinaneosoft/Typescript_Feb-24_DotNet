import { StudentIntf } from "./StudentIntf";

export class NHSStudent implements StudentIntf{
    studentName: string;
   xyz:string
    studentId: string;
    showStudentDetails():void{
        // u can implement in way u want
        console.log("in NHS");
        console.log("NHS Student id :"+this.studentId);
        console.log(`NHS Student name  : ${this.studentName}`);
    }
}