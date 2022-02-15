let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background('yellow')
      text("0", 100, 100);

      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          rect(i * 20, j * 20, 10, 10);
        }
      }
      break;

    case 1:
      background('red')
      text("1", 100, 100);

      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          ellipse(i * 20, j * 20, 10, 10);
        }
      }
      break;

    case 2:
      background('purple')
      text("2", 100, 100);
      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          ellipse(i * 20, j * 20, 10, 10);
          rect(i * 20, j * 20, 10, 10);
        }
      }
      break;

    case 3:
      background('green')
      text("3", 100, 100);
      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          triangle(i * 20, j * 20, 350, 100);
        }
      }
      break;

    case 4:
      background('blue')
      text("4", 100, 100);
      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          arc(i * 20, j * 20, 50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
        }
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
