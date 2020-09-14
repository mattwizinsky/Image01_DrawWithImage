// IMAGE DRAW
// Generative Design Systems
// Matthew Wizinsky

var img;

function preload() {
  img = loadImage('data/Chinatown-1974.jpg');
}

function setup() {
  createCanvas(720, 480);
  print(img.width + ' x ' + img.height);
  rectMode(CENTER);
}

function draw() {
  // change scale by mapping mouseX - makes  a denominator to divid the image size
  var imgScale = map(mouseX, 0, width, 10, 1);

  // draw  image at mouse position  
  image(img, mouseX, mouseY, img.width / imgScale, img.height / imgScale);
}