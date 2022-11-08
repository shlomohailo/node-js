const EventEmitter = require('events').EventEmitter;
const promises = require('fs').promises

class Student extends EventEmitter {
    constructor(fullName, score, subject, boolean) {
        super()

        this.fullName = fullName;
        this.score = score;
        this.subject = subject;
        this.doTest(boolean)
    }


    doTest(boolean) {
        super.on('doTest', () => { this.testHandler(boolean) })
    }

    testHandler(boolean) {
        return boolean == true ? console.log(" passed") : console.log(" failed");
    }

    active() {
        super.emit('doTest')
    }
   
    writeToFile() {
        try {
            promises.appendFile('studentData.txt', `${this.fullName}, ${this.score}, ${this.subject}`)
                .then(this.active())
        } catch (error) { console.log(error) }
    }
}


module.exports =
{
    objStudent: new Student("shlomoo hailo", 100, "math", true),
    Student
}