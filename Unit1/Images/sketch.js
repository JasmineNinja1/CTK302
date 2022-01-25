let canada ;
let gaming ;
let pizza ;

function setup() {
  createCanvas(500, 500);

  canada = loadImage("Assets/canada.png") ;
  gaming = loadImage("Assets/gaming.jpg") ;
  pizza = loadImage("Assets/pizza.jpg") ;
}

function draw() {
image(canada, width/2, 160, 200, 100) ;
image(gaming, width/2, 280, 200, 100) ;
image(pizza, width/2, 400, 200, 100) ;
}
