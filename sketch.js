// Matthew Wizinsky, University of Cincinnati
// Generative Design Systems
//Image01_ Draw Image 

var img;

function preload() {
  img = loadImage('data/Chinatown-1974.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(img.width + ' x ' + img.height);
  rectMode(CENTER);
}

function draw() {
  background(255,255,0);
  // change scale by mapping mouseX - makes  a denominator to divid the image size
  var imgScale = map(mouseX, 0, width, 10, 1);

  // draw  image at mouse position  
  image(img, mouseX, mouseY, img.width / imgScale, img.height / imgScale);
}
