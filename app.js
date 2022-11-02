const fs = require('fs')

class MyClass {

    write = () => {
        fs.writeFile('./classWrite.txt', 'La', (error) => {
            if (error) return console.log(error)
        })

    }

    read = () => {
        fs.readFile('./classWrite.txt', { encoding: "utf8" }, (error, data) => {
            if (error) return console.log(error)
            console.log(data)
        })
    }

}
module.exports =
{
    obj: new MyClass(),
    MyClass
}