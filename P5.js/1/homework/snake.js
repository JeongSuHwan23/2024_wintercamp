class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(0, 0);
    this.xdir = 0;
    this.ydir = 0;
  }
  
  update() {
    this.body[0].x += this.xdir;
    this.body[0].y += this.ydir;
  }
  
  updated() {
    this.body[0].x -= this.xdir;
    this.body[0].y -= this.ydir;
  }
  
  show() {
    fill(0);
    noStroke();
    rect(this.body[0].x,this.body[0].y,10,10);
  }
}