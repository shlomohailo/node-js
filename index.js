const obj = require("./app.js")

console.log(obj.value)

const { error } = require('console')
const fs = require('fs')

for (let i = 0; i < 100; i++) {
    fs.appendFile("./first-file.txt", `${i}`, () => { })

}

fs.readFile("./first-file.txt", { encoding: "utf-8" }, (error, data) => {
    if (error) return console.log(error)
    console.log(data)
})

fs.writeFile("./secund-file.txt", "Daniel is a masculine given name and a surname of Hebrew origin. It means God is my judge[8][9] (cf. Gabriel—God is my strength), and derives from two early biblical figures, primary among them Daniel from the Book of Daniel. It is a common given name for males, and is also used as a surname. It is also the basis for various derived given names and surnames.", (error) => {
    if (error) return console.log(error)
})

fs.readFile("./secund-file.txt", { encoding: 'utf-8' }, (error, data) => {
if(error) return console.log(error)
console.log(data)
})

fs.readFile("./secund-file.txt", { encoding: 'utf-8' }, (error, data) => {
    if (error) return console.log(error)
    data.length > 50 ? console.log("success") : console.log("to short")
    if(data.length>50){
        console.log("success")
    }

})

fs.readFile("./secund-file.txt", { encoding: "utf-8" }, (error, data) => {
    if (error) return console.log(error)
    fs.writeFile("./new-file-toUpperCase", `${data.toUpperCase()}`, () => {

    })
})