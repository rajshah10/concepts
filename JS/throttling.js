//Throttling - Its a concept in js where you can call the function only once within certain period of time.

//For eg - I have a button and onClick the data is stored in Database but what if user clicks double time so it will store 2 times.To prevent this we use Throttling

const mythrottle = (fn, delay) => {
    return function () {
        //disable button
        document.getElementById('myid').disabled = true
        setTimeout(() => {
            fn()
        }, delay)
    }
}
const newFun = mythrottle(() => {
    document.getElementById('myid').disabled = false
    console.log("USer clicked")
}, 5000)