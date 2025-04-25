const jogador = require("../Models/JogadorModel")

class jogadorController{
    constructor(app){
        app.get("/jogador/criar", (req, res)=>{
            res.send("<h1>Jogador Criado</h1>")
        })
    }
}

module.exports = jogadorController