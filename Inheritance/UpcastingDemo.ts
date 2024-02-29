class Animal{
    animalType:string
     eat():void{
        console.log("Animals Eat");
    }
    getFood():Food{
        return new Food();
    }
}
class Tiger extends Animal{
     tigerName:string
     eat():number{
        console.log("Tiger Eat other animals");
        return 0;
    }
     sleep(){
    }
    getFood(): NonvegFood {
        return new NonvegFood();
    }
}
class Goat extends Animal{
    goatHome:string;
    eat():void{
        console.log("Goat Eat grass and other veg"); 
    }
    getFood(): VegFood {
        return new VegFood();
    }
}

class Food{
}
class NonvegFood extends Food{
}
class VegFood extends Food{
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
let goat2:Goat;
goat2=new Goat();
let animal2:Animal;
animal2=new Tiger();
animal2.eat(); // inherited overriding method
animal2=new Goat();
animal2.eat();  // inherited overriding method
callEat(goat);
callEat(tiger);
function callEat(ani:Animal){
    console.log(typeof ani); 
    if(ani instanceof Tiger)
        console.log("Tiger came here");
    else if(ani instanceof Goat)
        console.log("Goat came here");
    ani.eat();
}

