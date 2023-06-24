//Pass by value and pass by references

//----------------------------------------------PASS BY VALUE --------------------------------

// Pass by Value:

// When a variable is passed by value, a copy of the variable's value is made and passed to the function or assigned to another variable.
// Modifying the copied value does not affect the original variable.
// In JavaScript, primitive data types (such as numbers, strings, booleans) are passed by value.
let num = 10;

function updateValue(value) {
    value = 20; // Modifying the copied value
}

updateValue(num);
console.log(num); // Output: 10

//----------------------------------------------PASS BY REFERENCES ------------------------------- 

// When a variable is passed by reference, a reference to the variable's memory location is passed to the function or assigned to another variable.
// Modifying the referenced object affects the original variable, as they both refer to the same underlying object in memory.
// In JavaScript, objects (including arrays, functions, and other objects) are passed by reference.
let obj = { name: "John" };

function updateName(objRef) {
    objRef.name = "Jane"; // Modifying the referenced object
}

updateName(obj);
console.log(obj.name); // Output: Jane



//---------------------------------------------OP------------------------------------

//1 pass by value
let arr = [1, 2, 3];
function modifyArray(array) {
  array.push(4);
}

modifyArray(arr);
console.log(arr);//[1,2,3,4]


//2 pass by references
let obje = { data: { value: 5 } };
function modifyValue(object) {
  object.data.value = 10;
}
modifyValue(obje);
console.log(obje.data.value);//10


//3 pass by value and pass  by references
let numb = 5;
let object2 = { value: 10 };

function modifyData(number, object) {
  number = 8;
  object.value = 20;
}

modifyData(numb, object2);
console.log(numb, object2.value);


//---------------------------------------------SHALLOW VS DEEP COPY --------------------------------









