

let world;
var bg,bgImg
var zombie,zombieImg 
var bulletImg
var player,playerImg
var zombieGroup
var bulletGroup

function preload()
{
  bgImg = loadImage("assets/background.jpg")
  zombieImg = loadAnimation("assets/1 (2).png","assets/2 (2).png","assets/3 (2).png","assets/4 (2).png","assets/5 (2).png","assets/6 (2).png","assets/7 (2).png","assets/8 (2).png");  
  playerImg = loadAnimation("assets/1.png","assets/2.png","assets/3.png","assets/4.png","assets/5.png","assets/6.png","assets/7.png","assets/8.png");
  bulletImg = loadImage("assets/bullet.png")
}

function setup()
{
  createCanvas(displayWidth-100,displayHeight-300);
  bg = createSprite(0,0,width,height+600)
  bg.addImage(bgImg)
  bg.velocityX = -2;

  player = createSprite(100,300);
  player.addAnimation("shooting",playerImg)

  zombieGroup = new Group()
  bulletGroup = new Group()

}

function draw() 
{
  background(51);
  player.y = World.mouseY;
  if (bg.x<100) {
    bg.x = 0;
  }
  if (keyIsDown(DOWN_ARROW)) {
    spawnBullets()
  }
  if () {
    
  }
  bulletGroup.isTouching(zombieGroup,destroyZombie)
    

  spawnZombies();
  drawSprites()
}
function destroyZombie(b,z) {
  z.remove()
}

function spawnZombies() {
  if (frameCount%100 == 0) {
    var zombie = createSprite(width-10,random(50,height-50))
    zombie.addAnimation("moving",zombieImg);
    zombie.velocityX = -2
    zombie.scale = 0.2
    zombieGroup.add(zombie)
  }
}

function spawnBullets() {
  var bullet = createSprite(player.x+50,player.y);
  bullet.addImage(bulletImg)
  bullet.velocityX = 15;
  bulletGroup.add(bullet);
  bullet.scale = 0.2
}
