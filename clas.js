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
    this.currentLevel = currentLevel
  }
  
  getCurrentLevel(){
    //buat dapetin level yang dimasukin
    return this.currentLevel
  }
}

class Entity{
  constructor(){
    this.r = 100;
    this.x =  this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 0.5;
  }
  
  jump(){
    this.vy = -10;    
  }
  
  // hits(monster){
  //   return collideRectRect(this.x,this.y,this.r,this.r,monster.x,monster.y,monster.r,monster.r);
  // }
  
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
  constructor(height,width,x,y,image,life){
    super(height,width,x,y);
    this.life = life;
    this.image = image;
  }
  
  moveRandom(){
    this.x += 3;
  }
  //   hits(monster){
  //   return collideRectRect(this.x,this.y,this.r,this.r,monster.x,monster.y,monster.r,monster.r);
  // }
  
  saveScore(){
    
  }
    showLion (){
    image(mImg,this.x, this.y,  this.r,  this.r);
  }
}
