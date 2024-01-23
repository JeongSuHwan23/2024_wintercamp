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
  
//   endGame(){
//     //if (뱀의 머리가 경계선을 초과)
//     //if (뱀의 머리가 몸통에 닿음)
    
//     return false;
//   }
  
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
