
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var tree
var boy 
var boyImage
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10
var stone
var launcher 
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
stone=new Rock(235,430,40)
laucnher= new Launcher(stone.body,{x:235,y:430})
	//Create the Bodies Here.
ground= new Ground(600,650,1200,10)
tree= new Tree(1050,580)
mango1=new Mango(1100,280,30,30);
mango2=new Mango(1170,240,30,30);
mango3=new Mango(980,250,30,30);
mango4=new Mango(1170,275,30,30);
mango5=new Mango(909,350,30,30);
mango6=new Mango(1000,310,30,30);
mango7=new Mango(1112,230,40,30);
mango8=new Mango(929,320,40,40);
mango9=new Mango(1150,290,40,40);
mango10=new Mango(9120,350,40,40);
	
	Engine.run(engine);
  
}
function preload(){
boyImage=loadImage("boy.png")







}

function draw() {
  rectMode(CENTER);
  background(0);
  




image(boyImage,200,420,200,300)

tree.display()
mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
mango7.display()
mango8.display()
mango9.display()
mango10.display()

stone.display()
launcher.display()

ground.display()
  drawSprites();
 
}



