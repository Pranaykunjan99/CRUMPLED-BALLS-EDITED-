
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground1;
var dustbin1;
var dustbin2;
var dustbin3;

function setup() {
  createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ball= new Paper(50,300,15,)
 

  ground1= new Ground(600,height,1200,20)
  dustbin1= new Bucket(700,660,10,50)
  dustbin2= new Bucket(600,660,10,50)
  dustbin3= new Bucket(650,690,110,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
  ground1.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  drawSprites();
}

 function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y:-35})
  }
}




