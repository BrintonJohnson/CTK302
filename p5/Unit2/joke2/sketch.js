let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
}

function draw() {

  switch(state) {
    case 0:
      background('red');
      fill('black');
      text("Where did the one-legged\nman eat breakfast?", 250, 250);
      // increment the timer variable
      timer = timer + 1;
      //if the timer var is greater than 200
      if (timer > 200) {
        //make it go to state 1
        state = 1;
        timer = 0;
      }

    break;

    case 1:
      background('blue');
      fill('white');
      text("IHOP", 250, 250);
    break;
  }

}
