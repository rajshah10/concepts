//Function Currying - Function with number of arguments is transformed into series of function with single parameter
//Its similar to closure function
function oneFunc(a) {
    return function twoFunc(b) {
        return function threeFunc(c) {
            return a + b + c
        }
    }
}
console.log(oneFunc(1)(2)(3))
const addidtion = (one) => (two) => (three) => {
    return one + two + three
}
console.log(addidtion(1)(2)(3))


//Function currying can be particularly useful when you have certain common parameters that remain the same across multiple function calls, while only a subset of parameters varies

const calculate = (base) => (multiplier) => (exponent) => {
    return Math.pow(base * multiplier, exponent);
}
const calculateArea = calculate(2)
console.log(calculateArea(3)(4))