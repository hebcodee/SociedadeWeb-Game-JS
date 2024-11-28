const pergunta = document.querySelector(".pergunta");
const respostas = document.querySelector(".respostas");
const spnQtd = document.querySelector(".spnQtd");
const conteudo = document.querySelector(".conteudo");
const fundo = document.querySelector('.fundo');
const interfaceQuiz = document.querySelector('.interfaceQuiz');

import perguntas from "./perguntas.js";

let currentIndex = 0;
let perguntasCorretas = 0;

// btnReiniciar.onclick = () => {
//     conteudo.style.display = "flex"
//     conteudoFinish.style.display = "none"

//     currentIndex = 0;
//     perguntasCorretas = 0;
//     loadQuestion();
// }

function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        perguntasCorretas++
    }

    if (currentIndex < perguntas.length - 1) {
        currentIndex++;
        loadQuestion();
    }
    else {
        finish()
    }
}

function finish(){
    // pergunta.innerHTML = `voce acertou ${perguntasCorretas} de ${perguntas.length}`;
    currentIndex = 0;
    perguntasCorretas = 0;
    
    conteudo.style.display = "none"
    fundo.style.display = "none"
    interfaceQuiz.style.display = "none"
    respostas.style.display = "none"
}

function loadQuestion(){
    spnQtd.innerHTML = `${currentIndex + 1}/${perguntas.length}`;
    const item = perguntas[currentIndex];
    respostas.innerHTML = "";
    pergunta.innerHTML = item.pergunta;

    item.respostas.forEach(resposta => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class="resposta" data-correct="${resposta.correct}">
        ${resposta.option}
        </button>`;

        respostas.appendChild(div)
    });

    document.querySelectorAll(".resposta").forEach((item) => {
        item.addEventListener("click", nextQuestion); 
    })
}

loadQuestion();

