var mic;
var vol;
var c0, c1, c1blue, c1lines, c1red, c2, c2blue, c2red, c3;
let state = 0;
let lineloop = 0;
let r = 0;
let bluestate = 0;
let b = 0;
let bSize = 50;
let bX = 210;
let bY = 190;
let rSize = 50;
let rX = 195;
let rY = 190;
let timer = 0;

function setup() {
  createCanvas(721, 721);
  textAlign(CENTER);

  mic = new p5.AudioIn();
  mic.start();

  c0 = loadImage("assets/case0.png");
  c1 = loadImage("assets/case1.png");
  c1blue = loadImage("assets/case1blue.png");
  c1red = loadImage("assets/case1red.png");
  c1lines = loadImage("assets/case1lines.png");
  c2 = loadImage("assets/case2.png");
  c2blue = loadImage("assets/case2blue.png");
  c2red = loadImage("assets/case2red.png");
  c3 = loadImage("assets/case3.png");
}

function draw() {

  switch (state) {
    case 0:
      image(c0, 0, 0, 721, 721);
      textSize(40);
      fill("black");
      text("Click to Start!", width/2, 130);
      break;

    case 1:
      image(c1, 0, 0, 721, 721);

      //road loop
      image(c1lines, 0, lineloop, 721, 721);
      image(c1lines, 0, lineloop - 721, 721, 721);
      lineloop = lineloop + 5;
      if (lineloop > 721) {
        lineloop = 0;
      }

      //red car
      image(c1red, 0, r + 150, 721, 721);
      vol = (mic.getLevel()).toFixed(2);
      if (vol > .01) {
        r = r - 10;
      }
      if (r < -650) {
        state = 2;
      }

      //blue car
      switch (bluestate) {
        case 0:
          image(c1blue, 0, b + 150, 721, 721);
          b = b - 1;
          if (b < -80) {
            b = -80;
            bluestate = 1;
          }
          break;

        case 1:
          image(c1blue, 0, b + 150, 721, 721);
          b = b + 1;
          if (b > 0) {
            b = 0;
            bluestate = 0;
          }
          break;
      }

      textSize(30);
      fill("white");
      text("Cheer for the red car!", width/2, 700);
      break;

    case 2:
      image(c2, 0, 0, 721, 721);

      //animation blue car
      image(c2blue, bX, bY, bSize, bSize);
      bSize = bSize + 0.5;
      bX = bX + 0.5;
      bY = bY - 0.05;
      // acceleration?
      if (rSize > 75) {
        bSize = bSize + 0.1;
        bY = bY - 0.05;
      }
      if (rSize > 100) {
        bSize = bSize + 0.1;
        bY = bY - 0.05;
      }

      //animation red car
      image(c2red, rX, rY, rSize, rSize);
      rSize = rSize + 1;
      rX = rX - 0.3;
      rY = rY - 0.3;
      // acceleration?
      if (rSize > 75) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 100) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 125) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 150) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 175) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 200) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 225) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 250) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 275) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 300) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 325) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 350) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 375) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 400) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 425) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 450) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 475) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 500) {
        rSize = rSize + 1;
        rX = rX - 0.3;
        rY = rY - 0.3;
      }
      if (rSize > 525) {
        rSize = rSize + 2;
        rX = rX - 0.6;
        rY = rY - 0.6;
      }
      if (rSize > 550) {
        rSize = rSize + 2;
        rX = rX - 0.6;
        rY = rY - 0.6;
      }
      if (rSize > 575) {
        rSize = rSize + 2;
        rX = rX - 0.6;
        rY = rY - 0.6;
      }
      if (rSize > 600) {
        rSize = rSize + 2;
        rX = rX - 0.6;
        rY = rY - 0.6;
      }
      if (rSize > 625) {
        rSize = rSize + 2;
        rX = rX - 0.6;
        rY = rY - 0.6;
      }
      if (rSize > 650) {
        rSize = rSize + 2;
        rX = rX - 0.6;
        rY = rY - 0.6;
      }
      if (rSize > 675) {
        rSize = rSize + 2;
        rX = rX - 0.6;
        rY = rY - 0.6;
      }
      if (rSize > 700) {
        rSize = rSize + 2;
        rX = rX - 0.6;
        rY = rY - 0.6;
      }

      // timer
      timer = timer + 1;
      if (timer > 2.7 * 60) {
        state = 3;
        timer = 0;
      }
      break;

    case 3:
      image(c3, 0, 0, 721, 721);
      textSize(50);
      fill("black");
      text("You Win!", width/2, 80);
      textSize(15);
      text("Click to play again.", width/2, 120);

      lineloop = 0;
      r = 0;
      bluestate = 0;
      b = 0;
      bSize = 50;
      bX = 210;
      bY = 190;
      rSize = 50;
      rX = 195;
      rY = 190;
      timer = 0;
      break;
  }
}

function mouseReleased() {
  if (state == 0) {
    state = 1;
  }
  if (state == 3) {
    state = 0;
  }
}

function touchStarted() {
  getAudioContext().resume();
}

// 10/1/20 Thursday 2 pm - 4:30 pm, 6:30 pm - 8:30 pm
// 10/6/20 Tuesday 11:30 am -
// CODE FREEZE: 10/7/20 Wednesday 8:00 pm
