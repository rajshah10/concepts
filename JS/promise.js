// Promise is used to handle an Async operations.
// 1.We use promise to showcase it as a synchronized way.
// 2.Better Handling 
// 3.We can use Promises to handle multipl async operation and for that we can use Promise.all , Promise.race etc
// 4.To avoid Callback Hell

// 3 STATE - 
// Pending
// Fullfiled
// Rejected

//Its not feasible to use Promise for below case because there is nothing asynchronous happening in code such as API call,setTimeout.
const promise = new Promise((resolve, reject) => {
    const randomNumber = 0.5
    if (randomNumber > 0.5) {
        resolve("True")
    } else {
        reject("False")
    }
})

promise
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })

//Here we have async task setTimeout so we can use promise just that its readable and its showcasing synchronize way.
//We can achieve this without promise also as JS is async
const withAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            resolve(randomNumber);
        } else {
            reject('The random number is too big!');
        }
    }, 1000);
})

withAsync
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })


//To handle Multiple Promises

//Promise.all - takes array of promise and returns new promise.It is used to wait for all promise in array to resolve
// Imagine you have a web application where you need to fetch data from multiple APIs simultaneously, and you want to display the combined results on the page. You can use Promise.all to wait for all the API requests to complete, collect the results, and then render the data on the page
const promise1 = Promise.resolve(1)
const promise2 = Promise.resolve(2)
const promise3 = Promise.reject(3)

Promise.all([promise1, promise2, promise3])
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })


//Promise.race - is used to race three Promises and get the result of the Promise that settles first.
//Suppose you have an application that needs to fetch data from multiple geolocation services to determine the user's location. You can use Promise.race to race the API calls and get the response from the fastest service, ensuring a quicker and more responsive user experience.
Promise.race([promise1, promise2, promise3])
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

//Promise.allSettled  - its almost similar to all but it returns combo of rejected and fulfilled status (its an array of objects)

Promise.allSettled([promise1, promise2, promise3])
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })


//PROMISE CONVERTED TO ASYNC AWAIT 
const handlePromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                resolve(randomNumber);
            } else {
                reject('The random number is too big!');
            }
        }, 1000);
    });
};
//HandlePromise returns a promise so to handle that promise we can use async await 
//One Way
const handleAsync = async () => {
    try {
        const result = await handlePromise();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

handleAsync();
//Second Way - IIFE
(async () => {
    try {
      const result = await handlePromise();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  })();
  


