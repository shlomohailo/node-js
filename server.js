const httpServer = require('http').Server

class MyServer extends httpServer {
    constructor() {
        super()
        this.on("request", this.requestHandler)
        this.on("connection", this.connectionHandler)
        this.listen(8080)
    }
    requestHandler(requestObj, responseObj) {
        responseObj.end("hello user")
    }
    connectionHandler() {
        console.log('Connection created!')
    }
}
module.exports = {
    myServer: new MyServer()
}