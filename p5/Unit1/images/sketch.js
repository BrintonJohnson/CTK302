var img1, img2, img3;


function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);

  img1 = loadImage("assets/bed.png");
  img2 = loadImage("assets/binoculars.png");
  img3 = loadImage("assets/window.jpg");

}

function draw() {

  image(img1, width/2, height/2-210, 200, 200);
  image(img2, width/2, height/2, 200, 200);
  image(img3, width/2, height/2+210, 200, 200);

}
