const pergunta = document.querySelector(".pergunta");
const respostas = document.querySelector(".respostas");
const spnQtd = document.querySelector(".spnQtd");
const conteudo = document.querySelector(".conteudo");
const fundo = document.querySelector('.fundo');
const interfaceQuiz = document.querySelector('.interfaceQuiz');

function rectangularCollision({rectangle1, rectangle2}) {
    if (jogador.aparecer){
      return(rectangle1.posicao.x + rectangle1.width >= rectangle2.posicao.x &&
        rectangle1.posicao.x <= rectangle2.posicao.x +rectangle2.width &&
        rectangle1.posicao.y <= rectangle2.posicao.y + rectangle2.height &&
        rectangle1.posicao.y + rectangle1.height >= rectangle2.posicao.y)
    }
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

        function checkForCharacterFinalCollision({ 
          personagensFinal,
          jogador,
          personagemFinalDesvio = { x: 0, y: 0 }
        }) {
          jogador.interactionAsset = null
      
          if (jogador.aparecer){
            for (let i = 0; i < personagensFinal.length; i++) {
              const personagemFinal = personagensFinal[i]
              if (
                rectangularCollision({
                  rectangle1: jogador,
                  rectangle2: {
                    ...personagemFinal,
                    posicao: {
                      x: personagemFinal.posicao.x + personagemFinalDesvio.x,
                      y: personagemFinal.posicao.y + personagemFinalDesvio.y
                    }}})) {
                      if (personagemFinal.aparecer){
                        jogador.interactionAsset = personagemFinal
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

  function mudarTexto(){
    for (let i = 0; i < personagens.length; i++) {
      const personagem = personagens[i]
      const depoisTuring = [
        "Parabéns! Você concluiu o quiz e provou que tem muito potencial para se tornar um grande programador!",
        "Não importa se você acertou tudo ou não",
        "O mais importante é que aprendeu algo novo hoje.",
        "Assim como eu, você também pode mudar o mundo com suas ideias!",
        "Agora, que tal explorar mais um pouco nosso ambiente?",
        "Experimente ir na nossa area de lazer."
      ]

      const depoisDaniel = [
        "Parabéns! Você concluiu o quiz e provou que tem muito potencial para se tornar um grande programador!",
        "Não importa se você acertou tudo ou não, o mais importante é que aprendeu algo novo hoje.",
        "Alan Turing mudou o mundo com sua mente brilhante, e você também pode mudar o mundo com suas ideias! Agora, que tal continuar aprendendo?",
      ]
      
      if(personagem.nome === "turing"){
        personagem.dialogo = depoisTuring;
      }

      if(personagem.nome === "daniel"){
        personagem.dialogo = depoisDaniel;
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

  function desativarPorta(){
    for (let i = 0; i < personagens.length; i++) {
      const personagem = personagens[i]

      if(personagem.nome === "portaComputacao"){
        personagem.aparecer = false
      }
    
    }
    bordas[208].colisao=false
    bordas[207].colisao=false
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


function desativarTodosPersonagens(){
  for (let i = 0; i < personagens.length; i++) {
    const personagem = personagens[i]

    if(personagem.nome === "daniel"){
      personagem.aparecer = false
    }

    if(personagem.nome === "nathan"){
      personagem.aparecer = false
    }

    if(personagem.nome === "turing"){
      personagem.aparecer = false
    }

    if(personagem.nome === "iago"){
      personagem.aparecer = false
    }

    if(personagem.nome === "heb"){
      personagem.aparecer = false
    }

  
  }
  bordas[209].colisao=false
  bordas[216].colisao=false
  bordas[215].colisao=false
  bordas[207].colisao=false
  bordas[206].colisao=false
  bordas[209].colisao=false
}

function redefinirPosicao(){
  objetosMoveis.forEach(movable => {movable.posicao.x = desvio.x; })
}

function cenaFinal(){
  for (let i = 0; i < personagensFinal.length; i++) {
    const personagemFinal = personagensFinal[i]

    if(personagemFinal.nome === "hebFinal"){
      personagemFinal.aparecer = true
    }

    if(personagemFinal.nome === "danielFinal"){
      personagemFinal.aparecer = true
    }

    if(personagemFinal.nome === "anonimoFinal"){
      personagemFinal.aparecer = true
    }

    if(personagemFinal.nome === "turingFinal"){
      personagemFinal.aparecer = true
    }

    if(personagemFinal.nome === "iagoFinal"){
      personagemFinal.aparecer = true
    }

    if(personagemFinal.nome === "nathanFinal"){
      personagemFinal.aparecer = true
    }
  }}