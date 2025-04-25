const jogador = require("../Models/JogadorModel")

class jogadorController{
    constructor(app){
        app.get("/jogador/criar", (req, res)=>{
            res.send("Jogador Criado")
        })
    }
}

module.exports = jogadorController