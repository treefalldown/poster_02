// Benedikt Groß
// Example is based on examples from: http://brm.io/matter-js/, https://github.com/shiffman/p5-matter

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

let engine;
let boxA;
let boxB;

let ball_01;
let ball_02;
let ball_03;
let ball_04;
let ball_05;
let ball_06;
let ball_07;
let ball_08;
let ball_09;
let ball_10;
let ball_12;
let ball_13;
let ball_14;
let ball_15;

let ground;
let wall;
let wall2;

let joyce;
let zherui;
let albert;
let joyce_getup;

let canvas;

let randomYPos = 1200;
let multiplier = 2;

function setup() {
  canvas = createCanvas(2700, 3600);
  // canvas = createCanvas(2700, 3600);

  joyce = loadImage('Joyce.png')
  zherui = loadImage('Zherui.png')
  albert = loadImage('Albert.png')
  joyce_getup = loadImage('Joyce_getup.png')

  // create an engine
  engine = Engine.create();

  // create two boxes and a ground
  box_01 = Bodies.rectangle(random(width), random(-randomYPos * multiplier, randomYPos), 290, 730);
  box_02 = Bodies.rectangle(random(width), random(-randomYPos * multiplier, randomYPos), 290, 730);
  box_03 = Bodies.rectangle(random(width), random(-randomYPos * multiplier, randomYPos), 290, 730);
  box_04 = Bodies.rectangle(random(width), random(-randomYPos * multiplier, randomYPos), 290, 730);
  box_05 = Bodies.rectangle(random(width), random(-randomYPos * multiplier, randomYPos), 290, 730);
  box_06 = Bodies.rectangle(random(width), random(-randomYPos * multiplier, randomYPos), 290, 730);
  box_07 = Bodies.rectangle(random(width), random(-randomYPos * multiplier, randomYPos), 290, 730);
  box_08 = Bodies.rectangle(random(width), random(-randomYPos * multiplier, randomYPos), 290, 730);
  box_09 = Bodies.rectangle(random(width), random(-randomYPos * multiplier, randomYPos), 290, 730);
  box_10 = Bodies.rectangle(random(width), random(-randomYPos * multiplier, randomYPos), 290, 730);

  ball_01 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_02 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_03 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_04 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_05 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_06 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_07 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_08 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_09 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_10 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_11 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_12 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_13 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_14 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);
  ball_15 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos), 185);

  // ball2 = Bodies.circle(200, 10, 80);
  // ball3 = Bodies.circle(220, 40, 80);
  wall_left = Bodies.rectangle(-20, height, 20, height*2, {
    // ground = Bodies.rectangle(400, 500, 810, 25, {
    // isStatic: true, angle: Math.PI * 0.06
    isStatic: true, angle: Math.PI * 0.00001
  });
  wall_right = Bodies.rectangle(width+20, height, 20, height*2, {
    // ground = Bodies.rectangle(400, 500, 810, 25, {
    // isStatic: true, angle: Math.PI * 0.06
    isStatic: true, angle: Math.PI * 0.00001
  });

  ground = Bodies.rectangle(0, height, width*2, 1, {
    // ground = Bodies.rectangle(400, 500, 810, 25, {
    // isStatic: true, angle: Math.PI * 0.06
    isStatic: true, angle: Math.PI * 0.0000
  });
  World.add(engine.world, [box_01, box_02, box_03, box_04, box_05, box_06, box_07, box_08, box_09, box_10, ball_01, ball_02, ball_03, ball_04, ball_05, ball_06, ball_07, ball_08, ball_09, ball_10, ball_11, ball_12, ball_13, ball_14, ball_15, wall_left, wall_right, ground]);

  // setup mouse
  let mouse = Mouse.create(canvas.elt);
  let mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05, angularStiffness: 0 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);

  // run the engine
  Engine.run(engine);
}

function draw() {
  background(255);

  noStroke();
  fill(0);
  drawVertices(box_01.vertices);
  drawVertices(box_02.vertices);
  drawVertices(box_03.vertices);
  drawVertices(box_04.vertices);
  drawVertices(box_05.vertices);

  drawSprite(box_01, joyce_getup);
  drawSprite(box_02, joyce_getup);
  drawSprite(box_03, joyce_getup);
  drawSprite(box_04, joyce_getup);
  drawSprite(box_05, joyce_getup);

  drawVertices(box_06.vertices);
  drawVertices(box_07.vertices);
  drawVertices(box_08.vertices);
  drawVertices(box_09.vertices);
  drawVertices(box_10.vertices);
  // drawVertices(ball.vertices);
  drawVertices(ball_01.vertices);
  drawVertices(ball_02.vertices);
  drawVertices(ball_03.vertices);
  drawVertices(ball_04.vertices);
  drawVertices(ball_05.vertices);
  drawVertices(ball_06.vertices);
  drawVertices(ball_07.vertices);
  drawVertices(ball_08.vertices);
  drawVertices(ball_09.vertices);
  drawVertices(ball_10.vertices);

  drawSprite(ball_01, joyce);
  drawSprite(ball_02, zherui);
  drawSprite(ball_03, albert);
  drawSprite(ball_04, joyce);
  drawSprite(ball_05, zherui);
  drawSprite(ball_06, albert);
  drawSprite(ball_07, joyce);
  drawSprite(ball_08, zherui);
  drawSprite(ball_09, albert);
  drawSprite(ball_10, joyce);
  drawSprite(ball_11, zherui);
  drawSprite(ball_12, albert);
  drawSprite(ball_13, joyce);
  drawSprite(ball_14, zherui);
  drawSprite(ball_15, albert);
  // drawVertices(ball2.vertices);
  drawVertices(wall_left.vertices);
  drawVertices(wall_right.vertices);

  fill(128);
  drawVertices(ground.vertices);

  drawMouse(mouseConstraint);
}

function drawMouse(mouseConstraint) {
  if (mouseConstraint.body) {
    var pos = mouseConstraint.body.position;
    var offset = mouseConstraint.constraint.pointB;
    var m = mouseConstraint.mouse.position;
    stroke(0, 255, 0);
    strokeWeight(2);
    line(pos.x + offset.x, pos.y + offset.y, m.x, m.y);
  }
}

function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}

function drawSprite(body, img) {
  const pos = body.position;
  const angle = body.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  imageMode(CENTER);
  image(img, 0, 0);
  pop();
}
