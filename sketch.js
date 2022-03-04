let ground;
let lander;
var lander_img;
var bg_img;

//Assigning values for velocity and gravity
var vx = 0;
var g = 0.05;
var vy = 0;
var feul = 100

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg_sur.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Horizontial Velocity" + round(vx,2),800,50);
  text("Feul" + feul,800,25)
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;


  drawSprites();
}

function keyPressed(){
  if(keyCode===UP_ARROW && feul>0){
    upward_thrust()
    lander.changeAnimation("thrusting")
    thrust.nextFrame()
  }
  if(keyCode==RIGHT_ARROW && feul>0){
    right_thrust()
  }

  if(keyCode==LEFT_ARROW && feul>0){
    left_thrust()
  }
}

function upward_thrust(){
  vy = -1
  feul -= 1
}


function right_thrust(){
  vx += 0.2
  feul -= 1
}

function left_thrust(){
  vx -= 0.2
  feul -= 1
}