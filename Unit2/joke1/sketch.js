let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background('yellow');
      fill('black');
      textSize('38');
      text("why did the chicken cross the road?", width/2, height/2, 100, 100);

      break;

    case 1:
      background('red');
      fill('black');
      textSize('32');
      text("To get to the other side!!", width/2, height/2, 100, 100);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 1) state = 0;

}
