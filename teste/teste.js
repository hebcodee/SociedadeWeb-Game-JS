const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

const personagem = new Image()
personagem.src="lucasBaixo.png"
 




personagem.onload = () => {
    c.drawImage(
        personagem,
        0,
        0,
        personagem.width / 4,
        personagem.height,
        canvas.width /2 - (personagem.width / 4) / 2,
        canvas.height /2 - personagem.height / 2,
        personagem.width / 4,
        personagem.height
    )
}

