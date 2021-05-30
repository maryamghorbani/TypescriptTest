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


abstract class Car {
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
    set setColor(theColor : string) {
        this.color = theColor;
    }
    get getColor() {
        return this.color
    }

    abstract bar() : string
    foo() : void {
        console.log(this.bar())
    }
}

class Irankhodro extends Car {
    bar (){
        return 'maryam'
    }
}


let car1 = new Irankhodro('206')
car1.setColor = 'blue'
console.log(car1)
car1.foo()
