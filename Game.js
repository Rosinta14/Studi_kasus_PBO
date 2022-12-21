let score = 0;
let a;
let screen = 0;
let counter = setInterval(timer, 1000);

function setup(){
  createCanvas(600,600);
  a = new Game(300,300,40);
  textAlign(CENTER);
  textSize(20);
}

function draw(){
  if (screen === 0){
    a.score = 0;
    a.Start();
    a.time = 5;
  }else if (screen === 1){
    background(0);
    c.Bola();
    text(("Score : " + a.score),width/2, 40);
    
    if(c.time>0){
      text(a.time + " seconds", 100, 40);
    }else{
      screen = 2;
      a.time = 5;
    }
  }else if(screen === 2){
    a.GameOver();
  }
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


class Hero extends Entity {
    constructor(life, score) {
      this.life = life;
      this.score = score;
    }
  
    
    increaseScore() {

    }

  
    calculateLife(){

    }


    saveScore(){

    }
  }