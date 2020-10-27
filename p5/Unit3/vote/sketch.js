let cars = [];
let f1, f2, f3;
let bg;
let fonts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  f1 = loadFont("assets/KGChasingCars.ttf");
  f2 = loadFont("assets/rock.ttf");
  f3 = loadFont("assets/spaceage.ttf");
  bg = loadImage("assets/fallPic.jpg");

  fonts = [f1, f2, f3];

  // Spawn 20 objects
  for (let i = 0; i < 20; i++) {
    cars.push(new Car());
  }
}

function draw() {
  background(100);
  image(bg, 0, 0, width, height);


  // display and move 20 objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
  }

}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-8, 8), random(-8, 8));
    this.size = random(60, 180);
    this.c = color(random(150, 200), random(0, 50), random(0, 50));

    let b = floor(random(3));
    this.font = fonts[b];
  }

  // methods

  display() {
    fill(this.c);
    textFont(this.font);
    textSize(this.size);
    text("vote", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
