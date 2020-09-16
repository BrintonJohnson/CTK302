var x = -400;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(100);

  push();
    translate(x, 0);
    avatar();
    x = x + 5;

    if (x > 300) {
      x = -400;
    }
  pop();
}

function avatar() {

  //Head
  fill(247, 208, 166);
  ellipse(350, 200, 100, 100);

  //Eye 1
  fill(0);
  ellipse(330, 190, 15, 15);
    //Eye 1 White
    fill(255);
    ellipse(328, 188, 10, 10);

  //Eye 2
  fill(0);
  ellipse(370, 190, 15, 15);
    //Eye 2 White
    fill(255);
    ellipse(368, 188, 10, 10);

  //Smile
  noFill();
  arc(350, 195, 70, 70, 50, 130);

  //Hat
  fill(112, 64, 4);
  rect(290, 160, 120, 10);
  fill(112, 64, 4);
  rect(310, 135, 80, 25);

  //Sleeve 1
  fill(87, 140, 60);
  arc(310, 280, 60, 60, 180, 270, PIE);

  //Sleeve 2
  fill(87, 140, 60);
  arc(390, 280, 60, 60, -90, 0, PIE);

  //Body
  fill(87, 140, 60);
  rect(310, 250, 80, 120);

  //Arm 1
  fill(247, 208, 166);
  rect(280, 280, 25, 80);

  //Arm 2
  fill(247, 208, 166);
  rect(395, 280, 25, 80);

  //Leg 1
  fill(166, 143, 90);
  quad(310, 370, 310, 450, 340, 450, 350, 370);

  //Leg 2
  fill(166, 143, 90);
  quad(350, 370, 360, 450, 390, 450, 390, 370);

  //Foot 1
  fill(112, 64, 4);
  rect (295, 450, 45, 20);

  //Foot 2
  fill(112, 64, 4);
  rect (360, 450, 45, 20);

if(mouseIsPressed) {
  background(100);

  //Head
  fill(247, 208, 166);
  ellipse(350, 200, 100, 100);

  //Eye 1
  fill(0);
  ellipse(330, 190, 15, 15);
    //Eye 1 White
    fill(255);
    ellipse(328, 192, 10, 10);

  //Eye 2
  fill(0);
  ellipse(370, 190, 15, 15);
    //Eye 2 White
    fill(255);
    ellipse(368, 192, 10, 10);

  //Smile
  fill(0);
  ellipse(350, 225, 45, 20);

  //Hat
  fill(112, 64, 4);
  rect(290, 160, 120, 10);
  fill(112, 64, 4);
  rect(310, 135, 80, 25);

  //Arm 1
  fill(247, 208, 166);
  rect(210, 250, 80, 25);

  //Arm 2
  fill(247, 208, 166);
  rect(395, 280, 25, 80);

  //Sleeve 1
  fill(87, 140, 60);
  rect(290, 250, 20, 30);

  //Sleeve 2
  fill(87, 140, 60);
  arc(390, 280, 60, 60, -90, 0, PIE);

  //Body
  fill(87, 140, 60);
  rect(310, 250, 80, 120);

  //Leg 1
  fill(166, 143, 90);
  quad(310, 370, 310, 450, 340, 450, 350, 370);

  //Leg 2
  fill(166, 143, 90);
  quad(350, 370, 360, 450, 390, 450, 390, 370);

  //Foot 1
  fill(112, 64, 4);
  rect (295, 450, 45, 20);

  //Foot 2
  fill(112, 64, 4);
  rect (360, 450, 45, 20);

  }

}
