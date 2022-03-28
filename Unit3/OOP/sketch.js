let cars = [];
let frogPos;
let state = 0 ;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width / 2, height - 100);
}

function draw() {

  switch(state) {
      case 0: // menu screen
      background("grey") ;
      text("welcome",  100, 100) ;
      break;

      case 1: // game play
      game() ;
      break;

      case 2: // win screen
      break;

      case 3: // lose screen
      break;
  }
}

function game() {
  background("grey");

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {

  }
  
  fill("green");
  ellipse(frogPos.x, frogPos.y, 50, 50);
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
    fill(this.r, this.g, this.b, this.o);
    rect(this.pos.x, this.pos.y, 75, 25);
    ellipse(this.pos.x, this.pos.y + 30, 30, 30);
    ellipse(this.pos.x + 60, this.pos.y + 30, 30, 30);

    //textSize(this.size);
    //text("I'M FABULOUS", this.pos.x, this.pos.y);
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

function mouseReleased() {
  switch(state) {
    case 0:
      state = 1 ;
      break ;

      case 2: // win state
      state = 0 ;
      break ;

      case 3: // lose state
      state = 0 ;
      break ;

  }
}
