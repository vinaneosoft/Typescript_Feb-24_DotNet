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
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.eat = function () {
        console.log("Tiger Eat other animals");
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
    return Goat;
}(Animal));
var animal = new Animal();
var tiger = new Tiger();
var goat = new Goat();
animal.eat();
tiger.eat(); // run time polymorphism
goat.eat(); //run time polymorphism
