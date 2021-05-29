"use strict";
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
        this.model = model;
    }
    return Car;
}());
var car1 = new Car('405');
console.log(car1.model);
