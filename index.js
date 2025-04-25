const express = require("express")

class Server{
    
    app
    porta

    constructor(){
        this.app = express()
        this.porta = 3000
        this.on()
    }

    on(){
        this.app.listen(this.porta)
    }
}

new Server()