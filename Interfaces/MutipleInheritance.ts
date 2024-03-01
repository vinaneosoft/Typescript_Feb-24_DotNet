interface FatherIntf{
    dream():string;

    setGoals():void;
}
interface MotherIntf{
    dream():string;
    setHobbies():void;
}
/** multiple interface implementation is suppored but with rules
 * either interfaces must have difft method names with signatures or
 * if method name is same thee must have same method signature
 */
class Child1 implements FatherIntf, MotherIntf{
    setHobbies(): void {
        
    }
    setGoals(): void {
        
    }
    dream(): string {
       return "Lawyer";
    }
    /**Duplicate function implementation not allowed in typescript. */
   
}

class Child2 implements FatherIntf, MotherIntf{
    setGoals(): void {
    }
    setHobbies(): void {
    }
    dream(): string {
       return "Doctor"
    }

}
class Child3 implements FatherIntf, MotherIntf{
    setGoals(): void {
    }
    setHobbies(): void {
    }
    dream(): string {
       return "Engineer"
    }

}