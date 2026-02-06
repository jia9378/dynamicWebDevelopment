let g;
let mouse
let stamps = [];
let angle = 0
//set variable n=9 to the 9 duplicaiton of the models
let radius
let c = 0
let cup

function preload() {
  mouse = loadImage('img/cup.png');
  cup = loadModel("img/cup.stl")
}
function setup(){
  let c = createCanvas(windowWidth, windowHeight, WEBGL);
  c.parent("bar-page");
  pixelDensity(0.75);
  frameRate(10);
  noStroke()

  g = createGraphics(width, height);
  g.loadPixels();
}

function draw(){
    radius = min(windowWidth,windowHeight)*0.25
  //adjust the cemera, set the perspective from font top
//   camera(radius*0.5, -radius*2, radius*4)
  background("#EDD68C");
  pointLight(80, 80, 250, 30, -40, 30);
  for(let i = 0; i < g.pixels.length; i += 4){
    let n = random(0, 100);
    g.pixels[i]   = n+50;
    g.pixels[i+1] = n;
    g.pixels[i+2] = n-90;
    g.pixels[i+3] = random(0, 220); // alpha
  }

  g.updatePixels();
  push()
  translate(0,0,0);
  image(g, windowWidth/-2, windowHeight/-2, windowWidth, windowHeight);
  pop()

  for (let i = 0; i < stamps.length; i++) {
    let s = stamps[i];
    image(mouse, s.x - s.w/2, s.y - s.h/2, s.w, s.h);
  }
  // Set doubled width and height based on mouse press
  let w = 80;
  let h = 110;
  if (mouseIsPressed){
    w = 160;
    h = 220;
  } else {
    w = 80;
    h = 110;
  }
  // Draw the mouse image at the mouse position
  image(mouse, windowWidth/-2+mouseX - w/2, windowHeight/-2+mouseY - h/2, w, h);
//   c = abs(sin(frameCount*0.9)-0.1*i)*255
    push()
    translate(-windowHeight/2*0.75,-windowHeight/2*0.36,0)
    //spin each cup arounf their Y axis
    rotateY(frameCount * 0.1)
    //overlay 2 materials to a better effect
    specularMaterial(0,0,255);
    // box(radius*0.25)
    rotateX(90)
    scale(0.9)
    model(cup)
    pop()
  
}
// Add a stamp where the mouse is clicked
function mouseClicked() {
  stamps.push({ x: windowWidth/-2+mouseX, y: windowHeight/-2+mouseY, w: 80, h: 110 });
}