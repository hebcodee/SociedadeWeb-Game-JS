
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

//Selecao Pesonagem
const nomeJogador = localStorage.getItem("jogador")
const personagemEscolhido = localStorage.getItem("personagem")

const Feminino1Cima = "../imagens/personagens/daniel/danielCima.png";
const Feminino1Esquerda = "../imagens/personagens/daniel/danielEsquerda.png";
const Feminino1Baixo = "../imagens/personagens/daniel/danielBaixo.png";
const Feminino1Direita = "../imagens/personagens/daniel/danielDireita.png";

const Feminino2Cima = "imagens/feminino1.png";
const Feminino2Esquerda = "imagens/feminino1.png";
const Feminino2Baixo = "imagens/feminino1.png";
const Feminino2Direita = "imagens/feminino1.png";

// const Masculino1Cima = "imagens/feminino1.png";
// const Masculino1Esquerda = "imagens/feminino1.png";
// const Masculino1Baixo = "imagens/feminino1.png";
// const Masculino1Direita = "imagens/feminino1.png";

// const Masculino2Cima = "imagens/feminino1.png";
// const Masculino2Esquerda = "imagens/feminino1.png";
// const Masculino2Baixo = "imagens/feminino1.png";
// const Masculino2Direita = "imagens/feminino1.png";

// Declaração das variáveis fora dos blocos
let imgCima;
let imgEsquerda;
let imgBaixo;
let imgDireita;

//Imagens Peronsagem
if (personagemEscolhido == "masculino1"){
   imgCima = Masculino1Cima
   imgEsquerda = Masculino1Esquerda
   imgBaixo = Masculino1Baixo
   imgDireita = Masculino1Direita
} else if(personagemEscolhido == "masculino2"){
   imgCima = Masculino2Cima
   imgEsquerda = Masculino2Esquerda
   imgBaixo = Masculino2Baixo
   imgDireita = Masculino2Direita
} else if(personagemEscolhido == "feminino1"){
   imgCima = Feminino1Cima
   imgEsquerda = Feminino1Esquerda
   imgBaixo = Feminino1Baixo
   imgDireita = Feminino1Direita
} else {
   imgCima = Feminino2Cima
   imgEsquerda = Feminino2Esquerda
   imgBaixo = Feminino2Baixo
   imgDireita = Feminino2Direita
}

const jogadorCimaImagem= new Image()
jogadorCimaImagem.src= imgCima

const jogadorEsquerdaImagem= new Image()
jogadorEsquerdaImagem.src= imgEsquerda

const jogadorBaixoImagem= new Image()
jogadorBaixoImagem.src= imgBaixo

const jogadorDireitaImagem= new Image()
jogadorDireitaImagem.src= imgDireita

//imagens
const imagemMapa = new Image()
imagemMapa.src= "../imagens/mapa/mapaSociedadeWeb.png"

const imagemSobreposicao = new Image()
imagemSobreposicao.src= "../imagens/mapa/sobreposicaoMapa.png"

//Iago
const iagoBaixoImagem= new Image()
iagoBaixoImagem.src= "../imagens/personagens/iago/iagoBaixo.png"

//Heb
const hebBaixoImagem= new Image()
hebBaixoImagem.src= "../imagens/personagens/heb/hebBaixo.png"

//Nathan
const nathanBaixoImagem= new Image()
nathanBaixoImagem.src= "../imagens/personagens/nathan/nathanBaixo.png"

//Daniel
const danielEsquerdaImagem= new Image()
danielEsquerdaImagem.src= "../imagens/personagens/daniel/danielEsquerda.png"

//Turing
const turingBaixoImagem= new Image()
turingBaixoImagem.src= "../imagens/personagens/turing/turingBaixo.png"

//Anonimo
const anonimoImagem= new Image()
anonimoImagem.src= "../imagens/personagens/anonimo/anonimoImagem.png"

//Hamburguer
const hamburguerImagem= new Image()
hamburguerImagem.src= "../imagens/hambuguerGlitch.png"

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
const teste = [
  `Bem Vindo ${nomeJogador} à Sociedade Web`,
  "O jogo ainda não está finalizado",
  "Sinta-se livre para explorar o Mapa",
  "Visite a Biblioteca"
];

const teste2 = [
  "oi","Sou o Alan Turing", "Preparado para um Quiz?"
];



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
                  dialogo: ['Oi voce é novo por aqui', "Olhe a biblioteca e depois va ao refeitorio", "alguem viu minha marmita?"],
                  aparecer: true,
                  nome: "nathan"
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
                  dialogo: teste2,
                  aparecer: true,
                  nome: "turing"
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
                  aparecer: false,
                  nome: "anonimo"
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
                  dialogo: teste,
                  aparecer: true,
                  nome: "heb"
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
                  dialogo: ["iae, suave mofi?", "Bem deboa?", 'Quer conhecer os melhores Hamburgueres da Cidade?', "Ou jogar um Pinpong de nivel profissional?", "vem comigo ratao"],
                  aparecer: true,
                  nome: "iago"
                }))
          }

          // Daniel
          else if (symbol === 2248) {
            personagens.push(
              new Personagem({
                posicao: {
                  x: j * Borda.width + desvio.x,
                  y: i * Borda.height + desvio.y
                },
                image: danielEsquerdaImagem,
                quadros: {
                  max: 4,
                  hold: 60
                },
                animacao: true,
                dialogo: ["Oii seja bem vindo","Gostaria de comer um caldo de xana?", "As Portas do Laboratorio de Informatica Abriram"],
                aparecer: true,
                nome: "daniel"
              }))
          }
          
          //Hamburguer
          else if (symbol === 2249) {
            personagens.push(
              new Personagem({
                posicao: {
                  x: j * Borda.width + desvio.x,
                  y: i * Borda.height + desvio.y
                },
                image: hamburguerImagem,
                quadros: {
                  max: 4,
                  hold: 60
                },
                animacao: false,
                dialogo: ["*Delicioso*"],
                aparecer: false,
                nome: "hamburguer"
              }))
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
                id = i*j
              ))
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
    image: jogadorBaixoImagem,
    quadros: {max: 4, hold: 10},
    sprites: {
        up: jogadorCimaImagem,
        left: jogadorEsquerdaImagem,
        down: jogadorBaixoImagem,
        right: jogadorDireitaImagem
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


bordas.forEach(e => {
  console.log(e)
})


personagens.forEach(e => {
  console.log(e)
})

console.log("Quantidade: " + bordas.length)

bordas[210].colisao=false
let velocidadeMovimento = 10
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
            personagemDesvio: { x: 0, y: velocidadeMovimento }
          })

        //Colisao interacoes
        verificarInteracaoColisao({
          interacoes,
          jogador,
          personagemDesvio: { x: 0, y: velocidadeMovimento }
        })

        //Colisao Bordas
        for (let i = 0; i < bordas.length; i++) {
            const borda = bordas[i]
            if(rectangularCollision({
                rectangle1: jogador,
                rectangle2: {...borda, posicao:{
                    x: borda.posicao.x,
                    y: borda.posicao.y + velocidadeMovimento
                }}
            })) {
              if(borda.colisao){
                movimento = false
                break
              }
            }
        }


        if(movimento)
        objetosMoveis.forEach(movable => {movable.posicao.y += velocidadeMovimento})}

        
    else if (teclas.a.pressionada && ultimaTecla === "a") {
        jogador.animacao = true
        jogador.image = jogador.sprites.left

        //Colisao Personagens
        checkForCharacterCollision({
            personagens,
            jogador,
            personagemDesvio: { x: velocidadeMovimento, y: 0 }
          })
        
        //Colisao interacoes
        verificarInteracaoColisao({
          interacoes,
          jogador,
          personagemDesvio: { x: velocidadeMovimento, y: 0 }
        })

        //Colisao
        for (let i = 0; i < bordas.length; i++) {
            const borda = bordas[i]
            
            if(rectangularCollision({
                rectangle1: jogador,
                rectangle2: {...borda, posicao:{
                    x: borda.posicao.x + velocidadeMovimento,
                    y: borda.posicao.y
                }}
            })) {
              if(borda.colisao){
                movimento = false
                break
              }
            }
        }

        if(movimento)
        objetosMoveis.forEach(movable => {movable.posicao.x += velocidadeMovimento})}


    else if (teclas.s.pressionada && ultimaTecla === "s") {
        jogador.animacao = true
        jogador.image = jogador.sprites.down
        
        //Colisao Personagens
        checkForCharacterCollision({
            personagens,
            jogador,
            personagemDesvio: { x: 0, y: -velocidadeMovimento }
          })

        //Colisao interacoes
        verificarInteracaoColisao({
          interacoes,
          jogador,
          personagemDesvio: { x: 0, y: -velocidadeMovimento }
        })

        //Colisao
        for (let i = 0; i < bordas.length; i++) {
            const borda = bordas[i]
            
            if(rectangularCollision({
                rectangle1: jogador,
                rectangle2: {...borda, posicao:{
                    x: borda.posicao.x,
                    y: borda.posicao.y - velocidadeMovimento
                }}
            })) {
              if(borda.colisao){
                movimento = false
                break
              }
            }
        }
        if(movimento)
        objetosMoveis.forEach(movable => {movable.posicao.y -= velocidadeMovimento})}


    else if (teclas.d.pressionada && ultimaTecla === "d") {
        jogador.animacao = true
        jogador.image = jogador.sprites.right
        
        //Colisao Personagens
        checkForCharacterCollision({
            personagens,
            jogador,
            personagemDesvio: { x: -179, y: 0 }
          })

        //Colisao interacoes
        verificarInteracaoColisao({
          interacoes,
          jogador,
          personagemDesvio: { x: -velocidadeMovimento, y: 0 }
        })

        //Colisao
        for (let i = 0; i < bordas.length; i++) {
            const borda = bordas[i]
            
            if(rectangularCollision({
                rectangle1: jogador,
                rectangle2: {...borda, posicao:{
                    x: borda.posicao.x - velocidadeMovimento,
                    y: borda.posicao.y
                }}
            })) {
              if(borda.colisao){
                movimento = false
                break
              }
            }
        }

        if(movimento)
        objetosMoveis.forEach(movable => {movable.posicao.x -= velocidadeMovimento})}
}
animacao()

//keydown
let ultimaTecla = ""
let espacoAtivo = true
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
            

            if (jogador.interactionAsset.nome === "iago"){
              ativarHeb()
            }
            
            if (jogador.interactionAsset.nome === "nathan"){
              desativarHeb();
              ativarAnonimo();
              ativarHamburguer();
            }

            if (jogador.interactionAsset.nome === "anonimo"){
              desativarAnonimo();
              ativarAnimacaoHamburguer();
            }

            if (jogador.interactionAsset.nome === "hamburguer"){
              desativarHamburguer();
            }

            if (jogador.interactionAsset.nome === "turing") {
              if (!jogador.quizUsado) { 
                  startQuiz();
                  jogador.quizUsado = true
              }
              mudarTextoTuring()
          }
            

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