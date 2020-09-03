var f, f1;

function setup() {
  createCanvas(800, 800);

  f = loadFont("assets/Khaleefa.otf");
  f1 = loadFont("assets/apollo.otf");

  textAlign(CENTER);
}

function draw() {
  background(100);

  textFont(f);
  textSize(60);
  text('Hello', width/2, height/2);

  textFont(f1);
  textSize(60);
  text('world!', width/2, height/2+80);
}
