const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var obstacle = [];

 
function preload(){
 groundImg = loadImage("groundImg.jpg");
 
}
function setup() {
  createCanvas(2000,600);
  engine = Engine.create();
  world = engine.world;
   
 ground1 = new Ground(1000,590,2000,10);
 box1 = new Box(30,500,50,50);


  random1 = random(200,500);
console.log(random1);
 for(i = 350; i<=2000; i = random1){
   obstacle.push(new Obstacle(i))
}


function draw() {
  background(groundImg);
  Engine.update(engine);
  
  ground1.display();
  
  box1.display();
   

}

  for(var j = 0;j<obstacle.length;j++){
    obstacle[j].display();
  }

 
 direction();

  drawSprites();
}

function direction(){
  if (keyWentDown("W")) 
  {
    Matter.Body.setVelocity(box1.body, {x:3,y:-10});
  }
  if (keyDown("A"))
  {
   Matter.Body.setVelocity(box1.body, {x:-5,y:0});
  }
  if (keyDown("D"))
  {
   Matter.Body.setVelocity(box1.body, {x:5,y:0});
  }
  if (keyWentDown("S"))
  {
   Matter.Body.setVelocity(box1.body, {x:0,y:5});
  }
}
