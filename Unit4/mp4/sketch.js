// variables needed for gyroscope
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;
let cutecloud;
let raindrop;
let song1;
let score = 0;
//added weather data
let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let xweather = 0;
let windspeed = 0
let temperature = 0;
let pressure = 0;
let desc = 0;
let calgary;
let humidity = 0;

// var bunnyImage;
var cars = [];
var frogPos;


function preload() {
  song1 = loadSound("assets/jazz.mp3");
}


function setup() {

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Calgary,AB,CA&units=imperial&";
  let myIDString = "appid=13f45920641ba46ee90196f398775627";
  let myTotalString = myCityString + myIDString;
  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.



  createCanvas(windowWidth, windowHeight);
  song1.loop();
  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;
  cutecloud = loadImage("assets/cutecloud.png");
  raindrop = loadImage("assets/raindrop.png");

  // spawn a bunch of cars
  // for (var i = 0; i < 40; i++) {
  //   cars.push(new Car());
  // }

  // initialize the frog's position
  frogPos = createVector(width / 2, height - 80);

  // load any images you need
  //bunnyImage = loadImage("assets/bunny.jpg");
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  pressure = weather.main.pressure;
  desc = weather.weather[0].description;
  humidity = weather.main.humidity;
}

function draw() {

  switch (state) {

    case 0:
      if (weather) {
        state = 1;
        for (var i = 0; i < humidity; i++) {
          cars.push(new Car());
        }
      }
      break;

    case 1:

      background('#c6f5ff'); // light blue

      // the map command !!!!
      // takes your variable and maps it from range 1 to range 2
      // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
      xPosition = map(gamma, -18, 18, 0, width);
      yPosition = map(beta, 25, 45, 0, height);

      // make it work on computer--
      // frogPos.x = mouseX;
      // frogPos.y = mouseY;
      // xPosition = mouseX;
      // yPosition = mouseY;

      // move the frog around the screen
      push(); // before you use translate, rotate, or scale commands, push and then pop after
      translate(xPosition, yPosition); // move everything over by x, y
      //  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

      // draw the FROG
      image(cutecloud, 0, 0, 100, 100);
      // fill('green');
      // ellipse(0, 0, 80, 80);
      pop();


      // update the frog's position using the accelerometer data
      frogPos.x = xPosition;
      frogPos.y = yPosition;


      // iterate through the car loop to move them and see if we need to delete cars
      for (var i = 0; i < cars.length; i++) {
        cars[i].display();
        cars[i].drive();
        if (cars[i].pos.dist(frogPos) < 50) {
          cars.splice(i, 1);
          score++;
        }
      }

      // MORE DECORATIONS - write that pretty ATK type on top.
      fill('white');
      textSize(40);
      textAlign(CENTER);
      text("It's raining!", width / 2, 600, windowWidth - 200, windowHeight - 200);
      text("humidity is " + humidity, width / 2, 260);

      // Debugging information -- take this out when you're ready for production!
      // Just a bunch of text commands to display data coming in from addEventListeners
      textAlign(LEFT);
      textSize(20);
      // fill('black');
      // text("orientation data:", 25, 25);
      // textSize(15);
      // text("alpha: " + alpha, 25, 50);
      // text("beta: " + beta, 25, 70);
      // text("gamma: " + gamma, 25, 90);
      // textSize(20);
      // text("acceleration data:", 25, 125);
      // textSize(15);
      // text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
      // text("y = " + y, 25, 170);
      // text("z = " + z, 25, 190);
      textSize(20);
      text("collection data:", 25, 225);
      textSize(15);
      text("score = " + score, 25, 245);

      //if my acceleration got kinda big, clear array and respond
      if (x > 5) {
        cars = []; // clear the array first
        for (var i = 0; i < 100; i++) {
          cars.push(new Car());
        }
      }
      break;
  }
}

function deviceShaken() {
  // re-spawn cars
  cars = []; // clear the array first
  for (var i = 0; i < humidity; i++) {
    cars.push(new Car());
  }
  score = 0;
}


// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});




// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.a = random(255);
  this.size = random(48, 128); // alpha opacity value for fill!


  // methods
  this.display = function() {

    // maybe use an image here instead!
    fill(this.r, this.g, this.b, this.a);
    image(raindrop, this.pos.x - 50, this.pos.y, this.size, this.size);
    // ellipse(this.pos.x + 50, this.pos.y, 50, 50);
    // rect(this.pos.x + 17, this.pos.y - 30, 80, 60);

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
