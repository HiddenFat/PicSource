canvas = document.getElementById('GameFinder');
context = canvas.getContext('2d');

alert("Combine two games and I will recommend you a similar game!")

var title = "GAMEFINDER";
var size = 150;
var text = "Position";
var x = 0;
var y = 0;

canvas.addEventListener("click", coordinates);

function coordinates(eventParams) { //manage clicking and mouse position
  var mouseX = eventParams.clientX - 10;
  var mouseY = eventParams.clientY - 10;
  text = "X: " + mouseX + " Y: " + mouseY;

  if (checkclick2(100, 250, mouseX, mouseY)) {
    restart();
  }

  if (x == 0) {
    if (checkclick(25, 25, mouseX, mouseY)) {
      x = 1;
    }
    if (checkclick(175, 25, mouseX, mouseY)) {
      x = 2;
    }
    if (checkclick(325, 25, mouseX, mouseY)) {
      x = 3;
    }
    if (checkclick(475, 25, mouseX, mouseY)) {
      x = 4;
    }
    if (checkclick(625, 25, mouseX, mouseY)) {
      x = 5;
    }
    if (checkclick(25, 625, mouseX, mouseY)) {
      x = 6;
    }
    if (checkclick(175, 625, mouseX, mouseY)) {
      x = 7;
    }
    if (checkclick(325, 625, mouseX, mouseY)) {
      x = 8;
    }
    if (checkclick(475, 625, mouseX, mouseY)) {
      x = 9;
    }
    if (checkclick(625, 625, mouseX, mouseY)) {
      x = 10;
    }
  } else if (x != 0) {
    if (checkclick(25, 25, mouseX, mouseY)) {
      y = 1;
    }
    if (checkclick(175, 25, mouseX, mouseY)) {
      y = 2;
    }
    if (checkclick(325, 25, mouseX, mouseY)) {
      y = 3;
    }
    if (checkclick(475, 25, mouseX, mouseY)) {
      y = 4;
    }
    if (checkclick(625, 25, mouseX, mouseY)) {
      y = 5;
    }
    if (checkclick(25, 625, mouseX, mouseY)) {
      y = 6;
    }
    if (checkclick(175, 625, mouseX, mouseY)) {
      y = 7;
    }
    if (checkclick(325, 625, mouseX, mouseY)) {
      y = 8;
    }
    if (checkclick(475, 625, mouseX, mouseY)) {
      y = 9;
    }
    if (checkclick(625, 625, mouseX, mouseY)) {
      y = 10;
    }
  }

}





var gamesource = new Array(); // all pictures
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/Adventure.png");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/Brawl%20Fighting.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/Fighting.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/FPS%20Moba.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/Indie.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/Medieval%20RPG.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/Military%20FPS.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/Moba.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/Racing.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/RTS.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/SF%20RPG.png");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/Sports%20Racing.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/Sports.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/Cardgame.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/Story.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/bioshockinfinite.png");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/borderlands.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/civ.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/cod.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/crew.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/csgo.png");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/darksouls.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/diablo.jpeg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/gta.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/gw2.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/magic.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/projectcars.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/skyrim.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/speedrunners.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/terraria.png");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/undertale.png");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/wow.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/awesome.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/burnout.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/child.png");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/crysis.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/dead.png");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/destiny.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/dirt.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/dota.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/dragon.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/duelyst.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/dying.png");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/farcry.jpeg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/fifaonline.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/fightnight.png");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/fishing.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/football.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/halo.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/injustice.jpeg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/la.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/lethal.png");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/life.png");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/limbo.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/mortal.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/naruto.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/nba.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/papers.png");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/portal.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/rayman.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/starve.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/tekken.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/tf2.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/titanfall.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/titansouls.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/tombraider.jpg");
gamesource.push("https://raw.githubusercontent.com/HiddenFat/PicSource/master/Alchemy/infinitywars.jpg");



var adventure = new Image(); //assign all pictures
adventure.src = gamesource[0];
var brawlfighting = new Image();
brawlfighting.src = gamesource[1];
var fighting = new Image();
fighting.src = gamesource[2];
var fpsmoba = new Image();
fpsmoba.src = gamesource[3];
var indie = new Image();
indie.src = gamesource[4];
var medievalrpg = new Image();
medievalrpg.src = gamesource[5];
var militaryfps = new Image();
militaryfps.src = gamesource[6];
var moba = new Image();
moba.src = gamesource[7];
var racing = new Image();
racing.src = gamesource[8];
var rts = new Image();
rts.src = gamesource[9];
var sfrpg = new Image();
sfrpg.src = gamesource[10];
var sportsracing = new Image();
sportsracing.src = gamesource[11];
var sports = new Image();
sports.src = gamesource[12];
var cardgame = new Image();
cardgame.src = gamesource[13];
var story = new Image();
story.src = gamesource[14];
var bio = new Image();
bio.src = gamesource[15];
var bor = new Image();
bor.src = gamesource[16];
var civ = new Image();
civ.src = gamesource[17];
var cod = new Image();
cod.src = gamesource[18];
var crew = new Image();
crew.src = gamesource[19];
var csgo = new Image();
csgo.src = gamesource[20];
var dark = new Image();
dark.src = gamesource[21];
var diablo = new Image();
diablo.src = gamesource[22];
var gta = new Image();
gta.src = gamesource[23];
var gw2 = new Image();
gw2.src = gamesource[24];
var magic = new Image();
magic.src = gamesource[25];
var cars = new Image();
cars.src = gamesource[26];
var skyrim = new Image();
skyrim.src = gamesource[27];
var speed = new Image();
speed.src = gamesource[28];
var ter = new Image();
ter.src = gamesource[29];
var under = new Image();
under.src = gamesource[30];
var wow = new Image();
wow.src = gamesource[31];
var awe = new Image();
awe.src = gamesource[32];
var burn = new Image();
burn.src = gamesource[33];
var child = new Image();
child.src = gamesource[34];
var cry = new Image();
cry.src = gamesource[35];
var dead = new Image();
dead.src = gamesource[36];
var destiny = new Image();
destiny.src = gamesource[37];
var dirt = new Image();
dirt.src = gamesource[38];
var dota = new Image();
dota.src = gamesource[39];
var drag = new Image();
drag.src = gamesource[40];
var duel = new Image();
duel.src = gamesource[41];
var dying = new Image();
dying.src = gamesource[42];
var far = new Image();
far.src = gamesource[43];
var fifao = new Image();
fifao.src = gamesource[44];
var fightn = new Image();
fightn.src = gamesource[45];
var fish = new Image();
fish.src = gamesource[46];
var foot = new Image();
foot.src = gamesource[47];
var halo = new Image();
halo.src = gamesource[48];
var inj = new Image();
inj.src = gamesource[49];
var la = new Image();
la.src = gamesource[50];
var leth = new Image();
leth.src = gamesource[51];
var life = new Image();
life.src = gamesource[52];
var limbo = new Image();
limbo.src = gamesource[53];
var mortal = new Image();
mortal.src = gamesource[54];
var naruto = new Image();
naruto.src = gamesource[55];
var nba = new Image();
nba.src = gamesource[56];
var papers = new Image();
papers.src = gamesource[57];
var portal = new Image();
portal.src = gamesource[58];
var ray = new Image();
ray.src = gamesource[59];
var starve = new Image();
starve.src = gamesource[60];
var tekken = new Image();
tekken.src = gamesource[61];
var tf2 = new Image();
tf2.src = gamesource[62];
var titan = new Image();
titan.src = gamesource[63];
var titans = new Image();
titans.src = gamesource[64];
var tomb = new Image();
tomb.src = gamesource[65];
var inf = new Image();
inf.src = gamesource[66];



function draw() {

  context.fillStyle = '#28a1e8';
  context.fillRect(0, 0, canvas.width, canvas.height); //draw background

  context.fillStyle = '#7bdcea';
  context.fillRect(0, 200, canvas.width, 400); //white background

  context.fillStyle = '#222b2b';
  context.font = "50px Calibri"
  context.fillText(title, 260, 290); //draw title

  context.fillStyle = '#daedf3';
  context.fillRect(80, 375, 150, 150);

  context.fillStyle = '#daedf3';
  context.fillRect(570, 375, 150, 150);

  context.fillStyle = '#f84600';
  context.fillRect(300, 350, 200, 200);

  context.fillStyle = '#222b2b';
  context.fillRect(100, 250, 100, 50);
  context.fillStyle = 'white';
  context.font = "30px Calibri";
  context.fillText("Restart", 105, 285);

  displayimage(adventure, 25, 25);
  displayimage(sports, 175, 25);
  displayimage(racing, 325, 25);
  displayimage(moba, 475, 25);
  displayimage(militaryfps, 625, 25);


  displayimage(indie, 25, 625);
  displayimage(fighting, 175, 625);
  displayimage(medievalrpg, 325, 625);
  displayimage(cardgame, 475, 625);
  displayimage(story, 625, 625);

  //  context.font = "20px Calibri"
  //  context.fillText(text, 350, 320); //show coordinates

  sendclick1(x);
  sendclick2(y);

  combination(x, y);


}



function displayimage(a, x, y) {
  context.drawImage(a, x, y, size, size);
}

function restart() { //reset pictures
  x = 0;
  y = 0;
}

function combination(a, b) { // all combination of games
  if (x == 0 || y == 0) {} else if (x == 1 && y == 1) {
    context.drawImage(child, 300, 350, 200, 200);
  } else if (x == 2 && y == 2) {
    context.drawImage(nba, 300, 350, 200, 200);
  } else if (x == 3 && y == 3) {
    context.drawImage(cars, 300, 350, 200, 200);
  } else if (x == 4 && y == 4) {
    context.drawImage(dota, 300, 350, 200, 200);
  } else if (x == 5 && y == 5) {
    context.drawImage(cod, 300, 350, 200, 200);
  } else if (x == 6 && y == 6) {
    context.drawImage(ter, 300, 350, 200, 200);
  } else if (x == 7 && y == 7) {
    context.drawImage(tekken, 300, 350, 200, 200);
  } else if (x == 8 && y == 8) {
    context.drawImage(skyrim, 300, 350, 200, 200);
  } else if (x == 9 && y == 9) {
    context.drawImage(magic, 300, 350, 200, 200);
  } else if (x == 10 && y == 10) {
    context.drawImage(life, 300, 350, 200, 200);

  } else if ((x == 1 && y == 2) || (x == 2 && y == 1)) {
    context.drawImage(fish, 300, 350, 200, 200);
  } else if ((x == 1 && y == 3) || (x == 3 && y == 1)) {
    context.drawImage(ray, 300, 350, 200, 200);
  } else if ((x == 1 && y == 4) || (x == 4 && y == 1)) {
    context.drawImage(awe, 300, 350, 200, 200);
  } else if ((x == 1 && y == 5) || (x == 5 && y == 1)) {
    context.drawImage(tf2, 300, 350, 200, 200);
  } else if ((x == 1 && y == 6) || (x == 6 && y == 1)) {
    context.drawImage(starve, 300, 350, 200, 200);
  } else if ((x == 1 && y == 7) || (x == 7 && y == 1)) {
    context.drawImage(leth, 300, 350, 200, 200);
  } else if ((x == 1 && y == 8) || (x == 8 && y == 1)) {
    context.drawImage(titans, 300, 350, 200, 200);
  } else if ((x == 1 && y == 9) || (x == 9 && y == 1)) {
    context.drawImage(limbo, 300, 350, 200, 200);
  } else if ((x == 1 && y == 10) || (x == 10 && y == 1)) {
    context.drawImage(under, 300, 350, 200, 200);

  } else if ((x == 2 && y == 3) || (x == 3 && y == 2)) {
    context.drawImage(sportsracing, 300, 350, 200, 200);
  } else if ((x == 2 && y == 4) || (x == 4 && y == 2)) {
    context.drawImage(rts, 300, 350, 200, 200);
  } else if ((x == 2 && y == 5) || (x == 5 && y == 2)) {
    context.drawImage(csgo, 300, 350, 200, 200);
  } else if ((x == 2 && y == 6) || (x == 6 && y == 2)) {
    context.drawImage(foot, 300, 350, 200, 200);
  } else if ((x == 2 && y == 7) || (x == 7 && y == 2)) {
    context.drawImage(fightn, 300, 350, 200, 200);
  } else if ((x == 2 && y == 8) || (x == 8 && y == 2)) {
    context.drawImage(dying, 300, 350, 200, 200);
  } else if ((x == 2 && y == 9) || (x == 9 && y == 2)) {
    context.drawImage(fifao, 300, 350, 200, 200);
  } else if ((x == 2 && y == 10) || (x == 10 && y == 2)) {
    context.drawImage(dead, 300, 350, 200, 200);

  } else if ((x == 3 && y == 4) || (x == 4 && y == 3)) {
    context.drawImage(portal, 300, 350, 200, 200);
  } else if ((x == 3 && y == 5) || (x == 5 && y == 3)) {
    context.drawImage(gta, 300, 350, 200, 200);
  } else if ((x == 3 && y == 6) || (x == 6 && y == 3)) {
    context.drawImage(burn, 300, 350, 200, 200);
  } else if ((x == 3 && y == 7) || (x == 7 && y == 3)) {
    context.drawImage(speed, 300, 350, 200, 200);
  } else if ((x == 3 && y == 8) || (x == 8 && y == 3)) {
    context.drawImage(crew, 300, 350, 200, 200);
  } else if ((x == 3 && y == 9) || (x == 9 && y == 3)) {
    context.drawImage(dirt, 300, 350, 200, 200);
  } else if ((x == 3 && y == 10) || (x == 10 && y == 3)) {
    context.drawImage(la, 300, 350, 200, 200);

  } else if ((x == 4 && y == 5) || (x == 5 && y == 4)) {
    context.drawImage(halo, 300, 350, 200, 200);
  } else if ((x == 4 && y == 6) || (x == 6 && y == 4)) {
    context.drawImage(fpsmoba, 300, 350, 200, 200);
  } else if ((x == 4 && y == 7) || (x == 7 && y == 4)) {
    context.drawImage(brawlfighting, 300, 350, 200, 200);
  } else if ((x == 4 && y == 8) || (x == 8 && y == 4)) {
    context.drawImage(destiny, 300, 350, 200, 200);
  } else if ((x == 4 && y == 9) || (x == 9 && y == 4)) {
    context.drawImage(papers, 300, 350, 200, 200);
  } else if ((x == 4 && y == 10) || (x == 10 && y == 4)) {
    context.drawImage(tomb, 300, 350, 200, 200);

  } else if ((x == 5 && y == 6) || (x == 6 && y == 5)) {
    context.drawImage(cry, 300, 350, 200, 200);
  } else if ((x == 5 && y == 7) || (x == 7 && y == 5)) {
    context.drawImage(mortal, 300, 350, 200, 200);
  } else if ((x == 5 && y == 8) || (x == 8 && y == 5)) {
    context.drawImage(bor, 300, 350, 200, 200);
  } else if ((x == 5 && y == 9) || (x == 9 && y == 5)) {
    context.drawImage(titan, 300, 350, 200, 200);
  } else if ((x == 5 && y == 10) || (x == 10 && y == 5)) {
    context.drawImage(bio, 300, 350, 200, 200);

  } else if ((x == 6 && y == 7) || (x == 7 && y == 6)) {
    context.drawImage(naruto, 300, 350, 200, 200);
  } else if ((x == 6 && y == 8) || (x == 8 && y == 6)) {
    context.drawImage(drag, 300, 350, 200, 200);
  } else if ((x == 6 && y == 9) || (x == 9 && y == 6)) {
    context.drawImage(civ, 300, 350, 200, 200);
  } else if ((x == 6 && y == 10) || (x == 10 && y == 6)) {
    context.drawImage(far, 300, 350, 200, 200);

  } else if ((x == 7 && y == 8) || (x == 8 && y == 7)) {
    context.drawImage(dark, 300, 350, 200, 200);
  } else if ((x == 7 && y == 9) || (x == 9 && y == 7)) {
    context.drawImage(duel, 300, 350, 200, 200);
  } else if ((x == 7 && y == 10) || (x == 10 && y == 7)) {
    context.drawImage(inj, 300, 350, 200, 200);

  } else if ((x == 8 && y == 9) || (x == 9 && y == 8)) {
    context.drawImage(wow, 300, 350, 200, 200);
  } else if ((x == 8 && y == 10) || (x == 10 && y == 8)) {
    context.drawImage(sfrpg, 300, 350, 200, 200);

  } else if ((x == 9 && y == 10) || (x == 10 && y == 9)) {
    context.drawImage(inf, 300, 350, 200, 200);
  }
}

function checkclick(a, b, x, y) {
  if (x < (a + size) && x > a && y < (b + size) && y > b) {
    return true;
  } else {
    return false;
  }
}

function checkclick2(a, b, x, y) {
  if (x < (a + 100) && x > a && y < (b + 50) && y > b) {
    return true;
  } else {
    return false;
  }
}

function sendclick1(a) {
  if (a == 1) {
    displayimage(adventure, 80, 375);
  } else if (a == 2) {
    displayimage(sports, 80, 375);
  } else if (a == 3) {
    displayimage(racing, 80, 375);
  } else if (a == 4) {
    displayimage(moba, 80, 375);
  } else if (a == 5) {
    displayimage(militaryfps, 80, 375);
  } else if (a == 6) {
    displayimage(indie, 80, 375);
  } else if (a == 7) {
    displayimage(fighting, 80, 375);
  } else if (a == 8) {
    displayimage(medievalrpg, 80, 375);
  } else if (a == 9) {
    displayimage(cardgame, 80, 375);
  } else if (a == 10) {
    displayimage(story, 80, 375);
  }
}

function sendclick2(b) {
  if (b == 1) {
    displayimage(adventure, 570, 375);
  } else if (b == 2) {
    displayimage(sports, 570, 375);
  } else if (b == 3) {
    displayimage(racing, 570, 375);
  } else if (b == 4) {
    displayimage(moba, 570, 375);
  } else if (b == 5) {
    displayimage(militaryfps, 570, 375);
  } else if (b == 6) {
    displayimage(indie, 570, 375);
  } else if (b == 7) {
    displayimage(fighting, 570, 375);
  } else if (b == 8) {
    displayimage(medievalrpg, 570, 375);
  } else if (b == 9) {
    displayimage(cardgame, 570, 375);
  } else if (b == 10) {
    displayimage(story, 570, 375);
  }
}

function update() {

}

function game_loop() {
  update();
  draw();
}

setInterval(game_loop, 30);