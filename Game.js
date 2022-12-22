let score = 0;
let screen = 0;
let counter = setInterval(time, 1000);

function setup(){
  createCanvas(600,600);
  let a = new Game(300,300,40);
  textAlign(CENTER);
  textSize(20);
}

function draw(){
  
}

class Game{
  constructor(x, y, sizeBola, score = 0, time = 5){
    this.x = y;
    this.y = y;
    this.sizeBola = sizeBola;
    this.score = score;
    this.time = time;
  }
  
}

class Map {
    constructor(width, height) {
      this.width = width;
      this.height = height;

    }
  
    init() {
       noStroke();
       fill('#34ff1e');
       rect(0, 310, this.width, this.height - 390);
       fill('#ab5800');
       rect(0, 320, this.width, this.height - 200);

    }

    move(){

    }
  }

class Level {

    constructor(currentLevel, latestLevel, maxLevel) {
      this.currentLevel = currentLevel;
      this.latestLevel = latestLevel;
      this.maxLevel = maxLevel;
    }
  

    setLevel() {
      
    }
  
 
    getCurrentLevel() {  

    }
  }

class Entity{
    Constructor(height, width, x,y){
        this.width= width;
        this.height=height;
        this.x=x;
        this.y=y;     
    }

    attack(){
    }

    moveRight(){
      if(keyIsDown(68)){
            this.x += 1
        }
    }

    moveLeft(){
      if(keyIsDown(65)){
            this.x -= 1
        }
    }

    moveDown(){
       if(keyIsDown(87)){
            this.y += 1
        }
    }

    moveUp(){
      if(keyIsDown(87)){
            this.x += 1
        }
    }        
}
 
class Monster extends Entity{
    constructor(life, color,effect,type){
        this.life=life;
        this.color=color;
        this.effect=effect;
        this.type=type;
    }
    
    moveRandom(){
     }
    
    saveScore(){
      }   
  }     


class Hero extends Entity{
    constructor(height, width, x, y, life, score){
        super(height, width, x, y);
        this.life = life;
        this.score = score;
    }
    
    move(){
        if(keyIsDown(68)){
            this.moveRight();
        }
        else if(keyIsDown(65)){
            this.moveLeft();
        }
        else if(keyIsDown(83)){
            this.moveDown();
        }
        else if(keyIsDown(87)){
            this.moveUp();
        }
    }
    
    increaseScore(){
        
    }

    calculateLife(){

    }

    saveScore(){
        fill(0);
        text('Score : ' + this.score, 40, 30);
    }
}
