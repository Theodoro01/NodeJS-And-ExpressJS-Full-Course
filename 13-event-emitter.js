const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on("ask", () => {
    console.log("Hello, what's your name ?")
})

customEmitter.on("ask", (name) => {
    console.log(`Hello, my name's ${name}`)
})

customEmitter.on("ask", () => {
    console.log("How old are you ?")
})

customEmitter.on("ask", (name, years) => {
    console.log(`I'm ${years} years old.`)
})

customEmitter.emit("ask", "Theo", 18);