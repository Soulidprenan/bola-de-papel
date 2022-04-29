const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;
var ground;
var parede1, parede2;

function preload() {}

function setup() {
  createCanvas(800, 800);
  ellipseMode(RADIUS);

  engine = Engine.create();
  world = engine.world;

  var wall_options = {
    isStatic: true,
  };

  var ball_options = {
    isStatic: false,
    restitution: 0.3,
    friction: 0,
    density: 1.2,
  };
  //Create the Bodies Here.
  ball = Bodies.circle(160, 350, 20, ball_options);
  World.add(world, ball);

  parede1 = Bodies.rectangle(350, 500, 20, 100, wall_options);
  parede2 = Bodies.rectangle(700, 600, 20, 100, wall_options);

  ground = new Ground(800 / 2, 670, 800, 20);
}

function draw() {
  background(0);
  Engine.run(engine);

  ground.display();
  push();
  fill("yellow");
  ellipse(ball.position.x, ball.position.y, 20, 20);
  rect(parede1.position.x, parede1.position.y, 20, 100);
  rect(parede2.position.x, parede2.position.y, 20, 100);
  pop();

  drawSprites();
  colocarForca();
}
function colocarForca() {
  if (keyCode == UP_ARROW) {
    //não consegui aplicar a velocidade para cima
    Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.05, y: 0 });
  }
}
