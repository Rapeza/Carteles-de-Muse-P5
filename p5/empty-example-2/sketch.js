var imagen;
let cancion;
let oreja = false;
var fuente;
var raton;
let ejeX;
let ejeY;
let colores = 10000;
let posicion = 0;

//Carga las imagenes, fuentes, canciones...
function preload() {
  imagen = loadImage("muse.png"); 
  cancion = loadSound("algoritmo.mp3");
  fuente = loadFont("pixel.ttf");
  raton = loadImage("theory.png");
}

  //Hace que suene la canción al cargar la página
  function escuchar(){
    if(oreja == false){
      cancion.play();
      oreja = true;
  }
}


function setup() {
  createCanvas(windowWidth-1, windowHeight-5);
  noCursor();

  textFont(fuente);
  textSize(45);

}

function draw() {

  //Hace que la imagen del cursor se repita y vaya desapareciendo (como en la portada del cd)
  noFill();
  fill(0, 15);
  rect(0, 0, width, height);
  fill(255, 0,255);
  image(raton, mouseX, mouseY, 160, 160);

  escuchar();

  //Logo de muse + función de vibración
  image(imagen, ejeX, ejeY, 500);
  moverlogo();

  //Crea un "latido" en la fecha para marcar el ritmo (durante un instante hace que cambie el tamaño y color de la tipo
  //(depués desaparece lentamente gracias al apartado del la imagen del cursor
  if (colores==10000){
    fill(255);
    textSize(56);
    posicion = windowWidth/2-425;
    colores = colores - 8000;
  }
  else{
    fill(255,0,255);
    textSize(45);
    colores = colores + 100;
    posicion = windowWidth/2-350;
  }

  //Texto de la fecha
  text("MADRID 26 JULIO", posicion, 600);

}

//Hace vibrar el logo a través de números aleatorios
function moverlogo(){
  ejeX= windowWidth/2-275 + random(-5, 5);
  ejeY= height/2-170 + random(-5, 5);
}
