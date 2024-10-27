//2:50:20

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 1024
canvas.height = 576

//imagens
const imagemMapa = new Image()
imagemMapa.src= "../imagens/mapa/mapaSociedadeWeb.png"

const imagemJogador = new Image()
imagemJogador.src= "../imagens/personagens/lucas/lucasBaixo.png"

class Sprite {
    constructor({ posicao, velocidade, imagem, quadros = { max: 1 } }) {
        this.posicao = posicao
        this.imagem = imagem
        this.quadros = quadros
    }

    desenhar() {
        ctx.drawImage(
            this.imagem,
            0, 0,
            this.imagem.width / this.quadros.max,
            this.imagem.height,
            this.posicao.x,
            this.posicao.y,
            this.imagem.width / this.quadros.max,
            this.imagem.height
        )
    }
}

const deslocamento = {
    x: -1400,
    y: -1000
}

const mapa = new Sprite({
    posicao: {
        x: deslocamento.x,
        y: deslocamento.y
    },
    imagem: imagemMapa
})

const jogador = new Sprite({
    posicao :{
        x: canvas.width / 2 - 128 / 4 / 2,
        y: canvas.height / 2 - 32 / 2
    },
    imagem: imagemJogador,
    quadros: {max: 4}
})



//Movimentação
const teclas = {
    w: {pressionada: false},
    a: {pressionada: false},
    s: {pressionada: false},
    d: {pressionada: false},
}

//keydown
let ultimaTecla = ""
window.addEventListener("keydown", (evento) => { 
    switch (evento.key) {
        case "w":
            teclas.w.pressionada = true
            ultimaTecla = "w"
            break
        case "a":
            teclas.a.pressionada = true
            ultimaTecla = "a"
            break
        case "s":
            teclas.s.pressionada = true
            ultimaTecla = "s"
            break
        case "d":
            teclas.d.pressionada = true
            ultimaTecla = "d"
            break
    }
})

//keyup
window.addEventListener("keyup", (evento) => {
    switch (evento.key) {
        case "w":
            teclas.w.pressionada = false
            break
        case "a":
            teclas.a.pressionada = false
            break
        case "s":
            teclas.s.pressionada = false
            break
        case "d":
            teclas.d.pressionada = false
            break
    }
})

const objetosMoveis = [mapa]

function animacao() {
    window.requestAnimationFrame(animacao) 
    mapa.desenhar()
    jogador.desenhar()

        if (teclas.w.pressionada && ultimaTecla === "w") {
        objetosMoveis.forEach(objeto => { objeto.posicao.y += 5 })
    } else if (teclas.a.pressionada && ultimaTecla === "a") {
        objetosMoveis.forEach(objeto => { objeto.posicao.x += 5 })
    } else if (teclas.s.pressionada && ultimaTecla === "s") {
        objetosMoveis.forEach(objeto => { objeto.posicao.y -= 5 })
    } else if (teclas.d.pressionada && ultimaTecla === "d") {
        objetosMoveis.forEach(objeto => { objeto.posicao.x -= 5 })
    }
}
animacao()