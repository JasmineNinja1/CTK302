let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let bowl;
let orange;
let board;
let orangeLeft = 0;
// let song1;
// let lostsound;

// function preload() {
//   lostsound = loadSound('assets/loss.wav');
//   lostsound.stop();
//
//   song1 = loadSound("assets/cute.mp3");
//   song1.loop();
//   song1.pause();
// }

function setup() {
  createCanvas(800, 800);

  bowl = loadImage("assets/bowl.jpg");
  orange = loadImage("assets/orange.jpg");
  board = loadImage("assets/board.jpg");

  for (let i = 0; i < 40; i++) {
    //cars.push(new Car());
  }
  frogPos = createVector(width / 2, height - 100);
  imageMode(CENTER);
}

function draw() {

  switch (state) {

       case 0:
      // song1.play();
      myState = 1
      break;

    case 1: // menu screen
      background("grey");
      image(board, width / 2, height / 2);
      textSize(58);
      text("Fruit Basket", 100, 100);
      textSize(42);
      text("Start Game", width/2, height/2);
      break;

    case 2: // game play
      image(board, width / 2, height / 2);
      game();
      timer++;
      if (timer > 600) {
        state = 3;
        timer = 0;
      }
      break;

    case 3: // win screen
    textSize(48);
    text("Winner", width/2, height/2);
      break;

      // case 4:
      // song1.stop();
      // fanfare.play();
      // myState = 5
      // break;

      case 5:
      // song1.pause();
      myState = 6
      break;

    case 6:
      // lostsound.play();
      // song1.pause();
      myState = 7
      break;

    case 7: // lose screen
    textSize(48);
    text("Gamer Over", width/2, height/2);
      break;
  }
}

function game() {
  background("grey");
  image(board, windowWidth, windowHeight);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      orangeLeft--;
    }
  }

  //if (cars.length == 0) {
if (orangeLeft ==0) {
  state = 3;
}

  image(bowl, frogPos.x, frogPos.y, 120, 120);
  textSize(20);
  fill('white');
  text("Orange Left = "+orangeLeft, 30, 30);
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
    image(orange, this.pos.x, this.pos.y);
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
  for (let i = 0; i < 5; i++) {
    cars.push(new car());
  }
  timer = 0;
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

    case 7: // lose state
      resetTheGame();
      // lostsound.pause();
      state = 0;
      break;

  }
}

// function touchStarted() {
//   getAudioContext().resume();
// }
