let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch(state) {
    case 0:
      background('red');
      textSize(30);
      text("state 0", 250, 250);
    break;

    case 1:
      background('green');
      textSize(30);
      text("state 1", 250, 250);
    break;

    case 2:
      background('blue');
      textSize(30);
      text("state 2", 250, 250);
    break;

    case 3:
      background('white');
      textSize(30);
      text("state 3", 250, 250);
    break;
  }

}

function mouseReleased() {
  state = state + 1;

  if (state > 3) {
    state = 0;
  }
}
