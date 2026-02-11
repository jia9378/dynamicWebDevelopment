let g;
let mouse
let stamps = [];
console.log("weather.js loaded");
window.onload = async() => {
    console.log("the page has loaded");
    document.getElementById("today");
    document.getElementById("today").innerHTML = "Weather: ";
    let params = new URLSearchParams({
        access_key: "27ba89c507dbd6175ccec136f6761fb4",
        query: "London",
    });
    let url = "http://api.weatherstack.com/current?" + params.toString();
    console.log(url);
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    let current = data.current;
    console.log(current);

    let temperature = current.temperature;
    let weather_descriptions = current.weather_descriptions[0].toLowerCase();
    // weather_descriptions = "drizzle"
    document.getElementById("today").innerHTML = "\r\n" + temperature + "°C, " + weather_descriptions;
    document.getElementById("weatherImg").innerHTML = `<img src="img/rainy.gif" alt="">`;
    
    if (weather_descriptions.includes("rain") || weather_descriptions.includes("drizzle") || weather_descriptions.includes("thunder")) {
        document.getElementById("weatherImg").innerHTML = `<img src="img/rainy.gif" alt="">`;
    } else if (weather_descriptions.includes("cloud") || weather_descriptions.includes("overcast")) {
        document.getElementById("weatherImg").innerHTML = `<img src="img/cloudy.gif" alt="">`;
    }
}
function preload() {
  mouse = loadImage('img/Tube0.png');
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
    image(mouse, s.x - s.w/2, s.y - s.h/2, s.w, s.h);
  }
  // Set doubled width and height based on mouse press
  let w = 80;
  let h = 65;
  if (mouseIsPressed){
    w = 160;
    h = 130;
  } else {
    w = 80;
    h = 65;
  }
  // Draw the mouse image at the mouse position
  image(mouse, mouseX - w/2, mouseY - h/2, w, h);
  
}
// Add a stamp where the mouse is clicked
function mouseClicked() {
  stamps.push({ x: mouseX, y: mouseY, w: 80, h: 65 });
}