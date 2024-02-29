class A{
    a:number;
    test1(){
        console.log("IN A");
    }
    amethod(){
        console.log("in another A method");
        
    }
}
class B extends A{
    b:number;
    test1(){
        console.log("IN B");
        super.test1();
    }
    bmethod(){

    }

}

class C extends B{
    c:number;
    test1(){
        super.test1(); // call to B's test1();
        super.amethod(); // call to A's 
    }
}

new C().test1();