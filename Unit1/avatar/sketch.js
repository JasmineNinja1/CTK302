function setup() {
  createCanvas(600, 400);
  rectMode(CENTER) ;
}

function draw() {
  background(220);

    if (mouseIsPressed) {
    background('black');

    fill('red')
    ellipse(width/2, height/2, 150, 150) ;

    fill('green')
    ellipse(265, 174, 25, 25) ;

    fill('green')
    ellipse(331, 174, 25, 25) ;

    fill('white') ;
    ellipse(50, 50, 100, 100) ;

    fill('brown')
    triangle(250, 288, 100, 360, 81, 360);

    fill('blue')
    rect(299, 336, 100, 150) ;

    fill('purple')
    rect(494, 169, 150, 150) ;

    fill('blue')
    rect(497, 205, 50, 70) ;

    fill('brown')
    rect(538, 87, 50, 70) ;

    fill('red')
    ellipse(90, 337, 20, 20) ;

    text('Not!! This is Bobs home. Wanna come inside?', 1, 121) ;

  } else {
    background("#9ae6ed");
    fill('white')
    ellipse(width/2, height/2, 150, 150) ;

    fill('pink')
    ellipse(265, 174, 25, 25) ;

    fill('pink')
    ellipse(331, 174, 25, 25) ;

    fill('pink')
    rect(299, 336, 100, 150) ;

    fill('white')
    ellipse(180, 127, 20, 20) ;

     fill('white')
    ellipse(501, 26, 20, 20) ;

     fill('white')
    ellipse(300, 49, 20, 20) ;

       fill('white')
    ellipse(488, 259, 20, 20) ;

     fill('white')
    ellipse(460, 127, 20, 20) ;

     fill('white')
    ellipse(72, 94, 20, 20) ;

     fill('white')
    ellipse(93, 343, 25, 25) ;

    fill('pink')
    triangle(247, 288, 50, 360, 100, 360);

    fill('black')
    text('Hello my name is Bob. It is a Snow day! Would you come play with me? It would be fun. I promise..?? \n The story begins with a kid named Bob who wants to have a snowball fight with you. Would you join him or not?', 1, 15) ;

  }

}
