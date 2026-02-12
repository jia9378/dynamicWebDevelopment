let g;
let mouse0;
let mouse1;
let stamps = [];
let rain = 1;


console.log("weather.js loaded");
window.onload = async() => {
    console.log("the page has loaded");
    document.getElementById("today");
    document.getElementById("today").innerHTML = "Weather: ";
    let params = new URLSearchParams({
        access_key: "27ba89c507dbd6175ccec136f6761fb4",
        query: "London",
    });
    let url = "https://api.weatherstack.com/current?" + params.toString();
    console.log(url);
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    let current = data.current;
    console.log(current);
    let time = current.observation_time;
    let temperature = current.temperature;
    let weather_descriptions = current.weather_descriptions[0].toLowerCase();
    // weather_descriptions = "drizzle"
    // weather_descriptions = "sunny"
    // weather_descriptions = "snowy"
    document.getElementById("time").innerHTML = time;
    document.getElementById("today").innerHTML = "\r\n" + temperature + "°C, " + weather_descriptions;
    // document.getElementById("weatherGif").src = `<img src="img/rainy.gif" alt="">`;
    
    if (weather_descriptions.includes("rain") || weather_descriptions.includes("drizzle") || weather_descriptions.includes("thunder")) {
        document.getElementById("weatherGif").src = `img/rainy.gif`;
        document.getElementById("telegraphyLine1").innerHTML = "Umbrellas bloom across the streets.";
        rain = 1;
    } else if (weather_descriptions.includes("cloud") || weather_descriptions.includes("overcast")) {
        document.getElementById("weatherGif").src = `img/cloudy.gif`;
        document.getElementById("telegraphyLine1").innerHTML = "The horizon hesitates.";
        rain = 0;
    } else if (weather_descriptions.includes("sun") || weather_descriptions.includes("clear")) {
        document.getElementById("weatherGif").src = `img/sunny.gif`;
        document.getElementById("telegraphyLine1").innerHTML = "Light spills without apology.";
        rain = 0;
    } else if (weather_descriptions.includes("snow") || weather_descriptions.includes("sleet") || weather_descriptions.includes("hail")) {
        document.getElementById("weatherGif").src = `img/snowy.gif`;
        document.getElementById("telegraphyLine1").innerHTML = "Snowflakes dance in the cold air.";
        rain = 1;
    } else {
        document.getElementById("weatherGif").src = `img/placeHolder.png`;
        rain = 0;
    }
}
function preload() {
  mouse1 = loadImage('img/umbrella1.png');
  mouse0 = loadImage('img/umbrella0.png');
}
function setup(){
  let c = createCanvas(windowWidth, windowHeight);
  c.parent("weather");
  pixelDensity(0.75);
  frameRate(10);

  g = createGraphics(width, height);
  g.loadPixels();
}

function draw(){
  background("#EDD68C");
  for(let i = 0; i < g.pixels.length; i += 4){
    let n = random(0, 100);
    g.pixels[i]   = n+50;
    g.pixels[i+1] = n;
    g.pixels[i+2] = n-90;
    g.pixels[i+3] = random(0, 220); // alpha
  }

  g.updatePixels();
  image(g, 0, 0);

  for (let i = 0; i < stamps.length; i++) {
    let s = stamps[i];
    if (rain == 1){ 
      image(mouse1, s.x - s.w/2, s.y - s.h/2, s.w, s.h);
    } else {
      image(mouse0, s.x - s.w/2, s.y - s.h/2, s.w, s.h);
    }
  }
  // Set doubled width and height based on mouse press
  let w = 100;
  let h = 100;
  if (mouseIsPressed){
    w = 200;
    h = 200;
  } else {
    w = 100;
    h = 100;
  }
  // Draw the mouse image at the mouse position
  if (rain == 1) {
    image(mouse1, mouseX - w/2, mouseY - h/2, w, h);
  } else {
    image(mouse0, mouseX - w/2, mouseY - h/2, w, h);
  }
}

// Add a stamp where the mouse is clicked
function mouseClicked() {
  stamps.push({ x: mouseX, y: mouseY, w: 100, h: 100 });
}