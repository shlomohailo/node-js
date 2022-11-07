const fs = require('fs');

const EventEmitter = require("events").EventEmitter

let paragraph = 'This article is about all forms of football. For specific codes of football and other uses of the term, see Football (disambiguation).'

class Football extends EventEmitter {
    constructor() {
        super()
        this.writeFile()
    }
    writeFile = () => {
        fs.appendFile("./football-file.txt", paragraph, (err) => {
            if (err) return console.log(err)
            this.emit("read")
        })
    }
    readFromFile = () => {
        this.on("read",()=>{ fs.readFile('./football-file.txt', { encoding: "utf8" }, (err, data) => {
            if (err) return console
            .log(err)
            console.log("reading successfully")
        })})
    }
    changeToUpperCase = () => {
        fs.readFile('./football-file.txt', { encoding: "utf8" }, (err, data) => {
            if (err) return console.log(err)
            fs.appendFile('football-file-upperCase.txt', data.toUpperCase(), (err) => {
                if (err) return console.log(err)
                console.log("change to upper case success")
            })
        })
    }
}
module.exports = new Football();