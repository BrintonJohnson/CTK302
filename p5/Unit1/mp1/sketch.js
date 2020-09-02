function setup() {
createCanvas(500, 500);
angleMode(DEGREES);
}
//Comment

function draw() {
  background(181, 251, 255);

  //textSize(10);
  //fill(0);
  //text(mouseX + ', ' + mouseY, 5, 10);

  //Ground
  fill(38, 194, 29);
  rect(0, 330, width, 170);

  //Sun
  fill(255, 255, 0);
  ellipse(500, 0, 100, 100);

  //Path
  fill(237, 180, 88);
  quad(250, 330, 140, 500, 500, 500, 270, 330);

  //Trees
  fill(112, 64, 4);
  rect(200, 290, 10, 40);
    fill(15, 145, 21);
    ellipse(205, 280, 30, 40);
  fill(112, 64, 4);
  rect(470, 290, 10, 40);
    fill(15, 145, 21);
    ellipse(475, 280, 30, 40);

  //Lion Body
  fill(237, 180, 88);
  rect(0, 300, 75, 90);

  //Lion Head
  fill(186, 134, 54);
  ellipse(75, 300, 130, 150);
  fill(237, 180, 88);
  ellipse(80, 300, 90, 90);

  //Lion Eyes
  fill(0);
  ellipse(65, 290, 15, 15);
    fill(255);
    ellipse(67, 288, 10, 10);
  fill(0);
  ellipse(105, 290, 15, 15);
    fill(255);
    ellipse(107, 288, 10, 10);

  //Lion Mouth
  fill(255);
  triangle(70, 322, 75, 332, 80, 322);
  fill(255);
  triangle(100, 322, 105, 332, 110, 322);
    fill(237, 180, 88);
    arc(75, 310, 30, 30, 0, 130);
    fill(237, 180, 88);
    arc(105, 310, 30, 30, 50, 180);

  //Lion Nose
  fill(112, 64, 4);
  arc(90, 305, 10, 10, 0, 180, CHORD);

  //Grass
  fill(15, 145, 21);
  triangle(0, 450, 0, 150, 5, 450);
  fill(15, 145, 21);
  triangle(5, 450, 15, 150, 25, 450);
  fill(15, 145, 21);
  triangle(25, 450, 35, 150, 45, 450);
  fill(15, 145, 21);
  triangle(45, 450, 55, 150, 65, 450);
  fill(15, 145, 21);
  triangle(65, 450, 75, 150, 85, 450);
  fill(15, 145, 21);
  triangle(85, 450, 95, 150, 105, 450);
  fill(15, 145, 21);
  triangle(105, 450, 115, 150, 125, 450);
  fill(15, 145, 21);
  triangle(125, 450, 135, 150, 145, 450);

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

  //Text
  textSize(20);
  fill(0);
  text('This is Gary. He is an adventurer.', 100, 40);
  text('He is also oblivious.', 160, 70);

  textSize(40);
  fill(255);
  text('Click', 200, 480);

if(mouseIsPressed) {
  background(181, 251, 255);

  //textSize(10);
  //fill(0);
  //text(mouseX + ', ' + mouseY, 5, 10);

  //Ground
  fill(38, 194, 29);
  rect(0, 330, width, 170);

  //Sun
  fill(255, 255, 0);
  ellipse(500, 0, 100, 100);

  //Path
  fill(237, 180, 88);
  quad(250, 330, 140, 500, 500, 500, 270, 330);

  //Trees
  fill(112, 64, 4);
  rect(200, 290, 10, 40);
    fill(15, 145, 21);
    ellipse(205, 280, 30, 40);
  fill(112, 64, 4);
  rect(470, 290, 10, 40);
    fill(15, 145, 21);
    ellipse(475, 280, 30, 40);

  //Lion Back Legs
  fill(237, 180, 88);
  rect(80, 340, 20, 100);
  fill(237, 180, 88);
  rect(115, 365, 20, 70);

  //Lion Tail
  fill(237, 180, 88);
  quad(90, 333, 33, 306, 29, 310, 85, 343);
  fill(186, 134, 54);
  ellipse(29, 308, 20, 20);


  //Lion Body
  fill(237, 180, 88);
  quad(190, 230, 80, 340, 140, 400, 250, 290);

  //Lion Legs
  fill(237, 180, 88);
  rect(190, 280, 30, 80);
  fill(237, 180, 88);
  rect(255, 280, 30, 70);

  //Lion Head
  fill(186, 134, 54);
  ellipse(75+160, 300-70, 130, 150);
  fill(237, 180, 88);
  ellipse(80+160, 300-70, 90, 90);

  //Lion Eyes
  fill(0);
  ellipse(65+160, 290-70, 15, 15);
    fill(255);
    ellipse(67+160, 288-70, 10, 10);
  fill(0);
  ellipse(105+160, 290-70, 15, 15);
    fill(255);
    ellipse(107+160, 288-70, 10, 10);

  //Lion Nose
  fill(112, 64, 4);
  arc(90+160, 305-70, 10, 10, 0, 180, CHORD);

  //Grass
  fill(15, 145, 21);
  triangle(0, 450, 0, 150, 5, 450);
  fill(15, 145, 21);
  triangle(5, 450, 15, 150, 25, 450);
  fill(15, 145, 21);
  triangle(25, 450, 35, 150, 45, 450);
  fill(15, 145, 21);
  triangle(45, 450, 55, 150, 65, 450);
  fill(15, 145, 21);
  triangle(65, 450, 75, 150, 85, 450);
  fill(15, 145, 21);
  triangle(85, 450, 95, 150, 105, 450);
  fill(15, 145, 21);
  triangle(105, 450, 115, 150, 125, 450);
  fill(15, 145, 21);
  triangle(125, 450, 135, 150, 145, 450);

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

  //Lion Mouth
  fill(255);
  triangle(70+160, 322-70, 75+160, 332-70, 80+160, 322-70);
  fill(255);
  triangle(100+160, 322-70, 105+160, 332-70, 110+160, 322-70);
    fill(237, 180, 88);
    arc(75+160, 310-70, 30, 30, 0, 150);
    fill(237, 180, 88);
    arc(105+160, 310-70, 30, 30, 30, 180);

  //Text
  textSize(20);
  fill(0);
  text('Watch out for lions!', 160, 50);

  textSize(30);
  fill(255);
  text('Click', 210, 475);
}

}

//Thursday 12:04 pm - 2:09 pm I made the character, ground, sky, path, and grass.
//Thursday 2:33 pm - 4:20 pm I made the lion, trees, and text.
// Thursday 8:44 pm - 10:09 pm I made the mouse click interactive, I changed the position of the lion, added more details to the lion, and changed the text.
