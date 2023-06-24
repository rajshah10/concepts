function outerFunction() {
    let outerVariable = 'Hello';
    function innerFunction() {
        outerVariable = "Hii"
        console.log(outerVariable);
    }
    return innerFunction;
}
var inner = outerFunction();
inner(); // Output: 'Hello'


//why Closures?

//1. Data Privacy
//2.Persistant state - The inner function can access and manipulate variables from the outer function, even after the outer function has completed its execution.So, closures allow the inner function to "remember" and retain access to the variables, parameters, and scope of the outer function, even when the outer function has finished executing.

//What they do after remebering? 
//1. Creat Private variables - hidden from outside world


function handleClick() {
    var count = 0;
    return function increment() {
        count++;
        console.log(count);
    }
    // document.getElementById('myButton').addEventListener('click', increment);
}
handleClick()();

//When the button with the ID 'myButton' is clicked, the increment function is invoked as the event handler. Even though the handleClick function has completed its execution, the increment function still has access to the count variable due to the closure formed 
