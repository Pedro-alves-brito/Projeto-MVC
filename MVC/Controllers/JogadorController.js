const Jogador = require("../Models/JogadorModel")

class jogadorController{
    constructor(app){
        app.get("/jogador/criar", (req, res)=>{
            const jogador = new Jogador("Pedro",5,4)
            res.render("JogadorViews.ejs",{
                nome:jogador.nome,
                vida:jogador.vidas,
                energia:jogador.energia
            })
        })
    }
}

module.exports = jogadorController