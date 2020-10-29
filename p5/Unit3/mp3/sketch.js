var background, bubble, fish1R, fish1L, fish2R, fish2L, fish3R, fish3L, lose, mainfish, mainfishR, mainfishL, seaweed, titlescreen, win;
let bubbleSound, gameSong, loseSong, highC, lowC, titleSong, winSong;
let cars = [];
let maxCars = 10;
let frogPos;
let state = 0;
let timer = 0;
let countdown = 0;
let fishimagesR = [];
let fishimagesL = [];
let mySize = 0.5;
let bubbles = [];
let maxBubbles = 6;
let f;

function preload() {
  bubbleSound = loadSound("assets/bubble.mp3");
  gameSong = loadSound("assets/gamesong.mp3");
  loseSong = loadSound("assets/losesong.mp3");
  highC = loadSound("assets/pianoHighC.mp3");
  lowC = loadSound("assets/pianoLowC.mp3");
  titleSong = loadSound("assets/titlesong.mp3");
  winSong = loadSound("assets/winsong.mp3");

  bubbleSound.play();
  bubbleSound.stop();
  gameSong.play();
  gameSong.stop();
  loseSong.play();
  loseSong.stop();
  highC.play();
  highC.stop();
  lowC.play();
  lowC.stop();
  titleSong.play();
  titleSong.stop();
  winSong.play();
  winSong.stop();
}

function setup() {
  createCanvas(600, 600);
  frogPos = createVector(width / 2, height / 2);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  background = loadImage("assets/background.png");
  f = loadFont("assets/berlinsans.TTF");
  bubble = loadImage("assets/bubble.png");
  fish1R = loadImage("assets/fish1-r.png");
  fish1L = loadImage("assets/fish1-l.png");
  fish2R = loadImage("assets/fish2-r.png");
  fish2L = loadImage("assets/fish2-l.png");
  fish3R = loadImage("assets/fish3-r.png");
  fish3L = loadImage("assets/fish3-l.png");
  lose = loadImage("assets/lose.png");
  mainfishR = loadImage("assets/mainfish-r.png");
  mainfishL = loadImage("assets/mainfish-l.png");
  mainfish = mainfishR;
  seaweed = loadImage("assets/seaweed.png");
  titlescreen = loadImage("assets/titlescreen.png");
  win = loadImage("assets/win.png");

  fishimagesR = [fish1R, fish2R, fish3R];
  fishimagesL = [fish1L, fish2L, fish3L];

  // Spawn cars
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  // Spawn bubbles
  for (let i = 0; i < maxBubbles; i++) {
    bubbles.push(new Bubble());
  }

}

function draw() {
  switch (state) {
    case 0:
      titleSong.play();
      state = 1;
      break;

    case 1:
      image(titlescreen, width / 2, height / 2, width, height);
      break;

      // Objective
    case 2:
      image(background, width / 2, height / 2, width, height);
      textFont(f);
      textSize(50);
      fill("white");
      text("Eat all of the fish\nbefore time runs out!", width / 2, height / 2);
      countdown++;
      if (countdown > 2 * 60) {
        state = 3;
      }
      break;

      // countdown starts
    case 3:
      lowC.play();
      state = 4;
      break;

    case 4:
      image(background, width / 2, height / 2, width, height);
      textSize(80);
      text("3", width / 2, height / 2);
      countdown++;
      if (countdown > 3 * 60) {
        state = 5;
      }
      break;

    case 5:
      lowC.play();
      state = 6;
      break;

    case 6:
      image(background, width / 2, height / 2, width, height);
      text("2", width / 2, height / 2);
      countdown++;
      if (countdown > 4 * 60) {
        state = 7;
      }
      break;

    case 7:
      lowC.play();
      highC.play();
      // bubbleSound.volume(0.4);
      bubbleSound.play();
      state = 8;
      break;

    case 8:
      image(background, width / 2, height / 2, width, height);
      text("1", width / 2, height / 2);
      countdown++;
      if (countdown > 5 * 60) {
        state = 9;
      }
      break;

      // game starts

    case 9:
      gameSong.play();
      state = 10;
      break;

    case 10:
      game();
      timer++;
      if (timer > 10 * 60) {
        state = 13;
      }
      break;

      // win

    case 11:
      bubbleSound.stop();
      gameSong.stop();
      winSong.play();
      state = 12;
      break;

    case 12:
      image(win, width / 2, height / 2, width, height);
      break;

    case 13:
      bubbleSound.stop();
      gameSong.stop();
      loseSong.play();
      state = 14;
      break;

      // lose
    case 14:
      image(lose, width / 2, height / 2, width, height);
      break;
  }

}

function game() {
  image(background, width / 2, height / 2, width, height);

  // display and move bubbles
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

  // display and move cars
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 60) {
      cars.splice(i, 1);
      mySize += 0.05;
    }
  }

  if (cars.length == 0) {
    state = 11;
  }

  // draw the main fish
  image(mainfish, frogPos.x, frogPos.y, 200 * mySize, 125 * mySize);
  checkForKeys();

  // draw seaweed
  image(seaweed, 100, height - 50, 78, 119);
  image(seaweed, 400, height - 50, 78, 119);
}

function resetTheGame() {
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
  countdown = 0;
  mySize = 0.5;
  frogPos.x = width / 2;
  frogPos.y = height / 2;

  bubbles = [];
  for (let i = 0; i < maxBubbles; i++) {
    bubbles.push(new Bubble());
  }

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased() {
  switch (state) {
    case 1:
      state = 2;
      break;

    case 12: // they won
      resetTheGame();
      state = 0;
      break;

    case 14: //they lost
      resetTheGame();
      state = 0;
      break;
  }

  titleSong.stop();
  loseSong.stop();
  winSong.stop();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) mainfish = mainfishL;
  if (keyCode === RIGHT_ARROW) mainfish = mainfishR;
}


// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.size = random(0.2, 0.8);

    this.type = floor(random(3));

  }

  // methods

  display() {
    // textFont(this.font);
    // textSize(this.size);
    // push();
    // scale(this.size);
    if (this.vel.x > 0) {
      image(fishimagesR[this.type], this.pos.x, this.pos.y, 200 * this.size, 125 * this.size);
    } else {
      image(fishimagesL[this.type], this.pos.x, this.pos.y, 200 * this.size, 125 * this.size);
    }

    // pop();
    // image(fish2, this.pos.x, this.pos.y);
    // image(fish3, this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}

// Bubble class
class Bubble {

  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height + 50, height - 350));
    this.vel = createVector(0, random(-1, -5));
    this.size = random(0.4, 1);
  }

  // methods
  display() {
    image(bubble, this.pos.x, this.pos.y, this.size * 27, this.size * 27);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
