let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let bowl;
let orange;
let board;
let orangeLeft = 0;
let song1;
let song2;
let song3;

function preload() {
  // song3
  song2 = loadSound("assets/lose.mp3");
  song1 = loadSound("assets/funday.mp3");
song3 = loadSound("assets/win.mp3");
}

function setup() {
  createCanvas(1000, 600);

  bowl = loadImage("assets/bowl.png");
  orange = loadImage("assets/orange.png");
  board = loadImage("assets/board.jpg");

  for (let i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width / 2, height - 100);
  imageMode(CENTER);
//  textMode(CENTER);

  // song1.loop();
  // song1.pause();
  //  song2.pause();
}

function draw() {

  switch (state) {

       case 0:
      song1.loop();
      state = 1
      break;

    case 1: // menu screen
      background("grey");
      image(board, width, height);
      textSize(58);
      fill('white');
      text("Fruit Basket", 0, 100);
      textSize(42);
      fill('white');
      text("Start Game", 400, height/2);
      textSize(28);
      fill('white');
      text("Click to Start", 400, 360);
      break;

    case 2: // game play
      image(board, width, height);
      game();
      timer++;
      if (timer > 600) {
        state = 5;
        timer = 0;
      }
      break;

    case 3: // win screen
    // textSize(48);
    // text("Winner", width/2, height/2);
          song1.pause();
          song3.play();
          state = 4;
      break;

      case 4: // win state
      textSize(48);
      text("Winner", 400, height/2);
      break;

      case 5:
      song1.pause();
      song2.play();
      state = 6
      break;

    case 6: // lose screen
    textSize(48);
    text("Game Over", 400, height/2);
      break;
  }
}

function game() {
  background("grey");
  image(board, width, height);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      orangeLeft--;
    }
  }

  if (cars.length == 0) {
// if (orangeLeft == 0) {
  state = 3;
}

  image(bowl, frogPos.x, frogPos.y, 120, 86);
  textSize(20);
  fill('white');
  text("Orange Left = "+cars.length, 30, 30);
  checkForKeys();
}



class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height)); // initialize your attributes here
    this.v = createVector(random(3), 0);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128);
  }

  // methods

  display() {
    //fill(this.r, this.g, this.b, this.o);
    //rect(this.pos.x, this.pos.y, 75, 25);
  //  ellipse(this.pos.x, this.pos.y + 30, 30, 30);
  //  ellipse(this.pos.x + 60, this.pos.y + 30, 30, 30);

    //textSize(this.size);
    image(orange, this.pos.x, this.pos.y, this.size, this.size);
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y += 5;
}

function resetTheGame() {
  cars = [];
  orangeLeft = 0;
  for (let i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  timer = 0;
  song1.pause();
  song2.pause();
  song3.pause();
//  song1.play();
}

function mouseReleased() {
  switch (state) {
    case 1:
      state = 2;
      break;

    case 4: // win state
      resetTheGame();
      state = 0;
      break;

    case 6: // lose state
      resetTheGame();
      //song2.pause();
      state = 0;
      break;

  }
}
function touchStarted() {
  getAudioContext().resume();
}
