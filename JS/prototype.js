//Prototype - How are these Array , Object accessible to Methods , Properties .With help of Prototype it's accessible .

const obj1={
    name:"RAj shah",
    getName:function(){
        return this.name
    },
    getRoll:function(){
        return this.roll
    }
}

const obj2={
    roll:1,
    // name:"Rishi",
    __proto__:obj1
}

const obj3={
    class:"MCA",
    __proto__:obj2
}

console.log(obj2.name) // Raj shah
console.log(obj2.getName()) // Raj shah
console.log(obj2.getRoll()) //1
console.log(obj1.getRoll()) //undefined

console.log(obj3.getRoll()) //1
console.log(obj3.getName()) //Raj shah


//suppose name is there in obj2 so it will refer to current object and will print rishi

//Create Own Prototype

Array.prototype.show = function(){
    return this;
}
const cities = ["Mumbai"]
console.log(cities.show())