import { StudentIntf } from "./StudentIntf";

export class NHSStudent implements StudentIntf{
    studId:number;

    showStudentDetails():void{
        // u can implement in way u want
        console.log("in NHS");
        
    }
}