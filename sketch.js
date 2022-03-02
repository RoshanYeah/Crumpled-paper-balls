// i'm not really sure about how to do steps 4, 5, and 6

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic:true,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	Matter.Bodies.circle(50,685,10,ball_options)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();

keyPressed()

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:1})
	}
}

