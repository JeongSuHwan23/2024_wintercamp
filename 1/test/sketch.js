let x = 20;
let y = 20;
let w;
let h;
let rez = 10;
let food;
let tail;

function setup() {
  createCanvas(400, 400);
  w = floor(width/rez);
  h = floor(width/rez);
  food = createVector(0, 0);
  tail = food.copy
}

// function mousePressed() {
//   x = floor(random(w));
//   y = floor(random(h));
// }

function keyPressed() {
  if(keyCode == LEFT_ARROW){
    food.x = floor(random(w));
    food.y = floor(random(h));
    tail.x = food.x+1;
    tail.y = food.y+1;
  }
}

function draw() {
  scale(rez); 
  background(200);
  noStroke();
  fill(255,0,0);
  rect(food.x, food.y, 1, 1);
  rect(tail.x, tail.y, 1, 1);
}
