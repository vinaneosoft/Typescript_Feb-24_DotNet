class Animal{
    eat():void{
        console.log("Animals Eat");
    }
}
class Tiger extends Animal{
    eat():void{
        console.log("Tiger Eat other animals");
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