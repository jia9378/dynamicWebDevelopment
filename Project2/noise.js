let g;

function setup(){
  let c = createCanvas(windowWidth, windowHeight);
  c.parent("noise-layer");
  pixelDensity(1);

  g = createGraphics(width, height);
  g.loadPixels();
  frameRate(12);

  // for(let i = 0; i < g.pixels.length; i += 4){
  //   let n = random(10, 100);
  //   g.pixels[i]   = n;
  //   g.pixels[i+1] = n;
  //   g.pixels[i+2] = n;
  //   g.pixels[i+3] = random(0, 100); // alpha
  // }

  // g.updatePixels();
  noLoop();
}

function draw(){
  background("#E5D6A5");
  for(let i = 0; i < g.pixels.length; i += 4){
    let n = random(10, 100);
    g.pixels[i]   = n;
    g.pixels[i+1] = n;
    g.pixels[i+2] = n;
    g.pixels[i+3] = random(0, 100); // alpha
  }

  g.updatePixels();
  image(g, 0, 0);
}