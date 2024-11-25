
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

//imagens
const imagemMapa = new Image()
imagemMapa.src= "../imagens/mapa/mapaSociedadeWeb.png"

const imagemSobreposicao = new Image()
imagemSobreposicao.src= "../imagens/mapa/sobreposicaoMapa.png"

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
const danielCimaImagem= new Image()
danielCimaImagem.src= "../imagens/personagens/daniel/danielCima.png"
const danielEsquerdaImagem= new Image()
danielEsquerdaImagem.src= "../imagens/personagens/daniel/danielEsquerda.png"
const danielBaixoImagem= new Image()
danielBaixoImagem.src= "../imagens/personagens/daniel/danielBaixo.png"
const danielDireitaImagem= new Image()
danielDireitaImagem.src= "../imagens/personagens/daniel/danielDireita.png"

//Personagens
const turingBaixoImagem= new Image()
turingBaixoImagem.src= "../imagens/personagens/turing/turingBaixo.png"

const anonimoImagem= new Image()
anonimoImagem.src= "../imagens/personagens/anonimo/anonimoImagem.png"

//colisao mapa
const colisaoMapa = []
for (let i = 0; i < colisao.length; i += 38 ){
    colisaoMapa.push (colisao.slice(i, 38 + i))
}

const interacaoMapa = []
for (let i = 0; i < interacaoData.length; i += 38 ){
    interacaoMapa.push (interacaoData.slice(i, 38 + i))
}

const desvio = {
    x: -1400,
    y: -1000
}

//Colisoes
const bordas = []
colisaoMapa.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if(symbol === 101)
        bordas.push(new Borda({posicao: {
            x: j * Borda.width + desvio.x,
            y: i * Borda.height + desvio.y
        }}, 
        id = 0
      ))
    })
})

//Interacoes
const personagens = []
const interacoes = []
interacaoMapa.forEach((row, i) => {
    row.forEach((symbol, j) => {
        // Nathan
        if (symbol === 2246) {
            personagens.push(
                new Personagem({
                  posicao: {
                    x: j * Borda.width + desvio.x,
                    y: i * Borda.height + desvio.y
                  },
                  image: nathanBaixoImagem,
                  quadros: {
                    max: 4,
                    hold: 60
                  },
                  animacao: true,
                  dialogo: ['Gosto de dar o cu KKKKKKKKK', "alguem viu minha marmita?"],
                  aparecer: true
                }))
          }
          // Alan Turing
          else if (symbol === 2245) {
            personagens.push(
                new Personagem({
                  posicao: {
                    x: j * Borda.width + desvio.x,
                    y: i * Borda.height + desvio.y
                  },
                  image: turingBaixoImagem,
                  quadros: {
                    max: 4,
                    hold: 60
                  },
                  animacao: true,
                  dialogo: ["Sou o Alan Xereca", "Alan Turing*", "Aperte [E] para jogar"],
                  aparecer: true
                }))


          }
          // Anonimo
          else if (symbol === 2247) {
            personagens.push(
                new Personagem({
                  posicao: {
                    x: j * Borda.width + desvio.x,
                    y: i * Borda.height + desvio.y
                  },
                  image: anonimoImagem,
                  quadros: {
                    max: 4,
                    hold: 60
                  },
                  animacao: true,
                  dialogo: ['Coma este hamburguer suculento'],
                  aparecer: true
                }))
          }
          // Herberth
          else if (symbol === 2244) {
            personagens.push(
                new Personagem({
                  posicao: {
                    x: j * Borda.width + desvio.x,
                    y: i * Borda.height + desvio.y
                  },
                  image: hebBaixoImagem,
                  quadros: {
                    max: 4,
                    hold: 60
                  },
                  animacao: true,
                  dialogo: ['Bem Vindo a Sociedade Web', "O jogo ainda nao esta finalizado", "Sintase Livre para explorar o Mapa"],
                  aparecer: true
                }))
          }
          // Iago
          else if (symbol === 2243) {
            personagens.push(
                new Personagem({
                  posicao: {
                    x: j * Borda.width + desvio.x,
                    y: i * Borda.height + desvio.y
                  },
                  image: iagoBaixoImagem,
                  quadros: {
                    max: 4,
                    hold: 60
                  },
                  animacao: true,
                  dialogo: ["iae, suave mofi?", "Bem deboa?", 'Quer conhecer os melhores Hamburgueres da Cidade?', "Ou jogar um Pinpong de nivel profissional?", "vem comigo ratazana"],
                  aparecer: true
                }))
          }

          // Cozinha
          else if (symbol === 2248) {
            interacoes.push(new Borda({posicao: {
                x: j * Borda.width + desvio.x,
                y: i * Borda.height + desvio.y
            }}, 
            id= i
          ))

            
          }
          // Pingpong
          else if (symbol === 2242) {
            interacoes.push(new Borda({posicao: {
                x: j * Borda.width + desvio.x,
                y: i * Borda.height + desvio.y
            }},
          id=i
        ))
          }
          // Mural
          else if (symbol === 2251) {
            interacoes.push(new Borda({posicao: {
                x: j * Borda.width + desvio.x,
                y: i * Borda.height + desvio.y
            }},
          id=i
        ))
          }

          if (symbol !== 0) {
            bordas.push(
              new Borda({
                posicao: {
                  x: j * Borda.width + desvio.x,
                  y: i * Borda.height + desvio.y
                }}, 
                id = 0))
          }

          
    })
})

const deslocamento = {
    x: desvio.x,
    y: desvio.y
}

const mapa = new Sprite({
    posicao: {
        x: deslocamento.x,
        y: deslocamento.y
    },
    image: imagemMapa
})

const sobreposicao = new Sprite({
  posicao: {
      x: deslocamento.x,
      y: deslocamento.y
  },
  image: imagemSobreposicao
})

const jogador = new Sprite({ 
    posicao :{
        x: canvas.width / 2 - 128 / 4 / 2,
        y: canvas.height / 2 - 32 / 2
    },
    image: danielBaixoImagem,
    quadros: {max: 4, hold: 10},
    sprites: {
        up: danielCimaImagem,
        left: danielEsquerdaImagem,
        down: danielBaixoImagem,
        right: danielDireitaImagem
    }
})



//Movimentação
const teclas = {
    w: {pressionada: false},
    a: {pressionada: false},
    s: {pressionada: false},
    d: {pressionada: false},
}

const objetosMoveis = [mapa, ...bordas, ...interacoes, ...personagens, sobreposicao]
const renderizaveis= [mapa, ...bordas, ...personagens, jogador, sobreposicao]


function animacao() {
    window.requestAnimationFrame(animacao) 
    renderizaveis.forEach((renderizavel) => {
        renderizavel.desenhar()
      })

    //Movimentacao + Colisão
    let movimento = true  
    jogador.animacao = false

    if (teclas.w.pressionada && ultimaTecla === "w") {
        jogador.animacao = true
        jogador.image = jogador.sprites.up
        
        //Colisao Personagens
        checkForCharacterCollision({
            personagens,
            jogador,
            personagemDesvio: { x: 0, y: 3 }
          })

        //Colisao interacoes
        verificarInteracaoColisao({
          interacoes,
          jogador,
          personagemDesvio: { x: 0, y: 3 }
        })

        //Colisao Bordas
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
        jogador.animacao = true
        jogador.image = jogador.sprites.left

        //Colisao Personagens
        checkForCharacterCollision({
            personagens,
            jogador,
            personagemDesvio: { x: 3, y: 0 }
          })
        
        //Colisao interacoes
        verificarInteracaoColisao({
          interacoes,
          jogador,
          personagemDesvio: { x: 3, y: 0 }
        })

        //Colisao
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
        jogador.animacao = true
        jogador.image = jogador.sprites.down
        
        //Colisao Personagens
        checkForCharacterCollision({
            personagens,
            jogador,
            personagemDesvio: { x: 0, y: -3 }
          })

        //Colisao interacoes
        verificarInteracaoColisao({
          interacoes,
          jogador,
          personagemDesvio: { x: 0, y: -3 }
        })

        //Colisao
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
        jogador.animacao = true
        jogador.image = jogador.sprites.right
        
        //Colisao Personagens
        checkForCharacterCollision({
            personagens,
            jogador,
            personagemDesvio: { x: -3, y: 0 }
          })

        //Colisao interacoes
        verificarInteracaoColisao({
          interacoes,
          jogador,
          personagemDesvio: { x: -3, y: 0 }
        })

        //Colisao
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
    if (jogador.isInteracting) {
        switch (evento.key) {
          case ' ':
            jogador.interactionAsset.dialogoIndex++
    
            const { dialogoIndex, dialogo } = jogador.interactionAsset
            if (dialogoIndex <= dialogo.length - 1) {
              document.querySelector('#dialogoPersonagemBox').innerHTML =
                jogador.interactionAsset.dialogo[dialogoIndex]
              return
            }
            
            // final conversa
            jogador.isInteracting = false
            jogador.interactionAsset.dialogoIndex = 0
            document.querySelector('#dialogoPersonagemBox').style.display = 'none'
            

            //AQUI Checkar se esta colidindo com o Turing
            
            
    
            break
        }
        return
      }

    switch (evento.key) {
        case ' ':
            if (!jogador.interactionAsset) return

            //comeco conversa
            const primeiraMensagem = jogador.interactionAsset.dialogo[0]
            document.querySelector('#dialogoPersonagemBox').innerHTML = primeiraMensagem
            document.querySelector('#dialogoPersonagemBox').style.display = 'flex'
            jogador.isInteracting = true
            break

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
        case "e":
            startQuiz();
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