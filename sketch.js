var helicopterIMG,helicopterSprite,packageSprite,packageIMG;
var packageBody,ground;
var rectSide1,rectBottom,rectSide2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	rectSide1Sprite=createSprite(300, 610, 15, 100);
	rectSide1Sprite.shapeColor=color(255,0,0);

	rectSide2Sprite=createSprite(500, 610, 15, 100);
	rectSide2Sprite.shapeColor=color(255,0,0);

	rectBottomSprite=createSprite(400, 652.5, 200, 15);
	rectBottomSprite.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	rectSide1 = Bodies.rectangle(300, 610, 15, 100, {isStatic:true});
	World.add(world,rectSide1);

	rectSide2 = Bodies.rectangle(500, 610, 15, 100, {isStatic:true});
	World.add(world,rectSide2);

	rectBottom = Bodies.rectangle(400, 652.5, 200, 15, {isStatic:true});
	World.add(world,rectBottom);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



