const Y_AXIS = 0;
let c1, c2;
var imagen;
let cancion;
let oreja = false;
var fuente;
var press=false;

var num = 200;
var ejeY = [];
var ejeX = [];

//Carga las imagenes, fuentes, canciones...
function preload() {
  imagen = loadImage("muse.png"); 
  cancion = loadSound("Break.mp3");
  fuente = loadFont("pixel.ttf");
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

  //Colores para el degradado (Magenta y negro)
  c1 = color(255, 0, 255);
  c2 = color(0);

  //Captura y crea sonido
  noise = new p5.Noise();
  noise.start();
  noise.amp(0);
  env = new p5.Env();
  env.setADSR(0.001, 0.1, 0.2, 0.1);
  env.setRange(1, 0);
  analyzer = new p5.Amplitude();
}

function draw() {
  escuchar();

  //Pinta el degradado
  setGradient(0, 0, windowWidth, windowHeight, c1, c2, Y_AXIS);

  //crea el efecto visor con líneas
  strokeWeight(5);
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY);
  if (mouseIsPressed == true) {
    cursor(WAIT);
  }
  else {
    cursor(CROSS);
  }

  //para acompañar al sonido de la música y al pulsar
  let level = analyzer.getLevel();
  let levelHeight = map(level, 0, 0.4, 0, height);
  noFill(0);
  stroke(255);
  ellipse(width/2.1, height/2, width/2, -levelHeight/2);
  noStroke();
  fill(0);
  ellipse(width/2.1, height/2, width/4, -levelHeight/2);
  
  //Logo de muse
 if(press==false){
    image(imagen, windowWidth/2-275, windowHeight/2-170, 500);
    strokeWeight(0.8);
    stroke(255);
  }
  else{ 
    image(imagen, windowWidth/2-275, height/2-200, 500);
    strokeWeight(0.1);
    stroke(0);
  }

  //Texto de la fecha
  stroke(255);
  noFill();
  text("MADRID 26 JUNIO", windowWidth/2-350, 600);
}

//Mapeando el ejeY para el degradado
function setGradient(x, y, w, h, c1, c2, axis) {
  for (let i = y-50; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }  
}

//Cambia las cosas pulsas con el cursor
function mousePressed() {
  env.play(noise);
  c1 = color(0, 255, 255);
  ellipse(mouseX, mouseY, 10, 10);
  press=true;
  textSize(44); 
}

//Reestablece las cosas de la función anterior cuando dejas de pulsar
function mouseReleased(){
  c1 = color(255, 0, 255);
  press=false;
  textSize(45);
}