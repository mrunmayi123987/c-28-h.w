
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1 , mango2 , mango3,mango4 , mango7 , mango6;
var world,boy;
var stone;
var chain;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1000,100,30);
	mango3 = new mango(1050,200,30);
    mango4 = new mango(1200,210,30);
    mango5 = new mango(950,210,30);
    mango7 = new mango(1150,150,30);
	mango6 = new mango(1150,220,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone = new Stone(200,400);
  chain = new Chain(stone.body,boy.body);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango7.display();
  mango6.display();
  stone.display();


  groundObject.display();
  chain.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango6);

}
function mouseDragged(){

  Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY});

}

function mouseReleased(){

   chain.fly();

}
function keyPressed(){
  if(keyCode===32){
    Matter.body.setPosition(stoneObj, {x:235,y:420});
    launcherObject.attach(stoneObj.body);

  }
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}

}