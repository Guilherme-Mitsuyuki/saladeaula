// as variaveis para guardar informações sobre o jogo
let fundo;
let estudo = [];
let jogador;
let objetos = [];
let pontos = 0;
let som;
let escola;
let abertura;
let tela ="INICIO";
let over;
let vidas = 3;
// lugar onde fica as informações do objeto

// classe do jogador


//função que carrega as informações do jogo
function preload() {
  fundo = loadImage("./jogo/imgjogo/preto.jpg");
  objetos[0] = loadImage("jogo/imgjogo/b.png");
  objetos[1] = loadImage("jogo/imgjogo/caneta.png");
  objetos[2] = loadImage("jogo/imgjogo/lapis.png");
  objetos[3] = loadImage("jogo/imgjogo/+.jpg");
  objetos[4] = loadImage("jogo/imgjogo/-.png");
  objetos[5] = loadImage("./jogo/imgjogo/x.png");
  objetos[6] = loadImage("jogo/imgjogo/div.png");
  objetos[7] = loadImage("jogo/imgjogo/borracha.png");
  objetos[8] = loadImage("jogo/imgjogo/14.png");
  objetos[9] = loadImage("jogo/imgjogo/fone.png");
  abertura= loadImage("./img_site/tela inicial.png");
  over = loadImage("./img_site/final.gif");
  jogador = new Prof();
  estudo[0] = new Itens(200);
  estudo[1] = new Itens(200);
  estudo[2] = new Itens(200);
  //carregando o som para o jogo
  som = loadSound("som/som.mp3");
  escola = loadSound("som/peido.mp3");

  //função que prepara o formato do jogo
}
function setup() {
  createCanvas(600, 400).parent("jogo");
}
//executa a função mova do jogador
function keyPressed() {
  if (keyCode==13){
    tela="jogo";
  }
}



function draw() {
  if (tela=="INICIO") {
    mostraAbertura();
  }
  else{
if (tela == "jogo") {
  executarJogo();
}

if ( tela == "fim"){
  mostraFim()
}
  }
}
  
