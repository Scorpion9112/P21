var wall, thickness
var bullet, speed, weight
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  thickness1=random(22,83)
  thickness2=random(22,83)
  car1=createSprite(50, 60, 50, 15);
  car2=createSprite(50, 215, 50, 15);
  car3=createSprite(50, 355, 50, 15);
  g1=createSprite(800,140,1600,50)
  g2=createSprite(800,285,1600,50) 
  wall3=createSprite(1200,57.5,thickness,100)
  wall4=createSprite(1200,212.5,thickness1,85)
  wall5=createSprite(1200,355,thickness2,80)
  g1.shapeColor=color(255,255,255)
  g2.shapeColor=color(255,255,255)
  wall3.shapeColor=color(80,80,80)
  wall4.shapeColor=color(80,80,80)
  wall5.shapeColor=color(80,80,80)
  speed=random(223,321)
  weight=random(30,52)
  speed1=random(223,321)
  weight1=random(30,52)
  speed2=random(223,321)
  weight2=random(30,52)
  car1.velocityX=speed
  car2.velocityX=speed1
  car3.velocityX=speed2
  car1.shapeColor=color(255,255,255)
  car2.shapeColor=color(255,255,255)
  car3.shapeColor=color(255,255,255)
  console.log(speed)
  console.log(speed1)
  console.log(speed2)
  console.log(weight)
  console.log(weight1)
  console.log(weight2)
  console.log(thickness)
  console.log(thickness1)
  console.log(thickness2)
}

function draw() {
  background(0);  
  if(wall3.x-car1.x<(car1.width+wall3.width)/1){
    car1.velocityX=0
    var deformation=.5 * weight * speed * speed/(thickness*thickness*thickness)
    if(deformation>12.42){
      wall3.shapeColor=color(255,0,0)
    }
    if(deformation<12.42){
      wall3.shapeColor=color(0,250,0)
    }
  }
  if(wall4.x-car2.x<(car2.width+wall4.width)/1){
    car2.velocityX=0
    var deformation=.5 * weight1 * speed1 * speed1/(thickness1*thickness1*thickness1)
    if(deformation>12.42){
      wall4.shapeColor=color(255,0,0)
    }
    if(deformation<12.42){
      wall4.shapeColor=color(0,250,0)
    }
  }
  if(wall5.x-car3.x<(car3.width+wall5.width)/1){
    car3.velocityX=0
    var deformation=.5 * weight2 * speed2 * speed2/(thickness2*thickness2*thickness2)
    if(deformation>12.42){
      wall5.shapeColor=color(255,0,0)
    }
    if(deformation<12.42){
      wall5.shapeColor=color(0,250,0)
    }
  }
  drawSprites();
}