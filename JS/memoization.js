//Memoization  - optimize the performance of function by caching its results.
// The memo object is used to store the reversed strings so that they don't have to be computed again

//Reverse 

function reverseString(str) {
    let memo = {}
    function reverseStringHelper(str, index, rev) {
        if (memo[str]) {
            return memo[index];
        }
        if (index < 0) {
            return rev
        }
        rev += str[index]
        return reverseStringHelper(str, index - 1, rev)

    }
    return reverseStringHelper(str, str.length - 1, "")
}
console.log(reverseString("Raj shah"))