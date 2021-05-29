type MyFunc = ( x : number , y? : number , ... numbers : number[]) => number;


let sum : MyFunc = ( x : number , y? : number , ... numbers : number[] ) => {
    if (y) return x + y;
    return x;
}
console.log(sum(2  ))



type MyObject = {
    fullname : string,
    age : (num : number) => string
}

let person : MyObject = {
    fullname : 'maryam',
    age : (num : number) => {
        return `age : ${num}`
    }
};

let person2 : MyObject = {
    fullname : 'ali',
    age : (num : number) => {
        return `age : ${num}`
    }
};


class Car {
    model : string
    year : number = 1000
    constructor(model : string) {
        this.model = model
    }
}

let car1 = new Car('405')
console.log(car1.model , car1.year)