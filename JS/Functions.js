//How this works in normal function Several ways
//1.Implicit Binding - When a function is called as method of object 'this' is bound to that object.
const obj = {
    name: "Raj shah", //If you have not specified name it will refer to global object and o.p will be Hello, undefined
    sayHello: function () {
        console.log("Hello, " + this.name);
    }
};

obj.sayHello()

//2.Implicit Binding
//EB - You can bind sepecific object to this (call,apply,bind)

const nameOfObject = {
    name: "Raj shah"
}
const nameOfObject2 = {
    name: "Rishi shah"
}

function getName(state, country) {
    console.log(this.name + state + country)
}
getName.call(nameOfObject2)
getName.apply(nameOfObject, ['Delhi', 'India'])
const returndFunction = getName.bind(nameOfObject, "Mumbai", "India")
returndFunction()

//Whenever you use call and apply to invoke a function.it will immediately execute with that `this` keyword but if you dont want to execute function immediately and want to create reusable function then in that case you can use bind.
//Call,apply,bind do not create new Functions they are responsible fro invoking function

//3.Constructor Function - When a function is used as constructor it refers to newly created object

function Person(name) {
    this.name = name
}

const person = new Person('Raj  shah')
console.log(person.name)

//4.Arrow Function -  Arrow functions do not have their own this binding. Instead, they inherit the this value from the enclosing scope.

const objectS = {
    name: "Raj shah",
    sayHello: function () {
        const arrowFunction = () => {
            console.log("Hello, " + this.name);
        };
        arrowFunction();
    }
};

objectS.sayHello(); // Output: Hello, Raj shah

//----------------------------------------------MAP vs ForEach ------------------------------------------------------

//Map returns an new array and forEach does not return anything
//forEach will change original array   
const arr = [1, 2, 3, 4, 5]
const mapResult = arr.map((data) => { return data * 2 })

const forResult = arr.forEach((ar, i) => {
    ar[i] = ar + 2
})
console.log(mapResult, forResult, arr)

//-----------------------------------------------Output basd questions-----------------------------------------------
//1
function sum(a, b) {
    console.log(a + b)
}
sum.apply(null, [2, 4])//6

//---------------------------------------------------------------------
//2
function printInfo(city, country) {
    console.log(this.name + " lives in " + city + ", " + country);
}

const persona = {
    name: "John Doe"
};

const printFunc = printInfo.bind(persona, "London");
printFunc("UK");
//John Doe lives in London UK


//---------------------------------------------------------------------
//3
function sayHello() {
    console.log("Hello, " + this.name);
}

const person1 = {
    name: "Alice"
};

const greet = sayHello.bind(person1); // once you bind particular object so you cannot change
greet.call({ name: "Bob" });
//Hello, Alice


//----------------------------------------------------------------------
//4
function printInfo(city, country) {
    console.log(this.name + " lives in " + city + ", " + country);
}

const person3 = {
    name: "John Doe"
};

const printFunction = printInfo.bind(person3, "London");
printFunc.call({ name: "Jane Smith" }, "UK");
//John Doe lives in London, UK

