let Moch ;
let Neon ;

function setup() {
  createCanvas(500, 500);
  Moch = loadFont("Assets/Moch.ttf") ;
  Neon = loadFont("Assets/Neon.ttf") ;
}

function draw() {
  background(100) ;
textFont(Moch) ;
textSize(32) ;
text("Hello There!!!", 100, 100) ;


textFont(Neon) ;
textSize(48) ;
text("General Kanobi!!!", 100, 200) ;
}
