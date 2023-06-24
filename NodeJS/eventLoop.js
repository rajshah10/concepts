//Event Loop  - The job of Event loop is to monitor call stack and call back queues.

//1 . Call stack - excute 
//2. ASync Function - callback queue  - check call stack has any function to execute  - otherwise it will get pushed from CBQ to CST.
//3. Sync call - call stack - execute


console.log("This is the first statement");

setTimeout(function () {
    console.log("This is the second statement");
}, 1000);

console.log("This is the third statement");

//Button - onClick 
document.getElementById('btn').onclick('click', () => console.log("Button Clicke"))

