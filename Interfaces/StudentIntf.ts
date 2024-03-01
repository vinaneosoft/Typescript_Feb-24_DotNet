export interface StudentIntf{
    studentId:string;
    studentName:string;
    rollNumber?:number;
    showStudentDetails():void; // method signature
    addMarks?():number;
}