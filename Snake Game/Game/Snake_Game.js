canvas = document.getElementById("Snake Game");
ctx = canvas.getContext("2d");

///////////////////////////////////////////////////////////
//setup for games
var gameSpeed = 15; //higher number is slower
var gameGrid = 25; //number of blocks higher # is smaller grids
var gameLives = 2; //number of lives
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//
//Notes: Changing grid size or game speed in menu does not work.
//
//
/////////////////////////////////////////////////////////////

//variable declare



var snakeLinks = []; //create snake array

var grid = gameGrid + 1; //grid number

var gridWidth = canvas.width; //the black gridbox size
var gridHeight = 5 * canvas.height / 6;

var cellWidth = gridWidth / gameGrid; //cell size

var lives = gameLives;
var score = 0;
var highScore = 0;

var upCode = 38; //keycode
var downCode = 40;
var leftCode = 37;
var rightCode = 39;

var start = false;
var canMove = true;
var alive = true;
var direction = 'right';
var snakeDelay = 0;

var food = {
  x: 0,
  y: 0
}; //food array

var staleFood = {
  x: 0,
  y: 0
}; //stalefood array

var mouseX = 0;
var mouseY = 0;

var gameRestartTimer = 80;
var restartTimer = gameRestartTimer;
var gameRespawnTimer = 50
var respawnTimer = gameRespawnTimer;

var timeSet = 200;
var foodTimer = timeSet;
var staleFoodTimer = timeSet + 100;

var foodTransparent = 0;
var staleFoodTransparent = 0;

var gameSnakeLength = Math.floor((gameGrid / gridWidth) * 100); //calculate snake length per size
var snakeLength = gameSnakeLength;


////////////////////////////////////////////////////////////////////////////
//menu
function menuScreen() { //menuscreen before game starts
  ctx.fillStyle = "#bfe992";
  ctx.fillRect(0, 0, canvas.width, canvas.height); //background color

  ctx.fillStyle = "black";
  ctx.font = "50Px Calibri";
  ctx.fillText("Snake Game", canvas.width / 4, 3 * canvas.height / 20); //title

  ctx.font = "20Px Calibri";
  ctx.fillText("by Gangjun Ha", 4 * canvas.width / 10, 4 * canvas.height / 20);

  ctx.font = "20Px Calibri";
  ctx.fillText("Game Speed", 2 * canvas.width / 5, 7 * canvas.height / 10); //tried to change game speed with game interface does not work

  ctx.fillStyle = "#56a370";
  ctx.fillRect(1 * canvas.width / 10, 3 * canvas.height / 4, 2 * canvas.width / 10, 1 * canvas.height / 20);

  ctx.fillStyle = "#6788bb";
  ctx.fillRect(3 * canvas.width / 10, 3 * canvas.height / 4, 2 * canvas.width / 10, 1 * canvas.height / 20);

  ctx.fillStyle = "#bacf68";
  ctx.fillRect(5 * canvas.width / 10, 3 * canvas.height / 4, 2 * canvas.width / 10, 1 * canvas.height / 20);

  ctx.fillStyle = "#d14966";
  ctx.fillRect(7 * canvas.width / 10, 3 * canvas.height / 4, 2 * canvas.width / 10, 1 * canvas.height / 20); //boxes


  ctx.fillStyle = "black";
  ctx.font = "25Px Calibri";
  ctx.fillText("Grid Size", 4 * canvas.width / 10, 5 * canvas.height / 10); //tried to change grid size with game interface does not work

  ctx.fillStyle = "#56a370";
  ctx.fillRect(1 * canvas.width / 10, 11 * canvas.height / 20, 2 * canvas.width / 10, 1 * canvas.height / 20);

  ctx.fillStyle = "#6788bb";
  ctx.fillRect(3 * canvas.width / 10, 11 * canvas.height / 20, 2 * canvas.width / 10, 1 * canvas.height / 20);

  ctx.fillStyle = "#bacf68";
  ctx.fillRect(5 * canvas.width / 10, 11 * canvas.height / 20, 2 * canvas.width / 10, 1 * canvas.height / 20);

  ctx.fillStyle = "#d14966";
  ctx.fillRect(7 * canvas.width / 10, 11 * canvas.height / 20, 2 * canvas.width / 10, 1 * canvas.height / 20);


  //start button
  ctx.fillStyle = "#6acbe0";
  ctx.fillRect(3 * canvas.width / 10, 17 * canvas.height / 20, 4 * canvas.width / 10, 2 * canvas.height / 20);

  ctx.fillStyle = "black";
  ctx.font = "40Px Calibri";
  ctx.fillText("Start", 17 * canvas.width / 40, 73 * canvas.height / 80);

  //instructions
  ctx.fillStyle = "black";
  ctx.font = "25Px Calibri";
  ctx.fillText("Use arrow keys to move.", 24 * canvas.width / 100, 30 * canvas.height / 100);
  ctx.fillText("Click anywhere to change your color.", 14 * canvas.width / 100, 37 * canvas.height / 100);
  ctx.font = "20Px Calibri";
  ctx.fillText("Check sourcecode to change gridsize and speed.", 11 * canvas.width / 100, 44 * canvas.height / 100);


  if (mouseX > 3 * canvas.width / 10 && mouseY > 17 * canvas.height / 20 && mouseX < (3 * canvas.width / 10) + (4 * canvas.width / 10) && mouseY < (17 * canvas.height / 20) + (2 * canvas.height / 20)) {
    start = true;
  } //start the game when start button is clicked

  ctx.strokeWidth = 5;
  ctx.strokeStyle = "black";
  if (mouseX > 1 * canvas.width / 10 && mouseY > 11 * canvas.height / 20 && mouseX < (1 * canvas.width / 10) + (2 * canvas.width / 10) && mouseY < (11 * canvas.height / 20) + (1 * canvas.height / 20)) {
    ctx.strokeRect(1 * canvas.width / 10, 11 * canvas.height / 20, 2 * canvas.width / 10, 1 * canvas.height / 20);
  }
  if (mouseX > 3 * canvas.width / 10 && mouseY > 11 * canvas.height / 20 && mouseX < (3 * canvas.width / 10) + (2 * canvas.width / 10) && mouseY < (11 * canvas.height / 20) + (1 * canvas.height / 20)) {
    ctx.strokeRect(3 * canvas.width / 10, 11 * canvas.height / 20, 2 * canvas.width / 10, 1 * canvas.height / 20);
  }
  if (mouseX > 5 * canvas.width / 10 && mouseY > 11 * canvas.height / 20 && mouseX < (5 * canvas.width / 10) + (2 * canvas.width / 10) && mouseY < (11 * canvas.height / 20) + (1 * canvas.height / 20)) {
    ctx.strokeRect(5 * canvas.width / 10, 11 * canvas.height / 20, 2 * canvas.width / 10, 1 * canvas.height / 20);
  }
  if (mouseX > 7 * canvas.width / 10 && mouseY > 11 * canvas.height / 20 && mouseX < (7 * canvas.width / 10) + (2 * canvas.width / 10) && mouseY < (11 * canvas.height / 20) + (1 * canvas.height / 20)) {
    ctx.strokeRect(7 * canvas.width / 10, 11 * canvas.height / 20, 2 * canvas.width / 10, 1 * canvas.height / 20);
  }


  if (mouseX > 1 * canvas.width / 10 && mouseY > 3 * canvas.height / 4 && mouseX < (1 * canvas.width / 10) + (2 * canvas.width / 10) && mouseY < (3 * canvas.height / 4) + (1 * canvas.height / 20)) {
    ctx.strokeRect(1 * canvas.width / 10, 3 * canvas.height / 4, 2 * canvas.width / 10, 1 * canvas.height / 20);
  }
  if (mouseX > 3 * canvas.width / 10 && mouseY > 3 * canvas.height / 4 && mouseX < (3 * canvas.width / 10) + (2 * canvas.width / 10) && mouseY < (3 * canvas.height / 4) + (1 * canvas.height / 20)) {
    ctx.strokeRect(3 * canvas.width / 10, 3 * canvas.height / 4, 2 * canvas.width / 10, 1 * canvas.height / 20);
  }
  if (mouseX > 5 * canvas.width / 10 && mouseY > 3 * canvas.height / 4 && mouseX < (5 * canvas.width / 10) + (2 * canvas.width / 10) && mouseY < (3 * canvas.height / 4) + (1 * canvas.height / 20)) {
    ctx.strokeRect(5 * canvas.width / 10, 3 * canvas.height / 4, 2 * canvas.width / 10, 1 * canvas.height / 20);
  }
  if (mouseX > 7 * canvas.width / 10 && mouseY > 3 * canvas.height / 4 && mouseX < (7 * canvas.width / 10) + (2 * canvas.width / 10) && mouseY < (3 * canvas.height / 4) + (1 * canvas.height / 20)) {
    ctx.strokeRect(7 * canvas.width / 10, 3 * canvas.height / 4, 2 * canvas.width / 10, 1 * canvas.height / 20);
  }



}
////////////////////////////////////////////////////////////////////////////////////////////
//food
function createFood() { //generate food
  food = {
    x: Math.floor(Math.random() * (gridWidth - cellWidth) / cellWidth),
    y: Math.floor((cellWidth + Math.random() * (gridHeight - cellWidth * 2)) / cellWidth)
  };
}

function createStaleFood() { //generate stale food
  staleFood = {
    x: Math.floor(Math.random() * (gridWidth - cellWidth) / cellWidth),
    y: Math.floor((cellWidth + Math.random() * (gridHeight - cellWidth * 2)) / cellWidth)
  };
}

function moveFood() { //move food if time runs out
  foodTimer = foodTimer - 1;
  if (foodTimer < 0) {
    createFood();
    foodTimer = timeSet;
  }
}

function moveStaleFood() {
  staleFoodTimer = staleFoodTimer - 1;
  if (staleFoodTimer < 0) {
    createStaleFood();
    staleFoodTimer = timeSet + 100;
  }
}

function drawFood() {
  foodTransparent = 1 - ((timeSet - foodTimer) / timeSet);

  ctx.fillStyle = "rgba(255, 255, 255," + foodTransparent + ")";
  ctx.fillRect(food.x * cellWidth, food.y * cellWidth, cellWidth, cellWidth);
  ctx.strokeStyle = "rgba(0, 0, 0," + foodTransparent + ")";
  ctx.strokeRect(food.x * cellWidth, food.y * cellWidth, cellWidth, cellWidth);
}

function drawStaleFood() {
  staleFoodTransparent = 1 - ((timeSet + 100) - staleFoodTimer) / (timeSet + 100);

  ctx.fillStyle = "rgba(255, 0, 0," + staleFoodTransparent + ")";
  ctx.fillRect(staleFood.x * cellWidth, staleFood.y * cellWidth, cellWidth, cellWidth);
  ctx.strokeStyle = "rgba(0, 0, 0, " + staleFoodTransparent + ")";
  ctx.strokeRect(staleFood.x * cellWidth, staleFood.y * cellWidth, cellWidth, cellWidth);
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function respawn() { //called when snake dies but lives > 0
  createSnake(snakeLength);
  lives = lives - 1;
  alive = true;
  foodTimer = timeSet;
  staleFoodTimer = timeSet + 100;
  createFood();
  createStaleFood();
  respawnTimer = gameRespawnTimer;
  restartTimer = gameRestartTimer;
}

function restart() {
  if (score > highScore) {
    highScore = score;
  }
  lives = gameLives;
  createSnake(snakeLength);
  score = 0;
  alive = true;
  respawnTimer = gameRespawnTimer;
  restartTimer = gameRestartTimer;
  foodTimer = timeSet;
  staleFoodTimer = timeSet + 100;
  alert("Game Over! High Score: " + highScore + "");
  mouseX = 0;
  mouseY = 0;
  start = false;
}

///////////////////////////////////////////////////////////////////////////////////////
function createSnake(length) { //snake array
  snakeLinks = [];
  direction = 'right';
  for (var i = length - 1; i >= 0; i--)
    snakeLinks.push({
      x: i + 1,
      y: 2
    });
}

function drawSnake() { //draw snake
  var color = snakeLinks.length * 10;
  //	var randomColor = Math.random() * 255;
  ctx.fillStyle = "rgb(" + mouseX + "," + mouseY + "," + color + ")";
  /*
  ctx.fillStyle = "rgb(" + Math.floor(Math.random() * 256) + " , " + Math.floor(Math.random() * 256) + " , " + Math.floor(Math.random() * 256) + ")";
  */

  for (var i = 0; i < snakeLinks.length; i++)
    ctx.fillRect(snakeLinks[i].x * cellWidth, snakeLinks[i].y * cellWidth, cellWidth, cellWidth);

  ctx.strokeStyle = '#323c3d';
  for (var i = 0; i < snakeLinks.length; i++)
    ctx.strokeRect(snakeLinks[i].x * cellWidth, snakeLinks[i].y * cellWidth, cellWidth, cellWidth);
}

///////////////////////////////////////////////////////////////////////////////////////////

function background() {
  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function gridBackground() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, gridWidth, gridHeight);
}

function gridLine() {
  for (var i = 0; i < grid; i++) {
    ctx.beginPath();
    ctx.moveTo(i * cellWidth, 0);
    ctx.lineTo(i * cellWidth, gridHeight);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
  for (var j = 0; j < grid; j++) {
    ctx.beginPath();
    ctx.moveTo(0, j * cellWidth);
    ctx.lineTo(gridWidth, j * cellWidth);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}

////////////////////////////////////////////////////////////////////////////////////////////
function lifeSystem() {
  if (lives < 0) {
    restart();
  }

  ctx.fillStyle = "#0e2428";
  ctx.font = "30Px Calibri";
  ctx.fillText("Lives: " + lives, 15 * canvas.width / 20, 19 * canvas.height / 20); //display remaining lives
}

function scoreSystem() {

  if (snakeLinks.length < gameSnakeLength && lives >= 0) {
    respawn();
  } else if (snakeLinks.length < gameSnakeLength && lives < 0) {
    restart();
  }

  if (score < 0) {
    score = 0;
  }

  ctx.fillStyle = "black";
  ctx.font = "25Px Calibri";
  ctx.fillText("Score: " + score, 1 * canvas.width / 20, 11 * canvas.height / 12); // display score
  ctx.fillText("Highscore: " + highScore, 1 * canvas.width / 20, 23 * canvas.height / 24); //display highscore

}
/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
function draw() {
  if (start) {
    background();
    gridBackground();
    gridLine();
    drawFood();
    drawStaleFood();
    drawSnake();
    lifeSystem();
    scoreSystem();
    moveFood();
    moveStaleFood();
  } else {
    menuScreen();
    createSnake(snakeLength);
    createFood();
    createStaleFood();
  }
}

function update() {

  if (alive && snakeDelay < 1) {
    canMove = true;
    var newX = snakeLinks[0].x;
    var newY = snakeLinks[0].y;

    if (direction == "right") newX++;
    else if (direction == "left") newX--;
    else if (direction == "up") newY--;
    else if (direction == "down") newY++;

    if (newX * cellWidth < 0 || newX * cellWidth >= gridWidth || newY * cellWidth < 0 || newY * cellWidth >= gridHeight) {
      alive = false; //check out of bounds
      return;
    }
    for (var i in snakeLinks)
      for (var j in snakeLinks)
        if (i != j && snakeLinks[i].x == snakeLinks[j].x && snakeLinks[i].y == snakeLinks[j].y) {
          alive = false; //check collision within snake itself
          return;
        }
    if (newX == food.x && newY == food.y) {
      var tail = {
        x: newX,
        y: newY
      };
      foodTimer = timeSet;
      createFood();
      score = score + 1;
    } else {
      var tail = snakeLinks.pop();
      tail.x = newX;
      tail.y = newY;
    }

    if (newX == staleFood.x && newY == staleFood.y) {
      var tail = {
        x: newX,
        y: newY
      };
      StaleFoodTimer = timeSet + 100;
      createStaleFood();
      score = score - 1;
      snakeLinks.shift(tail - snakeLinks.length);
    }

    snakeLinks.unshift(tail);
    snakeDelay = 4;
  } else {
    if (snakeDelay > 0)
      snakeDelay--;
    if (!alive && respawnTimer > 0 && lives > 0) {
      respawnTimer--;
    } else if (!alive && lives > 0) {
      respawn();
    }
    if (!alive && restartTimer > 0 && lives <= 0) {
      restartTimer--;
    } else if (!alive && lives <= 0) {
      restart();
    }
  }
}

window.addEventListener('keydown', keyDown);

function keyDown(e) { //check key input
  if (canMove && e.keyCode == upCode && direction != 'down')
    direction = 'up';
  else if (canMove && e.keyCode == leftCode && direction != 'right')
    direction = 'left';
  else if (canMove && e.keyCode == rightCode && direction != 'left')
    direction = 'right';
  else if (canMove && e.keyCode == downCode && direction != 'up')
    direction = 'down';
  canMove = false;
}

canvas.addEventListener("click", clickcoordinates);

function clickcoordinates(eventParams) { //manage clicking and mouse position
  mouseX = eventParams.clientX - 10;
  mouseY = eventParams.clientY - 10;
}


function game_loop() {
  draw();
  update();
}




setInterval(game_loop, gameSpeed);
