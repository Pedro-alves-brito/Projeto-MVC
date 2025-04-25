class Jogador{
    nome
    vidas
    energia

    constructor(nome, vidas, energia){
        this.nome = nome
        this.vidas = vidas
        this.energia = energia
    }

    atacar(oponente){
        oponente.vidas --
        this.energia --

        console.log(`O ${this.nome} atacou ${oponente.nome}`)
        console.log("--------------------------------------")

        if (oponente.vidas <= 0) {
            oponente.vida = 0
            console.log(`O ${this.nome} venceu`)
        }
    }
}

module.exports = Jogador