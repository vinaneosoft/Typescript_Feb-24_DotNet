var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("Animals Eat");
    };
    Animal.prototype.getFood = function () {
        return new Food();
    };
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.sleep = function () {
    };
    Tiger.prototype.eat = function () {
        console.log("Tiger Eat other animals");
        return 0;
    };
    Tiger.prototype.getFood = function () {
        return new NonvegFood();
    };
    return Tiger;
}(Animal));
var Goat = /** @class */ (function (_super) {
    __extends(Goat, _super);
    function Goat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Goat.prototype.eat = function () {
        console.log("Goat Eat grass and other veg");
    };
    Goat.prototype.getFood = function () {
        return new VegFood();
    };
    return Goat;
}(Animal));
var Food = /** @class */ (function () {
    function Food() {
    }
    return Food;
}());
var NonvegFood = /** @class */ (function (_super) {
    __extends(NonvegFood, _super);
    function NonvegFood() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NonvegFood;
}(Food));
var VegFood = /** @class */ (function (_super) {
    __extends(VegFood, _super);
    function VegFood() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VegFood;
}(Food));
var animal = new Animal();
var tiger = new Tiger();
var goat = new Goat();
animal.eat();
tiger.eat(); // run time polymorphism
goat.eat(); //run time polymorphism
// rules of overriding : name and signature must be same
// subclass o method scope must be same or increased  but not reduced
// if return type is primitive : then must be same in subclass o method
// if return type is void : then allowed to change in subclass o method
// if super class method returing object then in subclass o method, covariant is allowed
var goat2;
goat2 = new Goat();
// UPCASTING
var animal2;
animal2 = new Tiger();
animal2.eat(); // inherited overriding method
animal2 = new Goat();
animal2.eat(); // inherited overriding method
callEat(goat);
callEat(tiger);
function callEat(ani) {
    console.log("-----in function");
    if (ani instanceof Tiger)
        console.log("Tiger came here");
    else if (ani instanceof Goat)
        console.log("Goat came here");
    ani.eat(); // common method is not getting called
    console.log("-----end function");
}
