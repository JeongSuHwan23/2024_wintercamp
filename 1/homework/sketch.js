let snake;

function setup() {
  createCanvas(400, 400);
  snake = new Snake();
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    x = floor(random(w));
  }
  if(keyCode === RIGHT_ARROW) {
    y = floor(random(h));
  }
}

function draw() {
  background(220);
  //뱀을 그리는 코드
  snake.update();
  snake.show();
  //음식을 그리는 코드
}