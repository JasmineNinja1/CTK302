var bubbles = [];
let url = "";

function setup() {
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0";
  let key = "1KvPxWt--8Lui_HIWAcvDYsr3Xz7taviymb86Rje2n3w"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What's your favorite food?"],
        data[i]["What's your favorite color?"],
        data[i]["PS5 or Xbox Series X?"],
        data[i]["Name"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("pink");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(color, food, system, name) {
    // only the order of these parameters matters!
    this.color = color;
    this.food = food;
    this.system = system;
    this.name = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("black");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("blue");
    text(
      this.name + "\n" + this.color + "\n" + this.system + "\n" + this.food,
      this.pos.x,
      this.pos.y
    );

    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;

  }


}
