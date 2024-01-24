class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(0, 0);
    this.xdir = 0;
    this.ydir = 0;
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  eat(food) {
    if (this.body[this.body.length - 1].x === food.x && this.body[this.body.length - 1].y === food.y){
      this.grow();  
      return true;
  }
    else
      return false;
  }

  grow() {
    let head = this.body[this.body.length - 1].copy()
    this.body.push(head);
  }
  
  endGame() {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x > w-1 || y > h-1 || x < 0 || y < 0) {
      return true;
    }
    for (let i = 0; i < this.body.length - 2; i++) { 
      let part = this.body[i];
      if (part.x == x && part.y == y) {
        return true;
      }
    }
    return false;
  }
  
  update() {
    let head = this.body[this.body.length - 1].copy()
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }

  updated() {
    this.body[0].x -= this.xdir;
    this.body[0].y -= this.ydir;
  }

  show() {
    for(let i=0; i<this.body.length; i++){
      fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
}
