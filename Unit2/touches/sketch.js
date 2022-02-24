let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no touch", 5, 22) ;
      background('pink')
      break ;

      case 1:
       text("lonely", 5, 22) ;
       background('red')
      // put a picture here
      break ;

      case 2:
      text("touching", 5, 22) ;
      background('blue')
            // put a picture here
      break ;

      case 3:
     text("three are touching the screen", 5, 22) ;
            // put a picture here
      break ;


  }

}
