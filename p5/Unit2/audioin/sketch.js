var mic;
var vol;
var c = 'green';
let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .001) { // if the volume is LOUD?
    // do something
    // c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
    x = x + 5;
  }

  // blue car
  fill('blue');
  rect(x, 300, 50, 20);

  fill(100);
  ellipse(x + 10, 320, 15, 15);

  fill(100);
  ellipse(x + 40, 320, 15, 15);

  //red car
  fill('red');
  rect(x - 200, 265, 100, 40);

  fill(100);
  ellipse(x - 180, 305, 30, 30);

  fill(100);
  ellipse(x - 120, 305, 30, 30);

  // extra stuff for debugging
  textSize(18);
  fill('white');
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
