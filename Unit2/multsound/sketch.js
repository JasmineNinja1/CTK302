let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/ben.mp3");
  song2 = loadSound("assets/cute.mp3");
  song3 = loadSound("assets/happyrock.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
}

function setup() {
  createCanvas(400, 400);


}

function draw() {

  background(100);

  switch (state) {

    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
    background('red');
      text("Listen to song 1", 100, 100);
      break;

    case 2:

      song2.play();
      state = 3;
      break;

    case 3:
    background('green') ;
      text("Listen to song 2", 100, 100);
      break;

    case 4:

      song3.play();
      state = 5;
      break;

    case 5:
    background('pink');
      text("Listen to song 3", 100, 100);
      break;

  }
}

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();

  state++;
  if (state > 5) state = 0;

}
