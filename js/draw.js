let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let ctx = canvas.getContext("2d");

let standardSize = 15

// colors
let blue = "#1e88e5"
let red = "#d50000"
let brown = "#5d4037"
let gold = "#ffab00"
let green = "#43a047"
let purple = "#6a1b9a"
let yellow = "#ffd600"
let black = "ff0000"
drawRect(0,0,canvas.width, canvas.height, black, true)
function drawAll() {
    for (var y = 0; y < 60; y++) {
        for (var x = 0; x < 100; x++) {
            drawSquare(x,y)
        }
    }
}

function drawSquare(x,y) {
  let id = board[x][y]
  
  
  if (id.includes("castle")){
    drawCastle(x,y)
  }
  else if(id.includes("wall")){
    drawWall(x,y)
  }
  else if(id.includes("enclosedSpace")){
    drawEnclosed(x,y)
  }
  else if(id.includes("mine")){
    drawMine(x,y)
  }
  else{
    drawEmptySpace(x,y)
  }
  
}

//function addToBoard(blockLeftX, blockLeftY, )
function drawCastle(blockLeftX, blockLeftY) {
    let leftX = blockLeftX * standardSize
    let leftY = blockLeftY * standardSize
    drawRect(leftX, leftY, standardSize, standardSize, blue , true, 0)
}

function drawWall(blockLeftX, blockLeftY) {
    let leftX = blockLeftX * standardSize
    let leftY = blockLeftY * standardSize
    drawRect(leftX, leftY, standardSize, standardSize, brown, true, 0)
}

function drawEnclosed(blockLeftX, blockLeftY) {
    let leftX = blockLeftX * standardSize
    let leftY = blockLeftY * standardSize
    drawRect(leftX, leftY, standardSize, standardSize , red , true, 0)
}

function drawMine(blockLeftX, blockLeftY) {
    let leftX = blockLeftX * standardSize
    let leftY = blockLeftY * standardSize
    drawRect(leftX, leftY, standardSize, standardSize , gold , true, 0)
}

function drawEmptySpace(blockLeftX, blockLeftY) {
    let leftX = blockLeftX * standardSize
    let leftY = blockLeftY * standardSize
    drawRect(leftX, leftY, standardSize, standardSize , green , true, 0)
}

function drawCursor(leftX,leftY,color){
  let x = leftX * standardSize
  let y = leftY * standardSize
  drawCircle(x,y,5,color,true,0);
}

// // utility functions
function drawRect(x, y, w, h, color, filled, strokeWidth) {
  ctx.lineWidth = strokeWidth;
  if (filled) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  } else {
    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, w, h);
  }
}
function drawPolygon(x, y, n, sideWidth, color, filled, strokeWidth) {
  ctx.lineWidth = strokeWidth;
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  var interiorAngleSum = (n - 2) * 180;
  var interiorAngle = interiorAngleSum / n;
  interiorAngle = Math.PI * (interiorAngle / 180); //convert to radians

  ctx.moveTo(x + sideWidth * Math.cos(0), y);
  var startAngle = 0;

  for (var j = 1; j < n + 1; j++) {
    ctx.lineTo(
      x + sideWidth * Math.cos(startAngle),
      y + sideWidth * Math.sin(startAngle)
    );

    startAngle += interiorAngle;
  }
  if (filled) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
  ctx.closePath();
}
function drawCircle(x, y, radius, color, filled, strokeWidth) {
  ctx.lineWidth = strokeWidth;
  if (filled) {
    ctx.fillStyle = color;
    ctx.beginPath();
    let std = standardSize/2;
    ctx.arc(x+std, y+std, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  } else {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
  }
}

