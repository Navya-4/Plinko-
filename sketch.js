const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];


function setup() {

engine = Engine.create();
world = engine.world;

 createCanvas(610,609);


 div1 = new Division (5,490,10,300);
 div2 = new Division (80,490,10,300);
 div3 = new Division (155,490,10,300);
 div4 = new Division (230,490,10,300);
 div5 = new Division (305,490,10,300);
 div6 = new Division (380,490,10,300);
 div7 = new Division (455,490,10,300);
 div8 = new Division (530,490,10,300);
 div9 = new Division (605,490,10,300);

 ground = new Ground (300,603,600,10)

 for (var m = 40; m<=width; m=m+80){
  plinkos.push(new Plinko(m, 75, 5,5));
}

for (var m = 15; m<=width-10; m=m+80){
  plinkos.push(new Plinko (m,175,5,5))
}



Engine.run(engine)
}

function draw() {
  background("black");  

ground.display();

div1.display();
div2.display();
div3.display();
div4.display();
div5.display();
div6.display();
div7.display();
div8.display();
div9.display();


for (var m = 0; m < plinkos.length; m++){
  plinkos[m].display();
}


if (frameCount % 60 === 0 ){
  particles.push(new Particle(random (30,570), 10,10))
}

for (var n = 0; n < particles.length; n++){
  particles[n].display();
}



  drawSprites();
}