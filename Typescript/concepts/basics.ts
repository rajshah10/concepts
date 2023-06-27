//String , Number, Booleans
let greetings: string = "Hello"
let userId: number = 324
let isSelected: boolean = false

//Any & Non Implict ANy
//1. Any means you can have any types if you dont want any type checking
//   You are avoiding strictness by using ANY so whats the use of using Typescript

//Void  - indicates that the function is not returning anything 
//string indicates its returning string
//number,null,undefinec,array,boolean
const getHello = (name: string): string => {
    return name
}
getHello("Hi my name is Raj shah")

//Type  aliases - We define a structure for particular types  and if there are 8 function using that types so we can use that for reusability.

type User = {
    name: string,
    email: string,
    age: number
}
function createUser(user: User) {
    console.log(user.name)
}
createUser({ name: "Raj shah", email: "shahraj@gmail.com", age: 56 })


//Readonly,?(optional)

type details = {
    readonly _id: number,
    name: string,
    gender?: string
}

let userdetails: details = {
    _id: 45,
    name: "Raj shah"
}

//userdetails._id = 45 error as its readonly

//Array
type hero = {
    name: string
}
let newHero: hero = {
    name: "Raj shah"
}
const superHeroes: hero[] = []

superHeroes.push(newHero)


//Union Types - You dont know which data i required or is coming so instaed of using any use Union types
//Combination of 2 or 3 types

let raj: string | number = "Raj shah"


//Tuples

type arrays = [string, number]

let tUser: arrays = ['Raj', 8]

//Enums - data type that allows you to define a set of named constants. 

enum gender {
    Male,
    Female
}
const newGender = gender.Male

//Interface
interface Clone {
    readonly dbid: number,
    email: string,
    userId: number,
    googleId?: number
}

const rajshah: Clone = { dbid: 1, email: "r@gmail.com", userId: 22 }

//Interface vs Type(Both are used for definig object types)

//1. Type cannot be merged with other types and interface can be merged

type abc = {
    a: string
}
// type abc ={
//     b:string
// }

interface Foo {
    a: number;
}

interface Foo {
    b: string;
}
// Equivalent to:
// interface Foo {
//   a: number;
//   b: string;
// }


//2. Type can represent any types and Interface can only represent object types

//CLASSES
// - class keyword is used to define and create object-oriented classes
class Users {
    name: string
    email: string

    private _courseCount: number

    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
    //Getters and setters
    get courseCount(): number {
        return this._courseCount
    }
    set courseCount(count: number) {
        this._courseCount = count
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.email} years old.`);
    }
}

const person1 = new Users("Raj shah", "s@gmail.com")
person1.greet()


//GETTER AND SETTERS
//if there is private variable in class and you want to manipulate that or you want to have access to that so in that case you can use getters and setters
//Above example


//Abstract Class

//1. If class comprises of one or more abstract methods then it is known as Abstract class.
//2. You can have abstract method as well as non abstratc methods in abstract class.
//3. Abstract methods define inside abstract class have only definition but not function body and implementation is done by other classes thats derived.


//GENERICS
//1. If you want function or components to be reusable then you can use generics


function identityOne(val:any):any{
    return val
}
//Its taking any value as parameter and returning any value

function identityTwo<Type>(val:Type):Type{
    return val
}
//If you pass Type(eg:Number) value as parameter then return type will automatically be number type (Generics)


