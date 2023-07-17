//códigos dos carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 3.2, 2.5, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

//variaveis do carro 1
let xCarro = 600;

//variaveis do carro 2
let xCarro2 = 600;

//variaveis do carro 3
let xCarro3 = 600;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
   image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < velocidadeCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < xCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
  }
  }
}

function passouTodaATela(xCarros){
  return xCarros < - 50;
}