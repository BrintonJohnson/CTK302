var f;

function setup() {
  createCanvas(800, 800);

  f = loadFont("assets/Khaleefa.otf")
  textAlign(CENTER);
}

function draw() {
  background(100);

  textFont(f);
  textSize(60);

  text('hello', width/2, height/2);
}
