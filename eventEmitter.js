const EventEmitter = require("events").EventEmitter

class EventEmittersClass extends EventEmitter {
    constructor(){
        super()
        this.onPrint()
    }
    onPrint = () => {
        this.on("print", () => {
            console.log("hello event emitter class")
        })
    }

    emitPrint = () => {
        this.emit("print")
    }

}
module.exports = new EventEmittersClass()