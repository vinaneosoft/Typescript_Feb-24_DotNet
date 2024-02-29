class Circle{
    static readonly pie=3.142; // single shared constant 
    constructor(public readonly radius=0) // multiple copies: constant
    {
    }
}

let circle=new Circle(45);
console.log(Circle.pie);
//Circle.pie=3.14;
console.log(circle.radius);
//circle.radius=56;

let circle2=new Circle(40);
console.log(Circle.pie);
console.log(circle2.radius);

//circle2.radius=23;

let circle3=new Circle();
console.log(Circle.pie);
console.log(circle3.radius);
//circle3.radius=55;


