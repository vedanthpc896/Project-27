
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;
	//roof = new Roof(450,200,600,10);
	roof = new Roof(380,200,400,10);
	bobDiameter=40;
	//Create the Bodies Here.

	
	bob1 = new Bob(300,420,20);
	//rope1 = new Rope(bob1.body,roof.body, bobDiameter*2, 0);
	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2, 0)
	bob2 = new Bob(340,420,20);
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1, 0)
	bob3 = new Bob(380,420,20);
	rope3=new Rope(bob3.body,roof.body,bobDiameter*0, 0)
	bob4 = new Bob(420,420,20);
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1, 0)
	bob5 = new Bob(460,420,20);
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2, 0)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-75,y:-75});

	}
}


