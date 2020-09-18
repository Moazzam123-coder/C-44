var bgimg;
var Ground;

function preload()
{
bgimg = loadImage("city.jpg");
bg2 = loadAnimation("city.jpg","city2.jpg");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  Dev = createSprite(400, 200, 50, 50);
 // Rbutton = createButton("→");
 // Lbutton = createButton("←");
  Ubutton = createButton("↑");
  Dbutton = createButton("↓");
 // Rbutton.position(windowWidth*7/8,windowHeight*7/8);
  Dbutton.position(windowWidth*5/6,windowHeight*7/8);
 // Lbutton.position(windowWidth/20,windowHeight*7/8);
  Ubutton.position(windowWidth/10,windowHeight*7/8);
  Ground = createSprite(windowWidth/2,windowHeight/2);
  Ground.addAnimation(bg2);
 // Ground.addImage(bgimg);
  Ground.scale = 3;
}

function draw() {
  background(bgimg);  
 /* Rbutton.mousePressed(()=>{
    Dev.velocityX = 4
  })
  Lbutton.mousePressed(()=>{
    Dev.velocityX = -4
  })*/
  Dbutton.mousePressed(()=>{
    Dev.velocityY = 4
  })
  Ubutton.mousePressed(()=>{
    Dev.velocityY = -4
  })
  Ground.velocityX = -3;
  if(Ground.x<0){
    Ground.x = Ground.width/2;
  }


  drawSprites();
}