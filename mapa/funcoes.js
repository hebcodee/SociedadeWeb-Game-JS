const pergunta = document.querySelector(".pergunta");
const respostas = document.querySelector(".respostas");
const spnQtd = document.querySelector(".spnQtd");
const conteudo = document.querySelector(".conteudo");
const fundo = document.querySelector('.fundo');
const interfaceQuiz = document.querySelector('.interfaceQuiz');

function rectangularCollision({rectangle1, rectangle2}) {
    return(rectangle1.posicao.x + rectangle1.width >= rectangle2.posicao.x &&
        rectangle1.posicao.x <= rectangle2.posicao.x +rectangle2.width &&
        rectangle1.posicao.y <= rectangle2.posicao.y + rectangle2.height &&
        rectangle1.posicao.y + rectangle1.height >= rectangle2.posicao.y)
}

function checkForCharacterCollision({ 
    personagens,
    jogador,
    personagemDesvio = { x: 0, y: 0 }
  }) {
    jogador.interactionAsset = null

    if (jogador.aparecer){
      for (let i = 0; i < personagens.length; i++) {
        const personagem = personagens[i]
        if (
          rectangularCollision({
            rectangle1: jogador,
            rectangle2: {
              ...personagem,
              posicao: {
                x: personagem.posicao.x + personagemDesvio.x,
                y: personagem.posicao.y + personagemDesvio.y
              }}})) {
                if (personagem.aparecer){
                  jogador.interactionAsset = personagem
                  break
                }
          
        }}}}

    
  function desativarHeb(){
    for (let i = 0; i < personagens.length; i++) {
      const personagem = personagens[i]

      if(personagem.nome === "heb"){
        personagem.aparecer = false
      }
    
    }
    bordas[209].colisao=false
  }

  function ativarHeb(){
    for (let i = 0; i < personagens.length; i++) {
      const personagem = personagens[i]

      if(personagem.nome === "heb"){
        personagem.aparecer = true
      }
    
    }
    bordas[209].colisao=true
  }

  function ativarAnonimo(){
    for (let i = 0; i < personagens.length; i++) {
      const personagem = personagens[i]

      if(personagem.nome === "anonimo"){
        personagem.aparecer = true
      }
    
    }
    bordas[210].colisao=true
  }

  function desativarAnonimo(){
    for (let i = 0; i < personagens.length; i++) {
      const personagem = personagens[i]

      if(personagem.nome === "anonimo"){
        personagem.aparecer = false
      }
    
    }
    bordas[210].colisao=false
  }

  function mudarTextoTuring(){
    for (let i = 0; i < personagens.length; i++) {
      const personagem = personagens[i]
      const teste3 = [
        "Voce ja fez o quiz"
      ];

      if(personagem.nome === "turing"){
        personagem.dialogo = teste3;
      }
    }
  }

  function desativarHamburguer(){
    for (let i = 0; i < personagens.length; i++) {
      const personagem = personagens[i]

      if(personagem.nome === "hamburguer"){
        personagem.aparecer = false
      }
    
    }
    bordas[211].colisao=false
  }

  function ativarHamburguer(){
    for (let i = 0; i < personagens.length; i++) {
      const personagem = personagens[i]

      if(personagem.nome === "hamburguer"){
        personagem.aparecer = true
      }
    
    }
    bordas[211].colisao=false
  }

  function ativarAnimacaoHamburguer(){
    for (let i = 0; i < personagens.length; i++) {
      const personagem = personagens[i]

      if(personagem.nome === "hamburguer"){
        personagem.animacao = true
      }
    
    }
  }

  function verificarInteracaoColisao({ 
    interacoes,
    jogador,
    personagemDesvio = { x: 0, y: 0 }
  }) {
    for (let i = 0; i < interacoes.length; i++) {
      const interacao = interacoes[i]
  
      if (
        rectangularCollision({
          rectangle1: jogador,
          rectangle2: {
            ...interacao,
            posicao: {
              x: interacao.posicao.x + personagemDesvio.x,
              y: interacao.posicao.y + personagemDesvio.y
            }
          }
        })
      ) {
        console.log("Interacao")
        break
      }
    }
  }


  
function startQuiz(){
    spnQtd.style.display = "flex"
    pergunta.style.display = "flex"
    fundo.style.display = "flex"
    interfaceQuiz.style.display = "flex"
    respostas.style.display = "grid"
}

function abrirMural(){
  espacoAtivo = false
  spnQtd.style.display = "flex"
  pergunta.style.display = "flex"
  fundo.style.display = "flex"
  interfaceQuiz.style.display = "flex"
  respostas.style.display = "grid"
}

function fecharMural(){
  espacoAtivo = false
  spnQtd.style.display = "flex"
  pergunta.style.display = "flex"
  fundo.style.display = "flex"
  interfaceQuiz.style.display = "flex"
  respostas.style.display = "grid"
}