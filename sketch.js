let sunHeight;
let horizon = 200;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  sunHeight = mouseY;
  if (sunHeight < horizon) {
    background("lightblue");
  } else {
    background(0);
  }
  fill ("yellow");
  circle(200, sunHeight, 100);
  stroke('green');
  line(0,horizon,400,horizon);
  fill("green")
  rect(0, horizon, 400, 400);
}