let a;
let blink = 3;
let fadeOut = 0;
let canvasWidth, canvasHeight;
let eyeX, eyeY, eyeW, eyeH;
let irisX, irisX2, irisY, irisY2, irisSize, pupilSize;
let string1 = "Les Cyclopes";
let currentCharacter1 = 0;
let fadeIn = 0;

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
  a = createA('https://taylor.framer.ai/cyclopes#brief', 'X');
  a.style('color: white; opacity: 0; font-size: 72px;');
  a.position(width / 2.1, height / 1.33);

  eyeX = width / 2;
  eyeY = height / 4;
  eyeH = height / 2;
  eyeW = eyeH;
  irisSize = eyeW / 8;
  pupilSize = irisSize / 2;
  irisColour = color(0, 0, 255);
}

function draw() {
  background(0);
  fill(255);
  textFont("Courier");
  let currentString1 = string1.substring(0, currentCharacter1);

  if (frameCount >= 120) {
    blink = lerp(blink, -2.5, 0.05);
  }

  if (frameCount >= 300) {
    textAlign(CENTER);
    textSize(height / 20);
    currentCharacter1 += random(0, 0.2);

    text(currentString1, width / 2, height / 1.8);

    fill(fadeOut);
    text("↓", width / 2, height / 1.25);
  }

  if (frameCount >= 480) {
    fadeOut++;
  }

  if (blink > -2.49) {
    irisX = eyeX;
    irisY = eyeY;
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

function windowResized() {
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  resizeCanvas(canvasWidth, canvasHeight);

  eyeX = width / 2;
  eyeY = height / 4;
  eyeH = height / 2;
  eyeW = eyeH;
  irisSize = eyeW / 8;
  pupilSize = irisSize / 2;
  a.position(width / 2.1, height / 1.33);
}
