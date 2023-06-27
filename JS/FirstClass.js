/// - The ability of Function that can be treated as variable and can be passed as an argument to another function
//Usage - easy to write HOF,reusable

const add = sum = (a, b) => {
    return a + b
}

function newFunc(fn) {
    return fn(5,10)
}

console.log(newFunc(add)) //arguments



///Real World Example

const numbers = [1, 5, 2, 8, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 5, 8]

//In this example, the function (a, b) => a - b is passed as an argument to the sort method
