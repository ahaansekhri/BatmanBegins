const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bruce;
var maxDrops = 1;
var rain = []

function preload(){
    
}

function setup(){
    var canvas = createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;
    
    bruce = new Umbrella(275,700);

    drops = new Drops();
    
}

function draw(){
   background("black");
   Engine.update(engine);

    for(var i = 0; i<maxDrops; i++ ){
        rain.push(new Drops(random(0,600),0));

    }

   bruce.display();

   for (var i = 0; i < rain.length; i++) {
     
    rain[i].display();
    
  }

   


}   

