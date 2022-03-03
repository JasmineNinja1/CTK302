let state = 0;
let timer = 0;
let me;
let me2;
let me3;
let me4;

function setup() {
  createCanvas(600, 600);

  me = loadImage("assets/me.jpg");
  me2 = loadImage("assets/me2.jpg");
  me3 = loadImage("assets/me3.jpg");
  me4 = loadImage("assets/me4.jpg");
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      image(me, 100, 200, 200, 300);
      fill('black');
      textSize('32');
      text("Hello! This is me.", width / 2, height / 2, 100, 100);

      break;

    case 1:
      image(me2, 100, 200, 200, 300);
      fill('black');
      textSize('32');
      text("Woohoo! We are finally on Spring Break. It's about time.", width / 2, height / 2, 100, 100);
      break;

    case 2:
      image(me3, 100, 200, 200, 300);
      fill('black');
      textSize('32');
      text("Wait a minute... Does that mean we have to go back to school next week?!", width / 2, height / 2, 100, 100);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 3:
      image(me4, 100, 200, 200, 300);
      fill('black');
      textSize('32');
      text("Crap!!", width / 2, height / 2, 100, 100);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 0;
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 3) state = 0;

}
