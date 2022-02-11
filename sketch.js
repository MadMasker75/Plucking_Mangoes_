const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	var canvas = createCanvas(1350, 600);
	engine = Engine.create();
	world = engine.world;

  tree = new Tree(895,0,450,580);
  ground = new Ground(675,590,1350,10);
  boy = new Boy(380,430,150,217);
  stone = new Stone(200,200,90,75);
  mango = new Mango(200,200,50);
  launcher = new Launcher(stone.body,{x:235,y:430});

	Engine.run(engine);
}

function draw() {
  background("white");
  Engine.update(engine);
  tree.display();
  ground.display();
  boy.display();
  stone.display();
  mango.display();
}