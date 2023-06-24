//Hoisting is phenomenon by which we can access variables and function before initializtaion
console.log(a)
var a;

//Normal Function hositing
console.log("Function Hoisting", k()); // Hello, world
function k() {
    return "Hello, world!";
}

//Arrow function hoisting
//console.log(sum(10,20)) // cannot access sum
const sum = (a, b) => {
    return a + b;
};


// var can be hoisted but let and const are also hoisted but are in different memory phase (TDZ)
let c = 10;
console.log(c)

//-----------------------------------var,let,const------------------------------

//var - global or function scoped
//- redeclare and can be re-initialized

var a = 10;
var a = 67

//let - function or block scoped
//- cannot redeclare and can be re-initialized
let d = 20;
// let a = 30// not allowed
d = 40

//const - function or block scoped
    //- cannot redeclare and cannot be re-initialized
