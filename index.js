const express = require("express")
const path = require("path");
const jogadorController = require("../Projeto MVC/MVC/Controllers/JogadorController")

class Server{
    
    app
    porta
    path

    constructor(){
        this.app = express()
        this.path = require("path")
        this.porta = 3000
        this.app.set("view engine", "ejs")
        this.app.set("views", path.join(__dirname, "mvc/views"))
        new jogadorController(this.app)
        this.on()
    }

    on(){
        this.app.listen(this.porta)
    }
}

new Server()