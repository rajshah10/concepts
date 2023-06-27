//Debouncing - Its a concept in js where you can call the function only once after certain period of time.
//To prevent Unwanted calls ,resize,scroll

//When searching Laptop in seacrh bar.Once you type L  after that a ,p , so it wont call the api at that time after writing Laptop after few miliseconds that function will be called. 


function getData() {
    console.log("Counter")
}

function myDebounce(call, delay) {
    let timer;
    return function () {
        if (timer) clearTimeout(timer) // What if user starts typing again so restart the time
        timer = setTimeout(() => {
            call()
        }, delay)
    }
}

const BetterFunction = myDebounce(getData, 1000)