
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

//Selecao Pesonagem
const nomeJogador = localStorage.getItem("jogador")
const personagemEscolhido = localStorage.getItem("personagem")

const Feminino1Cima = "../imagens/personagens/feminino/feminino01Cima.png";
const Feminino1Esquerda = "../imagens/personagens/feminino/feminino01Esquerda.png";
const Feminino1Baixo = "../imagens/personagens/feminino/feminino01Baixo.png";
const Feminino1Direita = "../imagens/personagens/feminino/feminino01Direita.png";

const Feminino2Cima = "../imagens/personagens/feminino/feminino02Cima.png";
const Feminino2Esquerda = "../imagens/personagens/feminino/feminino02Esquerda.png";
const Feminino2Baixo = "../imagens/personagens/feminino/feminino02Baixo.png"
const Feminino2Direita = "../imagens/personagens/feminino/feminino02Direita.png";

const Masculino1Cima = "../imagens/personagens/masculino/masculino01Cima.png";
const Masculino1Esquerda = "../imagens/personagens/masculino/masculino01Esquerda.png";
const Masculino1Baixo = "../imagens/personagens/masculino/masculino01Baixo.png";
const Masculino1Direita = "../imagens/personagens/masculino/masculino01Direita.png";

const Masculino2Cima = "../imagens/personagens/masculino/masculino02Cima.png";
const Masculino2Esquerda = "../imagens/personagens/masculino/masculino02Esquerda.png";
const Masculino2Baixo = "../imagens/personagens/masculino/masculino02Baixo.png";
const Masculino2Direita = "../imagens/personagens/masculino/masculino02Direita.png";

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

const iagoCimaImagem= new Image()
iagoCimaImagem.src= "../imagens/personagens/iago/iagoCima.png"

//Heb
const hebBaixoImagem= new Image()
hebBaixoImagem.src= "../imagens/personagens/heb/hebBaixo.png"

const hebEsquerdaImagem= new Image()
hebEsquerdaImagem.src= "../imagens/personagens/heb/hebEsquerda.png"

//Nathan
const nathanBaixoImagem= new Image()
nathanBaixoImagem.src= "../imagens/personagens/nathan/nathanBaixo.png"

const nathanDireitaImagem= new Image()
nathanDireitaImagem.src= "../imagens/personagens/nathan/nathanDireita.png"

//Daniel
const danielCimaImagem= new Image()
danielCimaImagem.src= "../imagens/personagens/daniel/danielCima.png"

const danielEsquerdaImagem= new Image()
danielEsquerdaImagem.src= "../imagens/personagens/daniel/danielEsquerda.png"

//Turing
const turingDireitaImagem= new Image()
turingDireitaImagem.src= "../imagens/personagens/turing/turingDireita.png"

const turingBaixoImagem= new Image()
turingBaixoImagem.src= "../imagens/personagens/turing/turingBaixo.png"

//Anonimo
const anonimoImagem= new Image()
anonimoImagem.src= "../imagens/personagens/anonimo/anonimoImagem.png"

const anonimoEsquerdaImagem= new Image()
anonimoEsquerdaImagem.src= "../imagens/personagens/anonimo/anonimoEsquerdaImagem.png"

const anonimoDireitaImagem= new Image()
anonimoDireitaImagem.src= "../imagens/personagens/anonimo/anonimoDireitaImagem.png"

//Hamburguer
const hamburguerImagem= new Image()
hamburguerImagem.src= "../imagens/hambuguerGlitch.png"

//Porta
const portaImagem= new Image()
portaImagem.src= "../imagens/portaImage.png"

const portaImagem2= new Image()
portaImagem2.src= "../imagens/portaImage.png"

//colisao mapa
const colisaoMapa = []
for (let i = 0; i < colisao.length; i += 38 ){
    colisaoMapa.push (colisao.slice(i, 38 + i))
}

const interacaoMapa = []
for (let i = 0; i < interacaoData.length; i += 38 ){
    interacaoMapa.push (interacaoData.slice(i, 38 + i))
}

const cenaFinalMapa = []
for (let i = 0; i < cenaFinalData.length; i += 38 ){
  cenaFinalMapa.push(cenaFinalData.slice(i, 38 + i))
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
const personagensFinal = []
const teste = [
  `Olá, seja bem-vindo à SociedadeWeb ${nomeJogador}. Aqui você vai aprender muitas coisas legais sobre informática e programação. `,
  "Meu nome é Herberth, e sou o guia que vai te ajudar a entender o que esse lugar tem de melhor. ",
  "Vamos começar explorando a escola!",
  "Antes de mais nada, fale com Nathan, ele está na biblioteca.",
];

const antesTuring = [
  `Olá, ${nomeJogador}! Me falaram muito bem sobre voce.`,
  "Me chamo Alan Turign e vou lhe ensinar algumas coisas sobre Tecnologia.",
  "Para que você entenda como os computadores realmente funcionam, é importante entender alguns conceitos fundamentais.",
  "Vamos falar sobre como os computadores 'entendem' números e as grandes possibilidades que isso resulta.",
  "Vou começar explicando como os números podem ser representados de diferentes maneiras, usando algo chamado 'bases'.",
  "A base mais comum, que você usa no seu dia a dia, é a base 10, ou 'decimal', mas os computadores usam a base 2, ou 'binário'.",
  "...",
  "Quando você trabalha com binário, você usa apenas dois números: 0 e 1. Isso é o que os computadores realmente 'entendem'.",
  "Tudo o que você vê na tela, todas as imagens, textos e vídeos, na verdade, são convertidos para uma sequência de zeros e uns.",
  "Que formam grandes sistemas computacionais",
  "...",
  "Vamos dar um passo adiante e falar sobre decriptografia.",
  "Um bom exemplo didatico é a Cifra de César, uma forma de criptografia em que as letras da mensagem são 'movidas' um número fixo de posições no alfabeto.",
  "Por exemplo, se deslocarmos cada letra da palavra 'ABC' por 3, ela se tornará 'DEF'.",
  "...",
  "Parabéns, você já aprendeu os conceitos básicos de conversão de bases e decriptografia. Esses são apenas os primeiros passos, mas são muito importantes para começar a entender como a programação e a computação funcionam. ",
  "Agora, para garantir que você realmente absorveu o conteúdo, vamos fazer um teste rápido sobre o que foi abordado. Boa sorte!",
];


const antesDaniel = [
  "Que cara estranho o que acabou de comprar um hamburguer",
  "Mas enfim...",
  "Voce esta atras da chave não é mesmo?",
  "Tome ela aqui",
  "*Portas do Laboratorio se Abriram*",
]




cenaFinalMapa.forEach((row, i) => {
  row.forEach((symbol, j) => {

    //Nathan
      if (symbol === 2244) {
        personagensFinal.push(
              new Personagem({
                posicao: {
                  x: j * Borda.width + desvio.x,
                  y: i * Borda.height + desvio.y
                },
                image: nathanDireitaImagem,
                quadros: {
                  max: 4,
                  hold: 60
                },
                animacao: false,
                dialogo: ["Adeus"],
                aparecer: false,
                nome: "nathanFinal"
              }))
        }

        // Alan Turing
        else if (symbol === 2245) {
          personagensFinal.push(
              new Personagem({
                posicao: {
                  x: j * Borda.width + desvio.x,
                  y: i * Borda.height + desvio.y
                },
                image: turingDireitaImagem,
                quadros: {
                  max: 4,
                  hold: 60
                },
                animacao: false,
                dialogo: ["Adeus"],
                aparecer: false,
                nome: "turingFinal"
              }))
        }

        // Anonimo
        else if (symbol === 2247) {
          personagensFinal.push(
              new Personagem({
                posicao: {
                  x: j * Borda.width + desvio.x,
                  y: i * Borda.height + desvio.y
                },
                image: anonimoDireitaImagem,
                quadros: {
                  max: 4,
                  hold: 60
                },
                animacao: false,
                dialogo: ["Adeus"],
                aparecer: false, 
                nome: "anonimoFinal"
              }))
        }

        // Herberth
        else if (symbol === 2243) {
          personagensFinal.push(
              new Personagem({
                posicao: {
                  x: j * Borda.width + desvio.x,
                  y: i * Borda.height + desvio.y
                },
                image: hebEsquerdaImagem,
                quadros: {
                  max: 4,
                  hold: 60
                },
                animacao: false,
                dialogo: ["Adeus"],
                aparecer: false,
                nome: "hebFinal"
              }))
        }

        // Iago
        else if (symbol === 2242) {
          personagensFinal.push(
              new Personagem({
                posicao: {
                  x: j * Borda.width + desvio.x,
                  y: i * Borda.height + desvio.y
                },
                image: iagoCimaImagem,
                quadros: {
                  max: 4,
                  hold: 60
                },
                animacao: false,
                dialogo: ["Adeus"],
                aparecer: false,
                nome: "iagoFinal"
              }))
        }

        // Daniel
        else if (symbol === 2246) {
          personagensFinal.push(
            new Personagem({
              posicao: {
                x: j * Borda.width + desvio.x,
                y: i * Borda.height + desvio.y
              },
              image: danielCimaImagem,
              quadros: {
                max: 4,
                hold: 60
              },
              animacao: false,
              dialogo: ["Adeus"],
              aparecer: false,
              nome: "danielFinal"
            }))
        }
  })
})


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
                  dialogo: [
                    "Ah, novato, que bom que você chegou!",
                    "O que voce achou do nosso ambiente?",
                    "A aula já já vai começar, mas antes disso, quero lhe contar sobre o nosso professor Alan Turing.",
                    "Você sabia que o nosso mundo digital, tudo que você conhece sobre computadores e programação, tem um pouco de Alan Turing nele?",
                    "Turing foi um dos maiores matemáticos e cientistas da história, e ele ajudou a criar os conceitos que são a base de tudo que usamos hoje.",
                    "Mas não foi só isso, ele foi um verdadeiro herói durante a Segunda Guerra Mundial! Ele ajudou a decifrar códigos secretos dos nazistas e, com isso, salvou milhares de vidas.",
                    "...",
                    "Os nazistas usavam uma máquina chamada Enigma, e Turing criou uma maneira de quebrá-la, o que foi essencial para a vitória dos aliados.",
                    "Além disso, Turing desenvolveu a ideia de um 'computador universal', algo que mais tarde se tornaria a base de todos os computadores que usamos hoje.",
                    "...",
                    "Agora que você já sabe um pouco sobre Alan Turing e o impacto que ele teve na ciência da computação, vamos para a aula com ele!",
                    "Antes disso voce precisa ir no refeitorio pegar a chave com Daniel",
                    "Ele esta com uma camisa Laranja",
                  ],
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
                  animacao: false,
                  dialogo: antesTuring,
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
                  animacao: false,
                  dialogo: [
                    'Olá...',
                    'Voce é novo por aqui nao é?',
                    'Eu comprei esse hamburguer, mas acabei ficando sem fome',
                    'Voce quer ele pra voce?',
                    'hihihi',
                  ],
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
                  animacao: false,
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
                  dialogo: [
                    `Oi ${nomeJogador}, tudo deboa? Me chamo Patrick`,
                    "Notei que a SociedadeWeb está com alguns glitches, depois que um cara estranho encapuzado apareceu.",
                    "Nao sei se isso vai da problemas futuramente",
                    "Bom...",
                    "Nossa area de diversao ainda esta em desenvolvimento",
                    "Não poderemos jogar hoje, mas quem sabe outro dia",
                    "Ate breve"
                  ],
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
                dialogo: antesDaniel, 
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
                dialogo: ["*Delicioso*", "*Risadas Malignas Ao Fundo*"],
                aparecer: false,
                nome: "hamburguer"
              }))
          }

          //Portas Sala Computacao
          else if (symbol === 2250) {
            personagens.push(
              new Personagem({
                posicao: {
                  x: j * Borda.width + desvio.x,
                  y: i * Borda.height + desvio.y
                },
                image: portaImagem,
                quadros: {
                  max: 4,
                  hold: 60
                },
                animacao: false,
                dialogo: ["Porta Fechada", "Va ao Refeitorio para abrir"],
                aparecer: true,
                nome: "portaComputacao"
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
            personagens.push(
              new Personagem({
                posicao: {
                  x: j * Borda.width + desvio.x,
                  y: i * Borda.height + desvio.y
                },
                image: portaImagem2,
                quadros: {
                  max: 4,
                  hold: 60
                },
                animacao: false,
                dialogo: ["Porta Fechada", "Va ao Refeitorio para abrir"],
                aparecer: true,
                nome: "portaComputacao"
              }))
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

// bordas.forEach(e => {
//   console.log(e)
// })
// personagens.forEach(e => {
//   console.log(e)
// })
// console.log("Quantidade: " + bordas.length)
bordas[210].colisao=false
let velocidadeMovimento = 10

const objetosMoveis = [mapa, ...bordas, ...interacoes, ...personagens, sobreposicao, ...personagensFinal]
const renderizaveis= [mapa, ...bordas, ...personagens, jogador, sobreposicao, ...personagensFinal]
var posicaoCenaFinal = false

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

        
        // //Colisao Personagens Final
        // checkForCharacterFinalCollision({
        //   personagensFinal,
        //   jogador,
        //   personagemDesvio: { x: 0, y: velocidadeMovimento }
        // })

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
        objetosMoveis.forEach(movable => {
        movable.posicao.y += velocidadeMovimento
      })}

        
    else if (teclas.a.pressionada && ultimaTecla === "a") {
        jogador.animacao = true
        jogador.image = jogador.sprites.left

        //Colisao Personagens
        checkForCharacterCollision({
            personagens,
            jogador,
            personagemDesvio: { x: velocidadeMovimento, y: 0 }
          })
          
        //Colisao Personagens Final
        // checkForCharacterFinalCollision({
        //   personagensFinal,
        //   jogador,
        //   personagemDesvio: { x: 0, y: velocidadeMovimento }
        // })

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

        // //Colisao Personagens Final
        // checkForCharacterFinalCollision({
        //   personagensFinal,
        //   jogador,
        //   personagemDesvio: { x: 0, y: velocidadeMovimento }
        // })

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
        
        //Colisao Personagens Final
        checkForCharacterFinalCollision({
          personagensFinal,
          jogador,
          personagemDesvio: { x: 0, y: velocidadeMovimento }
        })

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
            
            if (jogador.interactionAsset.nome === "nathan"){
              desativarHeb();
              ativarAnonimo();
              ativarHamburguer();
            }

            if (jogador.interactionAsset.nome === "anonimo"){
              ativarAnimacaoHamburguer();
            }

            if (jogador.interactionAsset.nome === "hamburguer"){
              desativarAnonimo();
              desativarHamburguer()
            }

            if (jogador.interactionAsset.nome === "daniel"){
              desativarPorta();
            }

            if (jogador.interactionAsset.nome === "turing") {
              if (!jogador.quizUsado) { 
                  startQuiz();
                  jogador.quizUsado = true;
                  mudarTexto()
              }
              mudarTextoTuring()
          }

          if (jogador.interactionAsset.nome === "iago"){
            desativarTodosPersonagens()
            cenaFinal()
            objetosMoveis.forEach(movable => {
              movable.posicao.y += 180
              movable.posicao.x += -1045
            
            })
            const mensagemFinal = "Obrigado por testar o Jogo"
            document.querySelector('#dialogoPersonagemBox').innerHTML = mensagemFinal
            document.querySelector('#dialogoPersonagemBox').style.display = 'flex'
            jogador.isInteracting = true

            setTimeout(() => {
              jogador.isInteracting = false
              document.querySelector('#dialogoPersonagemBox').style.display = 'none'
            }, 2000);

              
            
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