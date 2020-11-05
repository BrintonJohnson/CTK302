// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var x2 = 400;
var windspeed = 0 ;
var name = "";
var spfld, cloud;
var helv, cour;


function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  spfld = loadImage("assets/springfield.png");
  cloud = loadImage("assets/cloud.png");
  helv = loadFont("assets/helvetica.otf");
  cour = loadFont("assets/courier.ttf");

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Springfield,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=5783f388e9bb2091c09a54ea25cb3997'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  name = weather.name;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(150, 200, 255);
      image(cloud, x, 100, 150, 150);
      image(cloud, x2, 200, 100, 100);
      image(spfld, width/2, height/2, 1000, 666);

      fill('black');
      textFont(helv);
      textSize(40);
      text("What is the weather in\n" + weather.name + "?", 20, 50);
      textFont(cour);
      textSize(15);
      text("windspeed is " + windspeed, 30, 140);
      text("humidity is " + humidity + "%", 30, 160);
      text("temperature is " + temperature, 30, 180);


      // cloud
      // fill('white');
      // noStroke();
      // ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed/8;
      if (x > width) x = 0;

      x2 = x2 + windspeed/12;
      if (x2 > width) x2 = 0;

      break;

  }
}
