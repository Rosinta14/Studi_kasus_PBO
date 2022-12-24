var x = 200;
var y = 350;
var d = 37;
var life = 1; 
let skor = 0 ;
let clas;
let bImg;
let lImg;
let mImg;
let monsters = [];

function preload(){
  bImg = loadImage('media/bear.png');
  lImg = loadImage('media/belakang.jpg')
  mImg = loadImage('media/lion.jpg')
  cImg = loadImage('media/love.jpg')
}


function setup() {
  peta = new Map(600, 400);
  bear = new Entity();
  penyelamat = new Hero(d,d,x,y,life,skor);
  level = new Level(1,1,3);
  peta.init();
}

function keyPressed(){
  if(key == ' '){
    bear.jump();
    penyelamat.increaseScore();

  }
  if(keyCode === UP_ARROW){
    bear.moveUp();
  }else if (keyCode === DOWN_ARROW){
    bear.moveDown();  
  }
  if (keyCode === RIGHT_ARROW){
    bear.moveRight();
 }else if (keyCode === LEFT_ARROW){
    bear.moveLeft();
 }
}


function draw() {

  if (random(2) < 0.01){
    monsters.push(new Monster());
  }
  
  background(lImg);
  

  penyelamat.saveScore();
  penyelamat.showLife();
  level.showLevel()
  
   
  if(bear.x > 500){
    bear.x = 0;
      }else if(bear.x<0){
         bear.x = 500;
      }

      if(bear.y > 400){
        bear.y = 0
      }else if(y < 0){
        bear.y = 400
      }
  
    for(let m of monsters){
    m.moveRandom();  
      
      if(bear.hits(m)){
        textSize(50);
        fill(255, 255, 0);
        text("Game Over!", width / 4, height / 2);
        noLoop();
      }
      
    if(bear.score >= 0 && bear.score <= 20000){
      level.setLevel(1)
      m.y += 2
    }else if(bear.score >= 200001 && bear.score <= 40000){
      level.setLevel(2)
      m.y += 3
    }else if(bear.score >= 40001){
      level.setLevel(3)
      m.y += 4
    }
        m.showLion(); 
}
  
    bear.show();
  bear.move();

  


}