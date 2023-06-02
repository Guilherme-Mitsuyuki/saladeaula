function executarJogo(){
    background(fundo);
    jogador.mova();
    // usado para configurar o trajeto do objeto
    for (let i = 0; i < estudo.length; i++) {
      estudo[i].mova();
      if (estudo[i].posY > 400) {
        estudo[i] = new Itens(estudo[i].podddsY);
      }
  
      //colisão do jogador com o objeto
      if (
        jogador.xInicial < estudo[i].xFinal &&
        jogador.xFinal > estudo[i].xInicial &&
        jogador.yInicial < estudo[i].yFinal &&
        jogador.yInicial > estudo[i].yInicial
      ) // colisão do objeto bomba com o jogador
        if (estudo[i].imagem == objetos[8]) {
          //som ao pegar objeto bomba
          som.play();
          
          vidas--;
          estudo[i] = new Itens(estudo[i].posY);
          
        }//som ao pegar objeto
        else {
          pontos += 1;
          estudo[i] = new Itens(estudo[i].posY);
          escola.play();
        }
        if (vidas ==0){
          mostraFim();
          tela = "fim";
          vidas=3;
          pontos = 0;
        }
    }//pontuação
    text("pontos:" + pontos, 10, 60);
    text("Vidas:" + vidas, 473, 50);
}