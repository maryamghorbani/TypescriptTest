"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sum = function (x, y) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    if (y)
        return x + y;
    return x;
};
console.log(sum(2));
var person = {
    fullname: 'maryam',
    age: function (num) {
        return "age : " + num;
    }
};
var person2 = {
    fullname: 'ali',
    age: function (num) {
        return "age : " + num;
    }
};
var Car = /** @class */ (function () {
    function Car(model) {
        this.year = 1000;
        this.model = model;
        this.color = 'red';
    }
    Car.prototype.seyHello = function () {
        console.log('Hello');
    };
    return Car;
}());
var Irankhodro = /** @class */ (function (_super) {
    __extends(Irankhodro, _super);
    function Irankhodro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Irankhodro.prototype.run = function () {
        console.log(this.color);
    };
    return Irankhodro;
}(Car));
var car1 = new Car('2000');
console.log(car1.year);
