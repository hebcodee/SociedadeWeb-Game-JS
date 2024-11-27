class Borda {
    static width = 96
    static height = 96
    constructor({posicao}, id){
        this.posicao = posicao
        this.width = 96
        this.height = 96
        this.id = id
        this.colisao = true
    }

    desenhar () {
        ctx.fillStyle = "rgba(0, 0, 0, 0)"
        ctx.fillRect(this.posicao.x,this.posicao.y,this.width,this.height)
    }
}


// ---------------

class Sprite {
    constructor({ posicao, velocidade, image, quadros = { max: 1, hold: 10}, sprites, animacao = false, aparecer}) {
        this.posicao = posicao
        this.image = image
        this.quadros = {...quadros, val: 0, intervalo: 0}
        this.image.onload = () => {
            this.width = this.image.width / this.quadros.max
            this.height = this.image.height
        }   
        this.animacao = animacao,
        this.sprites = sprites
        this.aparecer = true
        this.quizUsado = false
    }

    desenhar() {
        if (this.aparecer){
            ctx.drawImage(
                this.image,
                this.quadros.val * this.width, 
                0,
                this.image.width / this.quadros.max,
                this.image.height,
                this.posicao.x,
                this.posicao.y,
                this.image.width / this.quadros.max,
                this.image.height
            )
        }
        

        if (!this.animacao) return

        if (this.quadros.max > 1) {this.quadros.intervalo++}

        //Intervalo Animacao
        if (this.quadros.intervalo % this.quadros.hold === 0) {
            if (this.quadros.val < this.quadros.max - 1) this.quadros.val++
            else this.quadros.val = 0
          }
    }
}

// ---------------
class Personagem extends Sprite {
    constructor({posicao, velocidade, image, quadros = { max: 1, hold: 10}, sprites, animacao = false, dialogo = [''], aparecer, nome}) {
      super({
        posicao,
        velocidade,
        image,
        quadros,
        sprites,
        animacao,
        aparecer
      })
      this.aparecer = aparecer
      this.nome = nome
      this.dialogo = dialogo
      this.dialogoIndex = 0
    }
  }