//Recursion - Function that calls itself again and again until certain condition is matched

function fact(n) {
    if (n == 1) {
        return n
    } else {
        return n * fact(n - 1)
    }
}

console.log(fact(5))

//Normal Reverse
function reverseNumber(n) {
    var rev = 0
    while (n > 0) {
        rev = (rev * 10) + (n % 10)
        n = Math.floor(n / 10)
    }
    return rev;
}
console.log(reverseNumber(1123))

//Recursive reverse
function ReverseRecursive(num) {
    if (num < 10) {
        return;
    } else {
        return ReverseRecursiveHelper(num, 0)
    }

}
function ReverseRecursiveHelper(num, rev) {
    if (num == 0) {
        return rev;
    }
    return ReverseRecursiveHelper(Math.floor(num / 10), (rev * 10) + (num % 10))
}
console.log(ReverseRecursive(5467))