let a;

function setup(){
  createCanvas(400, 400);
  p = new Entity(20,100,100,color(78,178,78),1);
  p.show();
}

function draw(){
    if (keyIsPressed === true) {
    a.attack();
    a.moveRight();
    a.moveLeft();
    a.moveDown();
    a.moveUp();
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
    Constructor(height, width, posX, posY, warna,v){
        this.width= width;
        this.height=height;
        this.posX=posX;
        this.posY=posY;
        this.warna=warna;
        this.v=v;     
    }
  
  show(){
    background(20);
    fill(this.warna);
    noStroke()
    ellipse(this.posX, this.posY, this.width,this.hight);
  }

    attack(){
    }

    moveRight(){
      if (this.posX+this.v>400)
        this.posX=0;
      else
        this.posX+=this.v;
    }

    moveLeft(){
      if (this.posX-this.v<0)
        this.posX=400;
      else
        this.posX-=this.v;
    }

    moveDown(){
      if (this.posY+this.v>400)
        this.posY=0;
      else
        this.posY+=this.v;
    }

    moveUp(){
      if (this.posY-this.v<0)
        this.posY=400;
      else
        this.posY-=this.v;
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
    if (keyIsPressed === true) {
      if (keyCode === UP_ARROW) {
      a.moveUp();
    } else if (keyCode === DOWN_ARROW) {
      a.moveDown();
    } else if (keyCode === LEFT_ARROW) {
      a.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
      a.moveRight();
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
