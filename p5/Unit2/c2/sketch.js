var mic;
var vol;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  switch(state) {
    case 0:
      background('red');
      textSize(30);
      text("Shh!", 250, 250);

      vol = (mic.getLevel()).toFixed(2);
      if (vol > .01) {
        state = 1;
        timer = 0;
      }
    break;

    case 1:
      background('green');
      textSize(30);
      text("Quiet down!", 250, 250);

      timer = timer + 1;
      if (timer > 2 * 60) {
        state = 0;
      }
    break;

  }
}

function touchStarted() {
  getAudioContext().resume();
}
