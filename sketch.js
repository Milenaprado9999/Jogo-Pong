
//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis da velocidade da bolinha
let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

//variáveis da raquete.
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// Váriáveis da raquete do oponente.
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

// Placar do jogo.
let meusPontos = 0;
let pontosDoOponente = 0;

// Sons do jogo.
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
   trilha.loop();
}

function draw() {
  
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);      
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
  
}


// Criação da bolinha.


function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro)
}

// Movimentando a bolinha.

function movimentaBolinha(){
   xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;
}

// Verificando a colisao da bolinha com as bordas.

function verificaColisaoBorda(){
  
    if (xBolinha + raio > width ||
        xBolinha - raio < 0 )
      { velocidadeXBolinha *= -1; }
  
    if (yBolinha + raio > height || 
        yBolinha - raio < 0) 
      { velocidadeYBolinha *= -1;}
  
}


// Criação das raquetes.

function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}


// Movimentando a raquete.

function movimentaMinhaRaquete(){
  
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
   
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }  
  
}


// verificando colisao da bolinha com a raquete.

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento
        && yBolinha - raio < yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
  
}

// Movimentando a raquete oponente.

function movimentaRaqueteOponente() {
  
   if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
    }

}


// verificando colisao da bolinha com a raquete do oponente.

function verificaColisaoRaqueteOponente() {
     if (xBolinha + raio > xRaqueteOponente
     && yBolinha + raio < yRaqueteOponente + raqueteAltura
     && yBolinha + raio > yRaqueteOponente - raqueteAltura)
         {velocidadeXBolinha *= -1; 
          raquetada.play(); 
      }
}

// Incluindo um placar para contabilizar os pontos.

function incluiPlacar(){
         stroke(255);
         textAlign(CENTER);
         textSize(16);
         fill(color(255, 140, 0));
         rect(150, 10, 40, 20);
         fill(255);
         text (meusPontos, 170, 26);
         fill (255);
         fill(color(255, 140, 0));
         rect(450, 10, 40, 20);
         fill(255);
         text(pontosDoOponente, 470, 26);
} 

// Contabilizando a pontuação.

function marcaPonto(){
      if (xBolinha > 590){
         meusPontos += 1;
         ponto.play();
     }
      if (xBolinha < 10){
         pontosDoOponente += 1;
         ponto.play();
      }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
        xBolinha = 23;
      
      if(xBolinha + raio > width){
         xBolinha = 590
      }
    }
}
