const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

//colisao mapa
const colisaoMapa = []
for (let i = 0; i < colisao.length; i += 38 ){
    colisaoMapa.push (colisao.slice(i, 38 + i))
}

const interacaoMapa = []
for (let i = 0; i < interacaoData.length; i += 38 ){
    interacaoMapa.push (interacaoData.slice(i, 38 + i))
}
class Borda {
    static width = 96
    static height = 96
    constructor({posicao}){
        this.posicao = posicao
        this.width = 96
        this.height = 96
    }

    draw () {
        ctx.fillStyle = "rgba(0, 0, 0, 0)"
        ctx.fillRect(this.posicao.x,this.posicao.y,this.width,this.height)
    }
}


const desvio = {
    x: -1400,
    y: -1000
}

//Colisoes
const bordas = []
colisaoMapa.forEach((row, i) => {
    row.forEach((symbol, j) => {
        // 1026 === villager
        if(symbol === 101)
        bordas.push(new Borda({posicao: {
            x: j * Borda.width + desvio.x,
            y: i * Borda.height + desvio.y
        }}))
    })
})

//Interacoes
const interacoes = []
interacaoMapa.forEach((row, i) => {
    row.forEach((symbol, j) => {
        // Nathan
        if (symbol === 2246) {
            interacoes.push(new Borda({posicao: {
                x: j * Borda.width + desvio.x,
                y: i * Borda.height + desvio.y
            }}))
          }
          // Alan Turing
          else if (symbol === 2245) {
            interacoes.push(new Borda({posicao: {
                x: j * Borda.width + desvio.x,
                y: i * Borda.height + desvio.y
            }}))
          }
          // Mural
          else if (symbol === 2251) {
            interacoes.push(new Borda({posicao: {
                x: j * Borda.width + desvio.x,
                y: i * Borda.height + desvio.y
            }}))
          }
          // Anonimo
          else if (symbol === 2247) {
            interacoes.push(new Borda({posicao: {
                x: j * Borda.width + desvio.x,
                y: i * Borda.height + desvio.y
            }}))
          }
          // Herberth
          else if (symbol === 2244) {
            interacoes.push(new Borda({posicao: {
                x: j * Borda.width + desvio.x,
                y: i * Borda.height + desvio.y
            }}))
          }
          // Cozinha
          else if (symbol === 2248) {
            interacoes.push(new Borda({posicao: {
                x: j * Borda.width + desvio.x,
                y: i * Borda.height + desvio.y
            }}))
          }
          // 2243
          else if (symbol === 2243) {
            interacoes.push(new Borda({posicao: {
                x: j * Borda.width + desvio.x,
                y: i * Borda.height + desvio.y
            }}))
          }
          // Pingpong
          else if (symbol === 2242) {
            interacoes.push(new Borda({posicao: {
                x: j * Borda.width + desvio.x,
                y: i * Borda.height + desvio.y
            }}))
          }
    })
})

//imagens
const imagemMapa = new Image()
imagemMapa.src= "../imagens/mapa/mapaSociedadeWeb.png"

//Iago
const iagoCimaImagem= new Image()
iagoCimaImagem.src= "../imagens/personagens/iago/iagoCima.png"
const iagoEsquerdaImagem= new Image()
iagoEsquerdaImagem.src= "../imagens/personagens/iago/iagoEsquerda.png"
const iagoBaixoImagem= new Image()
iagoBaixoImagem.src= "../imagens/personagens/iago/iagoBaixo.png"
const iagoDireitaImagem= new Image()
iagoDireitaImagem.src= "../imagens/personagens/iago/iagoDireita.png"

//Heb
const hebCimaImagem= new Image()
hebCimaImagem.src= "../imagens/personagens/heb/hebCima.png"
const hebEsquerdaImagem= new Image()
hebEsquerdaImagem.src= "../imagens/personagens/heb/hebEsquerda.png"
const hebBaixoImagem= new Image()
hebBaixoImagem.src= "../imagens/personagens/heb/hebBaixo.png"
const hebDireitaImagem= new Image()
hebDireitaImagem.src= "../imagens/personagens/heb/hebDireita.png"

//Nathan
const nathanCimaImagem= new Image()
nathanCimaImagem.src= "../imagens/personagens/nathan/nathanCima.png"
const nathanEsquerdaImagem= new Image()
nathanEsquerdaImagem.src= "../imagens/personagens/nathan/nathanEsquerda.png"
const nathanBaixoImagem= new Image()
nathanBaixoImagem.src= "../imagens/personagens/nathan/nathanBaixo.png"
const nathanDireitaImagem= new Image()
nathanDireitaImagem.src= "../imagens/personagens/nathan/nathanDireita.png"

//Daniel
// const danielnCimaImagem= new Image()
// danielCimaImagem.src= "../imagens/personagens/daniel/danielCima.png"
// const danielEsquerdaImagem= new Image()
// danielEsquerdaImagem.src= "../imagens/personagens/daniel/danielEsquerda.png"
// const danielBaixoImagem= new Image()
// danielBaixoImagem.src= "../imagens/personagens/daniel/danielBaixo.png"
// const danielDireitaImagem= new Image()
// danielDireitaImagem.src= "../imagens/personagens/daniel/danielDireita.png"

class Sprite {
    constructor({ posicao, velocidade, imagem, quadros = { max: 1 }, sprites }) {
        this.posicao = posicao
        this.imagem = imagem
        this.quadros = {...quadros, val: 0, intervalo: 0}
        this.imagem.onload = () => {
            this.width = this.imagem.width / this.quadros.max
            this.height = this.imagem.height
        }
        this.movimento = false
        this.sprites = sprites
    }

    desenhar() {
        ctx.drawImage(
            this.imagem,
            this.quadros.val * this.width, 
            0,
            this.imagem.width / this.quadros.max,
            this.imagem.height,
            this.posicao.x,
            this.posicao.y,
            this.imagem.width / this.quadros.max,
            this.imagem.height
        )

        if (!this.movimento) return

        if (this.quadros.max > 1) {this.quadros.intervalo++}

        //Intervalo Animacao
        if (this.quadros.intervalo % 10 === 0){
            if (this.quadros.val < this.quadros.max - 1) this.quadros.val++
            else this.quadros.val = 0   
    }
    }
}

const deslocamento = {
    x: desvio.x,
    y: desvio.y
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
    imagem: hebBaixoImagem,
    quadros: {max: 4},
    sprites: {
        up: hebCimaImagem,
        left: hebEsquerdaImagem,
        down: hebBaixoImagem,
        right: hebDireitaImagem
    }
})



//Movimentação
const teclas = {
    w: {pressionada: false},
    a: {pressionada: false},
    s: {pressionada: false},
    d: {pressionada: false},
}



const objetosMoveis = [mapa, ...bordas, ...interacoes]

function rectangularCollision({rectangle1, rectangle2}) {
    return(rectangle1.posicao.x + rectangle1.width >= rectangle2.posicao.x &&
        rectangle1.posicao.x <= rectangle2.posicao.x +rectangle2.width &&
        rectangle1.posicao.y <= rectangle2.posicao.y + rectangle2.height &&
        rectangle1.posicao.y + rectangle1.height >= rectangle2.posicao.y)
}

function animacao() {
    window.requestAnimationFrame(animacao) 
    mapa.desenhar()
    bordas.forEach(borda =>{
        borda.draw()
    })
    interacoes.forEach(interacao =>{
        interacao.draw()
    })
    
    jogador.desenhar()

    //Movimentacao + Colisão
    let movimento = true  
    jogador.movimento = false

    if (teclas.w.pressionada && ultimaTecla === "w") {
        jogador.movimento = true
        jogador.imagem = jogador.sprites.up
        for (let i = 0; i < bordas.length; i++) {
            const borda = bordas[i]
            if(rectangularCollision({
                rectangle1: jogador,
                rectangle2: {...borda, posicao:{
                    x: borda.posicao.x,
                    y: borda.posicao.y + 3
                }}
            })) {
                movimento = false
                break
            }
        }

        if(movimento)
        objetosMoveis.forEach(movable => {movable.posicao.y += 3})}

        
    else if (teclas.a.pressionada && ultimaTecla === "a") {
        jogador.movimento = true
        jogador.imagem = jogador.sprites.left

        for (let i = 0; i < bordas.length; i++) {
            const borda = bordas[i]
            
            if(rectangularCollision({
                rectangle1: jogador,
                rectangle2: {...borda, posicao:{
                    x: borda.posicao.x + 3,
                    y: borda.posicao.y
                }}
            })) {
                movimento = false
                break
            }
        }

        if(movimento)
        objetosMoveis.forEach(movable => {movable.posicao.x += 3})}


    else if (teclas.s.pressionada && ultimaTecla === "s") {
        jogador.movimento = true
        jogador.imagem = jogador.sprites.down

        for (let i = 0; i < bordas.length; i++) {
            const borda = bordas[i]
            
            if(rectangularCollision({
                rectangle1: jogador,
                rectangle2: {...borda, posicao:{
                    x: borda.posicao.x,
                    y: borda.posicao.y - 3
                }}
            })) {
                movimento = false
                break
            }
        }

        if(movimento)
        objetosMoveis.forEach(movable => {movable.posicao.y -= 3})}


    else if (teclas.d.pressionada && ultimaTecla === "d") {
        jogador.movimento = true
        jogador.imagem = jogador.sprites.right

        for (let i = 0; i < bordas.length; i++) {
            const borda = bordas[i]
            
            if(rectangularCollision({
                rectangle1: jogador,
                rectangle2: {...borda, posicao:{
                    x: borda.posicao.x - 3,
                    y: borda.posicao.y
                }}
            })) {
                movimento = false
                break
            }
        }

        if(movimento)
        objetosMoveis.forEach(movable => {movable.posicao.x -= 3})}
}
animacao()

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