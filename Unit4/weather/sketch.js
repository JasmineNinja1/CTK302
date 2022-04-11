// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0
let temperature = 0;
let pressure = 0;
let desc = 0;
let calgary;

function setup() {
  createCanvas(600, 400);
  calgary = loadImage("assets/calgary.jpg");

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Calgary,AB,CA&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US


  // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx

  let myIDString = "appid=13f45920641ba46ee90196f398775627";

  let myTotalString = myCityString + myIDString;


  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  pressure = weather.main.pressure;
  desc = weather.weather[0].description;
}

function draw() {
  switch (state) {

    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      background(200);
      image(calgary, 400, 400, -400, -400);
      fill("black");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("temperature is " + temperature, 20, 50);
      text("pressure is " + pressure, 20, 60);
      text(desc, 20, 70);

      //thurmameter
      y = map(temperature, -10, 110, 5, height - 10);
      rect(width - 30, height - 10, 10, -y);

      // cloud
      fill("white");
      ellipse(x, 250, 100, 100);
      ellipse(x, 200, 300, 50);
      ellipse(x, 300, 300, 50);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
