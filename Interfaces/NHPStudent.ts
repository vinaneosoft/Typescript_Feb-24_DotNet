import { StudentIntf } from "./StudentIntf";

export class NHPStudent implements StudentIntf{
    studentName: string;
    studentId:string;
    rollNumber:number;
    showStudentDetails(): void {
        console.log("NHP Student id is :"+this.studentId);
        console.log(`NHP Student name is : ${this.studentName}`);
     
    }
}