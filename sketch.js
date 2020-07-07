var canvas;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var wpos = 0;

var drops = [];
var drop;
var ground;

var batman;
var clouds;

var bolt;

var maxDrops = 200;

function preload(){
    clouds = loadImage("clouds.png");

    bolt = loadImage("bolt.png");
}

function setup(){
  canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  for(var i = 0; i < maxDrops; i++){
      drop = new Drop(i+wpos,random(0,200),2,15);
      drops.push(drop);
      wpos += 5; 
  }

  batman = new BM(200,350,100,100);
}

function draw(){
    background(0);
    Engine.update(engine);

    for(var d of drops){
        d.display();
        d.update();
    }

    if(frameCount % 80 === 0){
        image(bolt,random(0,400),100,100,200);
        if(frameCount = 50){
           image(bolt,600,10,10,10);
        }
     }

    image(clouds,0,0,400,100);

    batman.display();
}