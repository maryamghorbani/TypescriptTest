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
    private model : string
    public year : number = 1000
    protected color : string
    constructor(model : string) {
        this.model = model
        this.color = 'red'
    }
    private seyHello() {
        console.log('Hello')
    }
}

class Irankhodro extends Car {
    run (){
        console.log(this.color)
    }
}


let car1 = new Car('2000')
console.log(car1.year)
