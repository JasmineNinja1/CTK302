let x = 0
let Neon;

function setup() {
  createCanvas(500, 500);
  Neon = loadFont("Assets/Neon.ttf");
}

function draw() {
  background('black');
  fill('white');
  textSize(48);
  textFont(Neon);
  text("hello", x, width / 2, 50, 50);
  x += 10;
  if (x > width) {
    x = 0;
  }
}
