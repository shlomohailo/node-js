const EventEmitter = require('events').EventEmitter;


class Student extends EventEmitter {
    constructor( boolean) {
        super()
       

        this.isPassTest(boolean)
    }


    isPassTest(boolean) {
        super.on('doTest', () => { this.testHandler(boolean) })
    }

    testHandler(boolean) {
        return boolean == true ? console.log(" passed") : console.log(" failed");
    }

    active() {
        super.emit('doTest')
    }
}


module.exports =
{
    objStudent: new Student(false),
    Student
}