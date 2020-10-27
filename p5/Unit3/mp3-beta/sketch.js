var background, buuble, fish1R, fish1L, fish2R, fish2L, fish3R, fish3L, lose, mainfish, mainfishR, mainfishL, titlescreen, win;
let cars = [];
let maxCars = 10;
let frogPos;
let state = 0;
let timer = 0;
let fishimagesR = [];
let fishimagesL = [];
let mySize = 0.5;

function setup() {
  createCanvas(600, 600);
  frogPos = createVector(width/2, height/2);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  background = loadImage("assets/background.png");
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
  titlescreen = loadImage("assets/titlescreen.png");
  win = loadImage("assets/win.png");


  fishimagesR = [fish1R, fish2R, fish3R];
  fishimagesL = [fish1L, fish2L, fish3L];

  // Spawn cars
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  // Spawn bubbles
  // for (let i = 0; i < maxCars; i++) {
  //   cars.push(new Car());
  // }

}

function draw() {
  switch (state) {
    case 0:
      image(titlescreen, width/2, height/2, width, height);
      break;

    case 1:
      game();
      timer++;
      if (timer > 10 * 60) {
        state = 3;
      }
      break;

    case 2:
      image(win, width/2, height/2, width, height);
      break;

    case 3:
      image(lose, width/2, height/2, width, height);
      break;
  }

}

function game() {
  image(background, width/2, height/2, width, height);

  // display and move bubbles
  // for (let i = 0; i < cars.length; i++) {
  //    cars[i].display();
  //    cars[i].move();
  //  }

  // display and move cars
  for (let i = 0; i < cars.length; i++) {
     cars[i].display();
     cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      mySize += 0.05;
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  // draw the frog (main fish)
  image(mainfish, frogPos.x, frogPos.y, 200 * mySize, 125 * mySize);
  checkForKeys();
}

function resetTheGame() {
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
  mySize = 0.5;
  frogPos.x = width/2;
  frogPos.y = height/2;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // they won
      resetTheGame();
      state = 0;
      break;

    case 3: //they lost
      resetTheGame();
      state = 0;
      break;
  }
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
