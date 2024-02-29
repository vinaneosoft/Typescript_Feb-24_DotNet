var Circle = /** @class */ (function () {
    function Circle(radius) {
        if (radius === void 0) { radius = 0; }
        this.radius = radius;
    }
    Circle.pie = 3.142; // single shared constant 
    return Circle;
}());
var circle = new Circle(45);
console.log(Circle.pie);
//Circle.pie=3.14;
console.log(circle.radius);
//circle.radius=56;
var circle2 = new Circle(40);
console.log(Circle.pie);
console.log(circle2.radius);
//circle2.radius=23;
var circle3 = new Circle();
console.log(Circle.pie);
console.log(circle3.radius);
//circle3.radius=55;
