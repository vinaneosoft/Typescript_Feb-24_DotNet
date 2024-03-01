interface FatherIntf   {
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
class Child1 implements FatherIntf, MotherIntf {
    setHobbies(): void {    
    }
    setGoals(): void {     
    }
    dream(): string {
       return "Lawyer";
    }
    /**Duplicate function implementation not allowed in typescript. */
}

interface A{
    demo1():void;
}
interface B extends A{
    demo2():void;
} 
class ABC implements B{
    demo2(): void {
        throw new Error("Method not implemented.");
    }
    demo1(): void {
        throw new Error("Method not implemented.");
    }
    // 1 or 2
}
interface C{
    demo1():void;
    demo3():void;
}

interface D extends A,C{
    demo4():void;
}
class PQR implements D{
    demo4(): void {
        throw new Error("Method not implemented.");
    }
    demo1(): number {
        throw new Error("Method not implemented.");
    }
    demo3(): void {
        throw new Error("Method not implemented.");
    }

}

