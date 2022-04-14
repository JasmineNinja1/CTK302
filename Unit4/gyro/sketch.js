/* For mobile phones - accesses accelerometer and gyroscope.
Make sure you turn on orientation lock on your iPhone or Android device. */

let balance = 0,
  left = 0,
  up = 0; // gyroscope variablers
let kitten;
let xPosition = 0;
let yPosition = 0;
let x = 0,
  y = 0,
  z = 0; // accelerometer data
let square;

function setup() {

  createCanvas(windowWidth, windowHeight);
  square = loadFont("assets/square.ttf");


  kitten = loadImage("assets/kitten.png");
  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {

  background('#c6f5ff'); // light blue

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(left, -60, 60, 0, width);
  yPosition = map(up, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // rotate the bunny depending on the alpha intake

  image(kitten, 0, 0, 500, 500);
  // rect(0, 0, 100, 100) ;
  pop();


  // Text commands that display debugging data
  textAlign(LEFT);
  textFont(square);
  textSize(48);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(32);
  text("balance: " + balance, 25, 50);
  text("left: " + left, 25, 70);
  text("up: " + up, 25, 90);
  textSize(48);
  text("acceleration data:", 25, 125);
  textSize(32);
  text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y.toFixed(2), 25, 170);
  text("z = " + z.toFixed(4), 25, 190);

  // Text that makes CTK type in the background
  fill('white');
  noStroke();
  textSize(300);
  textAlign(CENTER);
  text("Kittens are soft", width / 2, height / 2);

}



// Read in gyroscope data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
