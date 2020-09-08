function setup() {
  createCanvas(800, 800);
}

function draw() {
  fill(random(255), random(255), random(255));
  rect(mouseX, mouseY, random(50,150), random(50,150));
}

function mouseReleased() {
  saveCanvas('myPicture', 'png');
  //DOWNLOADS PNG image
  background(100);
}
