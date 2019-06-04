let no = -75;
let si = 75;
let tiempo = 10000;
var imagen;
let cancion;
let oreja = false;
var fuente;


function preload() {
  //Carga la imagen, la música y la tipografía
  imagen = loadImage("muse.png"); 
  cancion = loadSound("theDarkSide.mp3");
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
  createCanvas(windowWidth, windowHeight-5);
  noCursor();

  textFont(fuente);
  textSize(45);

  //Hace que el eje de movimiento de los cuadrados esté en el centro para que coincida con las líneas
  rectMode(CENTER);

  //Para cambiar de cian a magenta cada segundo
  setInterval(function ritmo(){ 
    stroke(0,255,255);
  }, 500);

  setInterval(function noritmo(){ 
    stroke(255, 0, 255);
  }, 1000);
}

function draw() {
  background(0);
  escuchar();

  //texto de la fecha
  fill(0);
  text("MADRID 26 JULIO", windowWidth/2-350, 600);

  //Hace que las líneas centrales crezcan marcando el ritmo
  if (tiempo==10000){
    si = 200;
    no = -400;
    tiempo = tiempo - 7000;
  }
  else{
    si = 75;
    no = -75;
    tiempo = tiempo + 100;
    }

  //Crea números aleatorios para que las lineas estén siempre en movimiento
  for (let i = 0; i < width; i++) {
    let r = random(no, si);
    line(i, height/2, i, height/2 + r);
  }

  //Hace que los cuadrados sigan el movimiento del ratón a traves de los ejes X-Y
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
    fill(191, 0, 179);
    rect(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
    fill(128, 0, 119);
    rect(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);

  //Logo estático de Muse
  image(imagen, windowWidth/2-275, height/2-170, 500);
}