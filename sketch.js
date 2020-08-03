const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var paper;
var dustBin1, dustBin2, dustBin3;
var ground;

function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  paper = new Paper(150, 200, 50, 50);
  dustBin1 = new DustBin(495, 550, 20, 200);
  dustBin2 = new DustBin(605, 640, 200, 20);
  dustBin3 = new DustBin(705, 550, 20, 200);
  ground = new Ground(400, height, 800, 100);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();
  ground.display();
  keyPressed();

  drawSprites();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, { x: 20, y: -10 });
  }
}
