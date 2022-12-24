class Map{
  constructor(width,height){
    this.width = width
    this.heigth = height
  }
  
  init(){
    createCanvas(this.width,this.heigth)
  }
  
  move(){
    
  }
}

class Level{
  constructor(currentLevel,latestLevel,maxLevel){
    this.currentLevel= currentLevel
    this.latestLevel = latestLevel
    this.maxLevel = maxLevel
  }

  showLevel(){
    fill('#FFFFFF');
    text("Level : " + this.currentLevel, 15, 40);
  }
  
  setLevel(currentLevel){
    //buat mengubah levelnya
    currentLevel = this.currentLevel 
  }
  
  getCurrentLevel(){
    //buat dapetin level yang dimasukin
    return this.currentLevel
  }
}

class Entity{
  constructor(){
    this.r = 100;
    this.height = height
    this.width = width
    this.x =  this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 0.5;
  }
  
  jump(){
    this.vy = -10;
    this.score +=10;
  }
  
  hits(monster){
    return collideRectRect(this.x,this.y,this.r,this.r,monster.x,monster.y,monster.r,monster.r);
  }
  
  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height -  this.r); 
  }
  
    moveRight(){
    //gerakin ke kanan
    this.x += 20;

  }
  
  moveLeft(){
    //gerak ke kiri
    this.x -= 20;
  }
  
  moveDown(){
    //gerak ke bawah
    this.y += 20;
  }
  
  moveUp(){
    //gerak ke atas
    this.y -= 20;
  }
  
  show(){
    image(bImg,this.x, this.y,  this.r,  this.r);
  }
}
class Monster extends Entity{
  constructor(height,width,x,y,life){
    super(height,width,x,y);
    this.life = life; 
  }
  
  moveRandom(){
    this.x += 3;

  }
  
  saveScore(){
    score = this.score;
    
  }
    showLion (){
    image(mImg,this.x, this.y,  this.r,  this.r);
  }
  
}

class Hero extends Entity{
  constructor(height,width,x,y,life,score){
    super(height,width,x,y)
    this.life = life
    this.score = score
  }
  
  increaseScore(){
    skor = this.score;
    this.score += 10
  }
  
  calculateLife(){
    life = this.life;
    this.life-=1;
  }

  showLife(){
    fill('#FFFFFF');
    image(cImg, 175, 13, 19, 19)
    text(this.life,200, 25)
  }
  
  saveScore(){
    fill('#FFFFFF');
    text(this.score, 15, 25);
  }
}