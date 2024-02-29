class Animal{
     eat():void{
        console.log("Animals Eat");
    }

    getEmployee():Employee{
        return new Employee();
    }
}
class Tiger extends Animal{
     eat():number{
        console.log("Tiger Eat other animals");
        return 0;
    }

    private sleep(){

    }

    getEmployee(): Trainer {
        return new Trainer();
    }
}
class Goat extends Animal{
    eat():void{
        console.log("Goat Eat grass and other veg"); 
       
    }
}

let animal=new Animal();
let tiger=new Tiger();
let goat=new Goat();

animal.eat();
tiger.eat(); // run time polymorphism
goat.eat(); //run time polymorphism

// rules of overriding : name and signature must be same
// subclass o method scope must be same or increased  but not reduced
// if return type is primitive : then must be same in subclass o method
// if return type is void : then allowed to change in subclass o method
// if super class method returing object then in subclass o method, covariant is allowed