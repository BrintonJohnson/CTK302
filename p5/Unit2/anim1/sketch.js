var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  //rect(x, 250, 50, 50);
  fill(250);
  textSize(20);
  text("I like to move it, move it.", x, 250);
  x = x + 5;

  if (x > width) {
    x = 0;
  }

}
