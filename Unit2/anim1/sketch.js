let x = 0
let Syne;

function setup() {
  createCanvas(500, 500);
  Neon = loadFont("Asset/Syne.ttf");
}

function draw() {
  background('black');

  fill('white');
  textSize(48);
  textFont('Syne');
  text("hello", x, width / 2, 50, 50);
  x += 10;
  if (x > width) {
    x = 0;
  }
}
