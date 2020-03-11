var a = 50, b = 80;
var c;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  //comentario de una línea
  /*comentarios de 
  más líneas */
  //background(0,100,100);
  fill(random (0,360),100,100);
  noStroke(); 
  c = a * random (1,2);
  ellipse(mouseX,mouseY,c,c);
  frameRate (10)
  
  
}
