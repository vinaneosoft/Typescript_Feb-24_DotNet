import { NHPStudent } from "./NHPStudent";
import { NHSStudent } from "./NHSStudent";
import { StudentIntf } from "./StudentIntf";

let student:StudentIntf;

student=new NHPStudent();
student.studentId="NHP111";
student.studentName="Kalpesh"
student.showStudentDetails();
student=new NHSStudent();
student.studentId="NHS111";
student.studentName="Kalpana"
student.showStudentDetails();
