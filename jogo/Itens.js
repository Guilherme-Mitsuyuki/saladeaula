class Itens {
  constructor(parametroX) {
    this.imagem = objetos[int(random(0, 8.9))];
    this.posX = random(10, 560);
    this.posY = 40;
    this.velocidade = random(1, 3) + pontos;
    this.largura = 70;
    this.altura = 50;
    this.yInicial = this.posY;
    this.yFinal = this.posY + this.altura;
    this.xInicial = this.posX;
    this.xFinal = this.posX + this.largura;
  }
  //movimento dos objetos
  mova() {
    this.posY += this.velocidade;
    image(this.imagem, this.posX, this.posY, this.largura, this.altura);
    this.yInicial = this.posY;
    this.yFinal = this.posY + this.altura;
    this.xInicial = this.posX;
    this.xFinal = this.posX + this.largura;
  }
}