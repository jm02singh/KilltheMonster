const Engine = Matter.Engine 
const World = Matter.World 
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var myEngine,myWorld 
var ground
var box1,box2,box3,box4,box5,box6,box7,box8
var ball
var sling
var monster
var stool
var gameState = "onSling";


function preload() {
  background1 = loadImage("background.jpeg")
  }


function setup() { 
  var canvas = createCanvas(1500,800); 
  myEngine = Engine.create(); 
  myWorld = myEngine.world; 
  ground = new Ground(750,790,1500,50)
  ball = new Ball(450,50,300,300)
  sling = new Slingshot(ball.body,{x: 550, y: 0})

  stool = new Box(1400, 390, 300, 300)

  monster = new Monster(1400, 330, 400, 400)

  box1 = new Box(700, 720, 80, 80)
  box2 = new Box(800, 720, 80, 80)
  box3 = new Box(900, 720, 80, 80)
  box4 = new Box(1000, 720, 80, 80)
  box5 = new Box(1100, 720, 80, 80)
  box6 = new Box(1200, 720, 80, 80)

  box7 = new Box(750, 620, 80, 80)
  box8 = new Box(850, 620, 80, 80)
  box9 = new Box(950, 620, 80, 80)
  box10 = new Box(1050, 620, 80, 80)
  box11 = new Box(1150, 620, 80, 80)

  box12 = new Box(825, 520, 80, 80)
  box13 = new Box(925, 520, 80, 80)
  box14 = new Box(1025, 520, 80, 80)
  box15 = new Box(1125, 520, 80, 80)

  box16 = new Box(870, 435, 80, 80)
  box17 = new Box(970, 435, 80, 80)
  box18 = new Box(1070, 435, 80, 80)

  box19 = new Box(900, 365, 80, 80)
  box20 = new Box(1010, 365, 80, 80)

  box21 = new Box(950, 265, 80, 80)
} 
  function draw() {

     background(background1); 
     Engine.update(myEngine) 
     ground.display();
     ball.display();
     monster.display();
     //sling.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     box16.display();
     box17.display();
     box18.display();
     box19.display();
     box20.display();
     box21.display();
     
     
  }
  
  

     function mouseDragged(){
     Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
     }

    