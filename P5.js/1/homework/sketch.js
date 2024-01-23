let snake;
let food;
let rez = 20;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  frameRate(7);
  snake = new Snake();
  w = floor(width/rez);
  h = floor(height/rez)
  locateFood();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode == RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode == UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode == DOWN_ARROW) {
    snake.setDir(0, 1);
  }
}

function locateFood(){
  food = createVector(floor(random(w)), floor(random(h)));
}

function draw() {
  background(220);
  scale(rez);
  
  //grow snake
  if(snake.eat(food)){
    locateFood();
  }
  
  // if(snake.endGame()){
  //   console.log("End Game");
  //   background(255,0,0);
  //   noLoop();
  // }
  
  //draw snake
  snake.update();
  snake.show();
  
  //draw food
  fill(255,0,0);
  noStroke();
  rect(food.x, food.y, 1, 1);
}
