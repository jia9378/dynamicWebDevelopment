let g;
let mouse
let stamps = [];
function preload() {
  mouse = loadImage('img/Tube0.png');
}
function setup(){
  let c = createCanvas(windowWidth, windowHeight);
  c.parent("noise-layer");
  pixelDensity(0.75);
  frameRate(10);

  g = createGraphics(width, height);
  g.loadPixels();
 
  // for(let i = 0; i < g.pixels.length; i += 4){
  //   let n = random(10, 100);
  //   g.pixels[i]   = n;
  //   g.pixels[i+1] = n;
  //   g.pixels[i+2] = n;
  //   g.pixels[i+3] = random(0, 100); // alpha
  // }

  // g.updatePixels();
  // noLoop();
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