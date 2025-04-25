const express = require("express")
const jogadorController = require("../Projeto MVC/MVC/Controllers/JogadorController")

class Server{
    
    app
    porta

    constructor(){
        this.app = express()
        this.porta = 3000
        this.on()
        new jogadorController(this.app)
    }

    on(){
        this.app.listen(this.porta)
    }
}

new Server()