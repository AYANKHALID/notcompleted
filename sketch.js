var rocket,meteor,background
var rocketImg,meteorImg,backgroundImg


function preload(){
  backgroundImg = loadImage("background.jpg");
  rocketImg = loadImage("rocket.png");
  meteorImg = loadImage("meteor.png");
  
}


function setup(){
  
  createCanvas(400,400);

background=createSprite(200,200);
background.addImage(backgroundImg);


rocket = createSprite(160,340,20,20);
rocket.scale =0.09;
rocket.addImage(rocketImg);
}

function draw() {
  background(0);
  
  
  rocket.x = World.mouseX;
  
  edges= createEdgeSprites();
  rocket.collide(edges);
  
   drawSprites();
   

   if (frameCount % 80 == 0) {
     createMeteor();
     } 
   
}

function createMeteor() {
meteor = createSprite(random(50, 350),40, 10, 10);
meteor.addImage(meteorImg);
meteor.scale=0.07;
meteor.velocityY = 3;
meteor.lifetime = 150;
  
}


