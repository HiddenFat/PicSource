canvas = document.getElementById('Endless Runner');
context = canvas.getContext('2d');

alert("Use mouseclick to boost. Your defensive matrix will keep the missiles in front of you to 5 maximum. The wave of missiles will get bigger and bigger. Stay Alive!")

var force = 0;
var push = false;
var size = 100;
var frameE = 0; //frames elapsed
var height = 0;
var test = 0;
var counter = 0;
var dvax = 0;
var dvay = 0;
var lives = 100;
var Mdestroyed = 0;
var Rscore = 0;
var highscore = 0;
var alertcount = false;
var hit1 = false;
var hit2 = false;
//var numTrails = 0;

var source = new Array(); // all pictures
source.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Endless%20Runner/Dva.png");
source.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Endless%20Runner/Missile.png");

var dva = new Image(); //assign all pictures
dva.src = source[0];
var mis = new Image();
mis.src = source[1];
var dva2 = new Image();
dva2.src = "https://raw.githubusercontent.com/HiddenFat/PicSource/master/Endless%20Runner/Dva2.png";
var dva3 = new Image();
dva3.src = "https://raw.githubusercontent.com/HiddenFat/PicSource/master/Endless%20Runner/Dva3.png";
var dva4 = new Image();
dva4.src = "https://raw.githubusercontent.com/HiddenFat/PicSource/master/Endless%20Runner/Dva4.png";



function Chopper(x, y) {
  this.x = x;
  this.y = y;
  this.width = 100;
  this.height = 100;
  this.alive = true;

  //  test = obstacles.length;

  //  collision(this.x, this. y,)
  this.update = function() {
    if (this.alive && this.y < canvas.height - this.height) {
      this.y += force;
    } else {
      force = 0;
      this.y = 500;
      if (push) {
        this.y -= 0.3;
      }
    }
    if (this.alive && this.y > 0) {
      this.y += force;
    } else {
      force = 0;
      this.y = 0;
    }
    dvax = this.x;
    dvay = this.y;
  }

  this.draw = function() {

    if (hit) {
      context.drawImage(dva2, this.x, this.y, this.width, this.height);
    } else if (hit2) {
      context.drawImage(dva4, this.x, this.y, this.width, this.height);
    } else if (push) {
      context.drawImage(dva3, this.x, this.y, this.width, this.height);
    } else {
      context.drawImage(dva, this.x, this.y, this.width, this.height);
    }
  }
}



var obstacles = new Array();

function init_obstacles(numObstacles) {
  for (var iter = 0; iter < numObstacles; iter++) {
    //      if (100 < counter){
    //  		iter = iter + 10;
    //   		counter = 0;
    // 	 }
    obstacles[iter] = new Obstacle(-canvas.width / 2 * iter, Math.random() * canvas.height, (-Math.random() * 10) - 5);
  }
}

canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mouseup', handleMouseUp);

function handleMouseDown(e) {
  push = true;
}

function handleMouseUp(x) {
  push = false;
}



var player = new Chopper(600, 200);




function draw() {

  counter = counter + 1;
  frameE = frameE + 1;
  Rscore = (frameE * 10) + (Mdestroyed * 100);

  context.fillStyle = '#99a4ac';
  context.fillRect(0, 0, canvas.width, canvas.height); //draw background

  context.fillStyle = "#626262";
  context.fillRect(0, canvas.height - 50, canvas.width, 50); //floor
  context.fillRect(0, 0, canvas.width, 50);

  context.fillStyle = "black";
  context.fillRect(0, canvas.height - 75, canvas.width, 25); //border
  context.fillRect(0, 50, canvas.width, 25);

  context.fillStyle = "#5698c6";
  context.fillRect(0, canvas.height / 2 - 100, canvas.width, 200); //window



  hpboard(lives);
  scoreboard();
  heightboard(dvay);
  missileboard();

  collision(dvax, dvay, obstacles.length);
  matrix();

  //  context.fillText("target: " + obstacles[0].x, 100, 150);


  for (var iter = 0; iter < obstacles.length; iter++) {
    obstacles[iter].draw();
  }
  player.draw();

  if (lives < 0) {
    restart();
  }

}

function restart() {
  if (Rscore > highscore) {
    highscore = Rscore;
  }
  lives = 100;
  frameE = 0;
  Mdestroyed = 0;
  if (!alertcount) {
    alert("Game Over! GG! You can continue to play or start over by refreshing the page.");
    alertcount = true;
  }
}

function hpboard(x) {

  context.beginPath();
  context.moveTo(97.5, 90);
  context.lineTo(97.5, 125);
  context.lineTo(400, 125);
  context.lineWidth = 5;
  context.strokeStyle = "black";
  context.stroke();


  if (x < 70 && x > 30) {
    context.fillStyle = "yellow";
    context.fillRect(100, 100, x * 3, 15);
    hit = true;
    hit2 = false;
  } else if (x < 30) {
    context.fillStyle = "red";
    context.fillRect(100, 100, x * 3, 15);
    hit = false;
    hit2 = true;
  } else {
    context.fillStyle = "green";
    context.fillRect(100, 100, x * 3, 15);
    hit = false;
    hit2 = false;
  }
  //  context.font = "20px Verdana";
  //  context.fillText("HP: " + lives, 100, 100);
}

function missileboard() {

  context.fillStyle = "#020202"
  context.fillRect(490, 410, 300, 50);

  context.font = "20px Verdana";
  context.fillStyle = "white";
  context.fillText("Missiles Destroyed: " + Mdestroyed, 500, 440)

}

function scoreboard() {

  context.fillStyle = "#020202"
  context.fillRect(615, 98, 175, 30);

  context.font = "20px Verdana";
  context.fillStyle = "#00ff01";
  context.fillText("Distance: " + frameE + "m", 620, 120)

  context.fillStyle = "#020202"
  context.fillRect(490, 470, 300, 50);

  context.font = "20px Verdana";
  context.fillStyle = "white";
  context.fillText("Score: " + Rscore, 500, 500);

  context.font = "20px Verdana";
  context.fillStyle = "black";
  context.fillText("Highest Score: " + highscore, 500, 580);


}

function heightboard(a) {

  height = -Math.round(a) + 500;
  context.fillStyle = "#020202"
  context.fillRect(615, 148, 175, 30);

  context.font = "20px Verdana";
  context.fillStyle = "#ceea0f";
  context.fillText("Height: " + height + "m", 620, 170)
}

function collision(dx, dy, a) {
  for (var i = 0; i < a; i++) {
    if (obstacles[i].x + 50 > dx && obstacles[i].x < dx + 100 && obstacles[i].y + 25 < dy + 100 && obstacles[i].y > dy) {
      context.fillStyle = "yellow";
      context.fillRect(100, 100, lives * 3, 15);
      //      context.font = "50px Calibri";
      //      context.fillStyle = "Red";
      //      context.fillText("Danger", 120, 170);


      lives = lives - 1;


    }
  }
}

function matrix() {
  var raze = 0;
  for (var i = 0; i < obstacles.length; i++) {
    if (obstacles[i].x + 50 > dvax - 300 && obstacles[i].x < dvax && obstacles[i].y + 25 < dvay + 300 && obstacles[i].y > dvay - 200) {
      context.beginPath();
      context.moveTo(dvax + 50, dvay + 60);
      context.lineTo(obstacles[i].x + 25, obstacles[i].y + 12.5);
      context.lineWidth = 1;
      context.strokeStyle = "#7ffbfb";
      context.stroke();
      raze = raze + 1;
      if (raze >= 5) {
        context.beginPath();
        context.moveTo(dvax + 50, dvay + 50);
        context.lineTo(obstacles[i].x + 25, obstacles[i].y + 12.5);
        context.strokeStyle = "Red";
        context.stroke();
        raze = 0;
        obstacles[i].x = canvas.width * -1.5;
        obstacles[i].y = Math.random() * canvas.height;
        Mdestroyed = Mdestroyed + 1;
      }
    }
  }
}
/*function trail(x, y, xSpeed) {
  this.x = x;
  this.y = y;
  this.xSpeed = xSpeed;

  this.draw = function() {
    context.beginPath();
    context.arc(x, y, 20, 0, 2 * Math.PI);
    context.stroke();
  }
  this.update = function() {

    if (this.x > canvas.width) {

      this.x = x;
      this.y = y;

    } else {
      this.x -= this.xSpeed;

    }
  }
  context.fillStyle = "white";
  context.beginPath();
  context.arc(this.x, this.y, 20, 0, 2 * Math.PI);
  context.stroke();

}*/

function Obstacle(x, y, xSpeed) { //get position and speed
  this.x = x;
  this.y = y;
  this.xSpeed = xSpeed;

  this.draw = function() {
    context.drawImage(mis, this.x, this.y, 50, 25);
  }

  this.reset = function() {
    this.x = -50;
    this.y = canvas.height * Math.random();
  }

  this.update = function() {

    if (this.x > canvas.width) {

      this.x = canvas.width * -1.5;
      this.y = Math.random() * canvas.height;

    } else {
      this.x -= this.xSpeed;

    }
  }
}



function update() { //gravity speed

  if (push)
    force = force - 0.3;
  else
    force = force + 0.1;

  player.update();
  for (var iter = 0; iter < obstacles.length; iter++) {
    obstacles[iter].update();
  }
}

function game_loop() {
  update();
  draw();
}

init_obstacles(1000);
setInterval(game_loop, 30);