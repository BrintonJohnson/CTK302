var bubbles = [];
let vanilla, chocolate, mint, bg, music;

function preload() {
  music = loadSound("assets/pianomusic.mp3");
}

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  // let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = "16OI6MdzQkXZNQai4QdtOc59yd7ePS-cydoq7CKayWbw";
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  // music.loop();

  vanilla = loadImage("assets/vanilla.png");
  chocolate = loadImage("assets/chocolate.png");
  mint = loadImage("assets/mint.png");
  bg = loadImage("assets/neapolitanicecream.jpg");
}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Flavor, data[i].Place, data[i].Type)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background(220);
  image(bg, width/2, height/2, 600, 600);
  // text("Click to Play/Pause Music", 90, 30);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}

// function mouseReleased() {
//   if (music.isPlaying()){
//     music.pause();
//   } else {
//     music.loop();
//   }
// }

// my Bubble class
class Bubble {

  constructor(myName, myFlavor, myPlace, myType) {
    this.name = myName;
    this.flavor = myFlavor;
    this.place = myPlace;
    this.type = myType;
    this.pos = createVector(random(width), random(height));
    this.vel = random(1, 3);
  }


  display() {
    // if (this.shape == "Square") {
    //   rect(this.pos.x, this.pos.y, 50, 50);
    //   // image(name, this.pos.x...)
    // } else {
    //   ellipse(this.pos.x, this.pos.y, 50, 50);
    // }

    if (this.flavor == "Vanilla") {
      image(vanilla, this.pos.x, this.pos.y, 120, 120);
    }
    if (this.flavor == "Chocolate") {
      image(chocolate, this.pos.x, this.pos.y, 120, 120);
    }
    if (this.flavor == "Mint") {
      image(mint, this.pos.x, this.pos.y, 120, 120);
    }

    // ellipse(this.pos.x, this.pos.y, 80, 80);
    text(this.name, this.pos.x, this.pos.y - 24);
    text(this.flavor, this.pos.x, this.pos.y - 8);
    text(this.place, this.pos.x, this.pos.y + 8);
    text(this.type, this.pos.x, this.pos.y + 24);
  }

  drive() {
    this.pos.x = this.pos.x + this.vel;
    if (this.pos.x > width) this.pos.x = 0;
  }
}

// Questionaire: https://docs.google.com/forms/d/e/1FAIpQLSfgWXQLuO6AiZ6-o42il8C_CqdAtYOgGNilnfmqFV0kihHYxw/viewform
// Spreadsheet: https://docs.google.com/spreadsheets/d/16OI6MdzQkXZNQai4QdtOc59yd7ePS-cydoq7CKayWbw/edit#gid=693215395
