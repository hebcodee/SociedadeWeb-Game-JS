const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

//colisao mapa
const colisaoMapa = []
for (let i = 0; i < colisao.length; i += 38 ){
    colisaoMapa.push (colisao.slice(i, 38 + i))
}

class Boundary {
    static width = 96
    static height = 96
    constructor({posicao}){
        this.posicao = posicao
        this.width = 96
        this.height = 96
    }

    draw () {
        ctx.fillStyle = "blue"
        ctx.fillRect(this.posicao.x,this.posicao.y,this.width,this.height)
    }
}

const boundaries = []

const offset = {
    x: -1400,
    y: -1000
}
colisaoMapa.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if(symbol === 101)
        boundaries.push(new Boundary({posicao: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
        }}))
    })
})

//imagens
const imagemMapa = new Image()
imagemMapa.src= "../imagens/mapa/mapaSociedadeWeb.png"

const imagemUp= new Image()
imagemUp.src= "../imagens/personagens/lucas/lucasCima.png"

const imagemLeft= new Image()
imagemLeft.src= "../imagens/personagens/lucas/lucasEsquerda.png"

const imagemDown= new Image()
imagemDown.src= "../imagens/personagens/lucas/lucasBaixo.png"

const imagemRight= new Image()
imagemRight.src= "../imagens/personagens/lucas/lucasDireita.png"

class Sprite {
    constructor({ posicao, velocidade, imagem, quadros = { max: 1 }, sprites }) {
        this.posicao = posicao
        this.imagem = imagem
        this.quadros = {...quadros, val: 0, elapsed: 0}
        this.imagem.onload = () => {
            this.width = this.imagem.width / this.quadros.max
            this.height = this.imagem.height
        }
        this.moving = false
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

        if (!this.moving) return

        if (this.quadros.max > 1) {this.quadros.elapsed++}

        if (this.quadros.elapsed % 10 === 0){
            if (this.quadros.val < this.quadros.max - 1) this.quadros.val++
            else this.quadros.val = 0   
    }
    }
}

const deslocamento = {
    x: offset.x,
    y: offset.y
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
    imagem: imagemDown,
    quadros: {max: 4},
    sprites: {
        up: imagemUp,
        left: imagemLeft,
        down: imagemDown,
        right: imagemRight
    }
})



//Movimentação
const teclas = {
    w: {pressionada: false},
    a: {pressionada: false},
    s: {pressionada: false},
    d: {pressionada: false},
}



const objetosMoveis = [mapa, ...boundaries]

function rectangularCollision({rectangle1, rectangle2}) {
    return(rectangle1.posicao.x + rectangle1.width >= rectangle2.posicao.x &&
        rectangle1.posicao.x <= rectangle2.posicao.x +rectangle2.width &&
        rectangle1.posicao.y <= rectangle2.posicao.y + rectangle2.height &&
        rectangle1.posicao.y + rectangle1.height >= rectangle2.posicao.y)
}

function animacao() {
    window.requestAnimationFrame(animacao) 
    mapa.desenhar()
    boundaries.forEach(bondary =>{
        bondary.draw()
    })
    
    jogador.desenhar()

    //Movimentacao + Colisão
    let moving = true  
    jogador.moving = false

    if (teclas.w.pressionada && ultimaTecla === "w") {
        jogador.moving = true
        jogador.imagem = jogador.sprites.up
        for (let i = 0; i < boundaries.length; i++) {
            const bondary = boundaries[i]
            if(rectangularCollision({
                rectangle1: jogador,
                rectangle2: {...bondary, posicao:{
                    x: bondary.posicao.x,
                    y: bondary.posicao.y + 3
                }}
            })) {
                moving = false
                break
            }
        }

        if(moving)
        objetosMoveis.forEach(movable => {movable.posicao.y += 3})}

        
    else if (teclas.a.pressionada && ultimaTecla === "a") {
        jogador.moving = true
        jogador.imagem = jogador.sprites.left

        for (let i = 0; i < boundaries.length; i++) {
            const bondary = boundaries[i]
            
            if(rectangularCollision({
                rectangle1: jogador,
                rectangle2: {...bondary, posicao:{
                    x: bondary.posicao.x + 3,
                    y: bondary.posicao.y
                }}
            })) {
                moving = false
                break
            }
        }

        if(moving)
        objetosMoveis.forEach(movable => {movable.posicao.x += 3})}


    else if (teclas.s.pressionada && ultimaTecla === "s") {
        jogador.moving = true
        jogador.imagem = jogador.sprites.down

        for (let i = 0; i < boundaries.length; i++) {
            const bondary = boundaries[i]
            
            if(rectangularCollision({
                rectangle1: jogador,
                rectangle2: {...bondary, posicao:{
                    x: bondary.posicao.x,
                    y: bondary.posicao.y - 3
                }}
            })) {
                moving = false
                break
            }
        }

        if(moving)
        objetosMoveis.forEach(movable => {movable.posicao.y -= 3})}


    else if (teclas.d.pressionada && ultimaTecla === "d") {
        jogador.moving = true
        jogador.imagem = jogador.sprites.right

        for (let i = 0; i < boundaries.length; i++) {
            const bondary = boundaries[i]
            
            if(rectangularCollision({
                rectangle1: jogador,
                rectangle2: {...bondary, posicao:{
                    x: bondary.posicao.x - 3,
                    y: bondary.posicao.y
                }}
            })) {
                moving = false
                break
            }
        }

        if(moving)
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