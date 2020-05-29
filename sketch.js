const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,pendulum,ground,string;

function setup() {
  createCanvas(400,400);
  fill("lightblue");
  engine = Engine.create();
  world = engine.world; 
  ground = new Ground(200,400,450,20);
  holder = new Ground(200,20,200,20);
  pendulum = new Pendulum(200,200,50);
  string = new ConstraintMake(pendulum.body , holder.body)
}

function draw() {
  background(255); 
  Engine.update(engine);

  pendulum.display();
  ground.display();
  holder.display();
  string.display();
  fill("black");
  stroke("black");
  strokeWeight(0);
  text("Press 'Space Bar' to oscillate the pendulum to left and right with mouse",10,20);
  text("Press ANY to stop the Pendulum",100,50);
  if(keyCode===32){
    pendulum.body.position.y = mouseY;
    pendulum.body.position.x = mouseX;
  }



}