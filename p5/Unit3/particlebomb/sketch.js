let cars = [];
var bomb;

function setup() {
  createCanvas(700, 700);
  bomb = loadImage("assets/bomb.png");
  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }
  noStroke();
  imageMode(CENTER);
}

function draw() {
  background('grey');
  image(bomb, width/2, height/2, 425, 360);
  fill('grey');
  rect(480, 180, 80, 140);
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
  // fill('white');
  // text(mouseX + ", " + mouseY, 10, 20);
}

class Car {

  constructor() {
    // attributes
    this.pos = createVector(485, 260);
    this.vel = createVector(random(0, 5), random(-5, 0));
    this.r = random(205, 255);
    this.g = random(80, 180);
    this.b = 0;
    this.a = random(200, 255);
  }

  // methods
  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }

}
