
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeleft, treeright, treebottom, treeImage;
var ground;
var stone;
var girl, girlImage;
var launcherOb;

function preload()
{
	girlImage = loadImage("Images/girl.png");
	treeImage = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Creating the tree
	treeleft = new Tree(700, 520, 20, 300);
	treebottom = new Tree(900, 670, 400, 20);
	treeright = new Tree(1100, 520, 20, 300);

	//creating the ground
	ground = new Ground(600, 680, 1200, 20);

	//creating the stone
	stone = new Stone(140, 535, 30);

	//creating mangoes
	mango1 = new Mango(730, 130, 30);
	mango2 = new Mango(800, 80, 30 );
	mango3 = new Mango(900, 40, 30);
	mango4 = new Mango(700, 220, 30);
	mango5 = new Mango(820, 190, 30);
	mango6 = new Mango(920, 120, 30);
	mango7 = new Mango(1020, 120, 30);
	mango8 = new Mango(960, 220, 30);
	mango9 = new Mango(1050, 250, 30);

	//creating constraint
	launcherOb = new Launcher(stone.body, {x:140, y:535});

	Engine.run(engine);
	
}


function draw() {
  background(0);
  drawSprites();
 
  treeleft.display();
  treeright.display();
  treebottom.display();

  ground.display();

  image(girlImage, 200, 450, 200, 300);
  image(treeImage, 600, 0, 600, 700);
  stone.display();

  launcherOb.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  
}



