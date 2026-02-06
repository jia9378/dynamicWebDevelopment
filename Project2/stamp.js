let stamps = [];
function preload() {
  mouse = loadImage('img/Tube0.png');
}

function setup(){
  let c = createCanvas(windowWidth, windowHeight);
  c.parent("stamp");
  pixelDensity(0.75);
  frameRate(10);
}

function draw(){
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