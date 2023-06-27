//compose  -  2 or more function are combine to form a new Function

const multiplyBy2 = (n) => n * 2
const divideby4 = (n) => n / 2
console.log((divideby4(multiplyBy2(4))))
//The above code can be written as Closures

function mulBy2(data) {
    return function divide4(num) {
        const multipliedData = data * 2
        const result = multipliedData / num
        return result
    }
}
console.log(mulBy2(4)(3))

//Earlier we used to do function chaining


//More Improvised way - compose and pipe

function compose(fn1, fn2) {
    return function (data) {
        return fn1(fn2(data))
    }
}
const multiplyby2AndDivideBy4 = compose(multiplyBy2, divideby4)
console.log(multiplyby2AndDivideBy4(40))

//For Pipe the order will only change // return fn2(fn1(data))


//Problem statement

const multiplyBy20 = price => price * 100
const divideBy100 = price => price / 100
const normalizePrice = price => price.toFixed(2)

const compose = (fn1, fn2, fn3) => data => fn1(fn2(fn3(data))) 

const multiplyBy20AndDivideby100ANdNormalize = compose(normalizePrice, divideBy100, multiplyBy20) //Right to left
console.log(multiplyBy20AndDivideby100ANdNormalize(1678))