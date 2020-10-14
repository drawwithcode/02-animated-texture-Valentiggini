const colorPalettes = [
  ['#510F73', '#C669F4', '#AC1FF2', '#64377A', '#8819BF'],
  ['#731C67', '#F484E5', '#F23ADA', '#7A146C', '#C22FAE'],
  ['#47091B', '#E07896', '#C71A4B', '#592635', '#592635'],
  ['#200F47', '#9982D1', '#612ED9', '#342063', '#7865A3']
];

let queueNumber = [0, 1, 2, 3, 4];
let totalTile = 18;
let colorThemeIndex = 0;
let currentPalette, tileX, tileY;
let upButton, downButton;

function setup() {
  size = windowWidth;
  createCanvas(windowWidth, windowHeight);
  background(25);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  noStroke();
  tileX = windowWidth / totalTile;
  tileY = windowHeight / totalTile;
  currentPalette = colorPalettes[colorThemeIndex];
  for (let x = 0; x < windowWidth; x += tileX) {
    for (let y = 0; y < windowHeight; y += tileX) {
      queueNumber = shuffle(queueNumber);
      fill(currentPalette[queueNumber[0]]);
      rect(x, y, tileX, tileX);
      fill(currentPalette[queueNumber[1]]);
      switch (round(random(0.51, 9.49))) {
        case 1: triangle(x, y, x, y + tileX, x + tileX, y + tileX); break;
        case 2: triangle(x, y, x + tileX, y, x + tileX, y + tileX); break;
        case 3: triangle(x + tileX, y, x + tileX, y + tileX, x, y); break;
        case 4: triangle(x + tileX, y + tileX, x + tileX, y, x, y); break;
        case 5: triangle(x + tileX, y, x + tileX, y + tileX, x, y + tileX); break;
        case 6: triangle(x, y, x + tileX, y + tileX, x, y + tileX); break;
        case 7: triangle(x + tileX, y, x, y, x + tileX, y + tileX); break;
        case 8: triangle(x, y + tileX, x + tileX, y, x, y); break;
        case 9: triangle(x + tileX, y, x, y + tileX, x + tileX, y + tileX); break;
      }
    }
  }

  fill('#DBE5EC');
  rect(2, 2, 300, 40, 100, 100);
  let message = 'Use ↑ or ↓ to increase or decrease the number of tiles. \nClick to change color';
  fill(0);
  textSize(12);
  text(message, 10, 10, 300, 50);
}

function mouseClicked() {
  colorThemeIndex = (colorThemeIndex + 1) % 4;
  redraw();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    incrementTile();
  }
  if (keyCode === DOWN_ARROW) {
    decrementTile();
  }
}

function incrementTile() {
  totalTile += 1;
  redraw();
}
function decrementTile() {
  totalTile -= 1;
  redraw();
}
