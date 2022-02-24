let myState = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  timer++ ;
  if(timer > 2*60) {
    timer = 0 ;
    myState++ ;
    if (myState > 1) {
      myState = 0 ;
    }
  }

  background(100);

  switch (myState) {

    case 0:
      background('yellow');
      fill('black');
      textSize('38');
      text("Why did the chicken cross the road?", width/2, height/2, 100, 100);

      break;

    case 1:
      background('red');
      fill('black');
      textSize('32');
      text("To get to the other side!!", width/2, height/2, 100, 100);
      break;

  }
}
