// a) Event Bubbling - Event will propagate from child to parent
// <body>
//   <div>
//     <button>Like Me</button>
//   </div>
// </body>

var div = document.querySelector("div") // You can also do it on HTML,Body
var button = document.querySelector("button")

div.addEventListener('click', () => {
    console.log("Like Me")
})
button.addEventListener('click', (e) => {
    e.stopPropagation(); 
    console.log("Button")
})
// The stopPropagation() method prevents the event from propagating beyond the button element, so the event will not trigger the event listener on the parent div element. This means that clicking the button will only log "Button" to the console, whereas clicking anywhere else within the div element will log both "Like Me" and "Button" to the console.

// b) Event Capturing - Event will propagate from Parent to child

div.addEventListener('click', () => {
console.log("Like Me")
}, true) // Just add true

button.addEventListener('click', (e) => {
  console.log("Button")
})

button.addEventListener('click', (e) => {
    e.stopImmediatePropagation(); //2 button event trigger
    console.log("Button1")
})

button.addEventListener('click', (e) => {
    console.log("Button2")
})
// Event listener on the div element will be executed first, before any event listeners on its child elements.

// In the second block of code, there are three event listeners added to the button element. The first one logs "Button" to the console when the button is clicked. The second one logs "Button1" and stops immediate propagation of the event using the stopImmediatePropagation() method. This means that the third event listener will not be executed because the propagation of the event is stopped.

// As a result, when the button is clicked, "Button", "Button1" will be logged to the console, but "Button2" will not be logged because of the stopImmediatePropagation() method