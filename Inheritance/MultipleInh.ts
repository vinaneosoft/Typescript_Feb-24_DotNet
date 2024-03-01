class Father{
    dream(){
        return "Doctor";
    }
}

class Mother{
    dream(){
        return "Engineer";
    }
}

class Child extends Father, Mother{

     achieveDream(){
        this.dream();
    }
}

class Child1 extends Father{

}

class Child2 extends Mother{
    
}