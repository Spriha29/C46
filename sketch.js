const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gameState = PLAY;

var avatar, avatar_img, avatar_img2;
var scene;
var sofa, bookshelf, cabinet, lamp, tv, table;
var sofa_img, bookshelf_img, cabinet_img, lamp_img, tv_img, table_img;
var bg_img;
var edges;
var platform1, platform2, platform3;

function preload(){
  avatar_img = loadImage("Images/Man_walking.png");
  avatar_img2 = loadImage("Images/Man_jumping.png");
  sofa_img = loadImage("Images/sofa_img.png");
  lamp_img = loadImage("Images/lamp_img.png");
  bookshelf_img = loadImage("Images/bookshelf_img.png");
  cabinet_img = loadImage("Images/cabinet_img.png");
  tv_img = loadImage("Images/tv_img.png");
  table_img = loadImage("Images/table_img.png");
  bg_img = loadImage("Images/lava.jpg");
}

function setup() {
  createCanvas(displayWidth-20,  displayHeight-120);

  scene = createSprite(0,0,displayWidth,displayHeight);
  scene.addImage(bg_img);
  scene.scale = 3.4;
  scene.x = scene.width/2;

  engine = Engine.create();
  world = engine.world;

  avatar = createSprite(100,500,50,50);
  avatar.addImage(avatar_img);
  avatar.scale = 0.5;

  sofa = createSprite(300, 350, 50, 50);
  sofa.addImage(sofa_img);
  sofa.scale = 0.3;

  lamp = createSprite(650,290,50,50);
  lamp.addImage(lamp_img);
  lamp.scale = 0.5;

  bookshelf = createSprite(850,230,50,50);
  bookshelf.addImage(bookshelf_img);
  bookshelf.scale = 0.4;

  table = createSprite(450,250,50,50);
  table.addImage(table_img);
  table.scale = 0.5;

  tv = createSprite(475,500,50,50);
  tv.addImage(tv_img);
  tv.scale = 0.35;

  cabinet = createSprite(1000,400,50,50);
  cabinet.addImage(cabinet_img);
  cabinet.scale = 0.7;

  platform1 = createSprite(160,590,80,20);
  platform1.shapeColor = "blue";

  platform2 = createSprite(690,475,80,20);
  platform2.shapeColor = "blue";
  
  platform3 = createSprite(1100,280,80,20);
  platform3.shapeColor = "blue";

  //sofa.debug = true;
  //bookshelf.debug = true;
  
  //avatar.debug = true;
  avatar.setCollider("rectangle",0,0,200,300);

  //cabinet.debug = true;
  cabinet.setCollider("rectangle",20,50,500,200);

  //table.debug = true;
  table.setCollider("circle",0,0,100);

  
  //tv.debug = true;
  tv.setCollider("circle",0,0,170);

  //lamp.debug = true;
  lamp.setCollider("circle",0,0,150);
  //avatar = new Avatar(100,500,50,50);
}

function draw() {
  background(0); 
  //console.log("x : "+avatar.x);
  //console.log("y : "+avatar.y); 
  scene.velocityX = -4;

  if(scene.x<0){
    scene.x = scene.width/2;
  }
  

  avatar.velocityX = 0;
  avatar.velocityY = 0;

  if(keyDown("space")){
    avatar.velocityY = -6;
    avatar.addImage(avatar_img2);
  }

  if(keyDown("RIGHT_ARROW")){
    avatar.velocityX = 6;
    avatar.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    avatar.velocityX = -6;
    avatar.velocityY = 0;
  }



  if(avatar.isTouching(platform2)){
   avatar.velocityX = 0;
   avatar.velocityY = 0;
   avatar.addImage(avatar_img);
  }

  if(avatar.isTouching(platform3)){
    avatar.velocityX = 0;
    avatar.velocityY = 0;
    avatar.addImage(avatar_img);
   }

  if(avatar.isTouching(sofa)){
    avatar.velocityX = 0;
    avatar.velocityY = 0;
    avatar.addImage(avatar_img);
   }

  if(avatar.isTouching(lamp)){
    avatar.velocityX = 0;
    avatar.velocityY = 0;
    avatar.addImage(avatar_img);
   }

  if(avatar.isTouching(table)){
    avatar.velocityX = 0;
    avatar.velocityY = 0;
    avatar.addImage(avatar_img);
   }

  if(avatar.isTouching(bookshelf)){
    avatar.velocityX = 0;
    avatar.velocityY = 0;
    avatar.addImage(avatar_img);
   }
  
  if(avatar.isTouching(tv)){
    avatar.velocityX = 0;
    avatar.velocityY = 0;
    avatar.addImage(avatar_img);
   }

  if(avatar.isTouching(cabinet)){
    avatar.velocityX = 0;
    avatar.velocityY = 0;
    avatar.addImage(avatar_img);
   }
  avatar.velocityY = avatar.velocityY + 0.8;
 

  //if(avatar.x === 298 || avatar.y === 350){
    //avatar.velocityX = 0;
    //avatar.velocityY = 0;
    //avatar.addImage(avatar_img);
    
  //}

  sofa.depth = avatar.depth;
  avatar.depth = avatar.depth + 1;

  Engine.update(engine);

  //avatar.display();

  edges = createEdgeSprites();
  //avatar.collide(edges);

  avatar.collide(platform1);
  avatar.collide(platform2);
  avatar.collide(platform3);

  avatar.collide(sofa);
  avatar.collide(bookshelf);
  avatar.collide(cabinet);
  avatar.collide(table);
  avatar.collide(tv);
  avatar.collide(lamp);

  reset();

  drawSprites();
}

function reset(){
  if(keyDown("space")){
    avatar.velocityY = -6;
    avatar.addImage(avatar_img2);
  }

  if(keyDown("RIGHT_ARROW")){
    avatar.velocityX = 6;
    avatar.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    avatar.velocityX = -6;
    avatar.velocityY = 0;
  }
}