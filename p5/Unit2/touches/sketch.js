let numberOfTouches ;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  fill('black');
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22) ;
      break ;

      case 1:
      fill('black');
      text("it's kind of lonely here", 5, 22) ;
            // put a picture here
            fill('red');
            ellipse(300, 350, 100, 100);
      break ;

      case 2:
      fill('black');
      text("two fingers are touching the screen", 5, 22) ;
            // put a picture here
            fill('red');
            ellipse(300, 350, 100, 100);
            fill('green');
            ellipse(400, 220, 100, 100);
      break ;

      case 3:
      fill('black');
      text("three are touching the screen", 5, 22) ;
            // put a picture here
            fill('red');
            ellipse(300, 350, 100, 100);
            fill('green');
            ellipse(400, 220, 100, 100);
            fill('orange');
            ellipse(500, 350, 100, 100);
      break ;

  }

}
