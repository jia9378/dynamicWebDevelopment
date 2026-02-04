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
  g = createGraphics(width, height);
  g.loadPixels();
  frameRate(10);

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
  // circle (mouseX, mouseY, 30);
  // let w = mouseIsPressed ? 160 : 80;
  // let h = mouseIsPressed ? 130 : 65;
  let w = 80;
  let h = 65;
  if (mouseIsPressed){
    w = 160;
    h = 130;
  } else {
    w = 80;
    h = 65;
  }


  image(mouse, mouseX - w/2, mouseY - h/2, w, h);
  
  // image(mouse, mouseX-40, mouseY-30,80,65);
  // mouseResize();
}

// function mouseResize(){
//   if (mouseIsPressed){
//     scale(2);
//     image(mouse, mouseX-40, mouseY-30,80,65);
//   }
// }

function mouseClicked() {
  stamps.push({ x: mouseX, y: mouseY, w: 80, h: 65 });
}