import { NHPStudent } from "./NHPStudent";
import { NHSStudent } from "./NHSStudent";
import { StudentIntf } from "./StudentIntf";

let student:StudentIntf;

student=new NHPStudent();
student.showStudentDetails();
student=new NHSStudent();
student.showStudentDetails();