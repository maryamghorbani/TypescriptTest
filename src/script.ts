let sum : ( x : number , y? : number , ... numbers : number[]) => number = ( x : number , y? : number , ... numbers : number[] ) => {
    if (y) return x + y;
    return x;
}
console.log(sum(2  ))