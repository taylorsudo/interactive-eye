let blink = 3;
let fadeOut = 0;
let canvasWidth, canvasHeight;
let eyeX, eyeY, eyeW, eyeH;
let irisX, irisX2, irisY, irisY2, irisSize, pupilSize;

function eye(x, y, w, h, lid) {
  push();
  translate(x, y);
  scale(w * 0.1, h * 0.1);
  strokeWeight(1 / w);
  beginShape();
  vertex(-4, 0);
  bezierVertex(-1.5, -2.5, 1.5, -2.5, 4, 0);
  bezierVertex(1.5, lid, -1.5, lid, -4, 0);
  endShape(CLOSE);
  pop();
}

function setup() {
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  createCanvas(canvasWidth, canvasHeight);
  
  eyeH = height / 2;
  eyeW = eyeH;
  eyeX = width / 2;
  eyeY = height / 2;
  irisSize = eyeW / 8;
  pupilSize = irisSize / 2;
  irisColour = color(0, 0, 255);
}

function draw() {
  background(0);
  
  blink = lerp(blink, -2.5, 0.05);
  
  if (blink > -2.49) {
    irisX = width / 2;
    irisY = height / 2;
  } 
  
  irisX2 = map(
    mouseX,
    0,
    width,
    eyeX - eyeW / 6 + irisSize / 2,
    eyeX + eyeW / 6 - irisSize / 2
  );

  irisY2 = map(
    mouseY,
    0,
    height,
    eyeY - eyeH / 6 + irisSize / 2,
    eyeY + eyeH / 6 - irisSize / 2
  );
  
  fill(255);
  eye(eyeX, eyeY, eyeW, eyeH, 2.5);
  push();
  fill(irisColour);
  ellipse(irisX, irisY, irisSize);
  fill(0);
  ellipse(irisX, irisY, pupilSize);
  pop();
  fill(0);
  eye(eyeX, eyeY, eyeW, eyeH, blink);

  irisX = lerp(irisX, irisX2, 0.05);
  irisY = lerp(irisY, irisY2, 0.05); 
}