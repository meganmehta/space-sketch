//references:
//https://editor.p5js.org/kjhollen/sketches/rJGMUhh0G 
//https://editor.p5js.org/wvnl/sketches/5wnuHAXKd

let slider;
let stars = [];
let theta = 0;

class Star{
  constructor() {
    this.xS = random(-1000,1000);
    this.yS = random(-1000,1000);
    this.size = random(0.25, 3);
    this.t = random(TAU);
  }

  draw(){
    this.t += 0.1;
    var scale = this.size + sin(this.t) * 2;
    noStroke();
    ellipse(this.xS, this.yS, scale, scale);
  }
}
  
function preload(){
  img=loadImage('moon_texture.jpeg')
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
   for (var i = 0; i < 1500; i++){
    stars[i] = new Star();
  }
}

function draw() {
  background(25, 1, 69);

  //blinking stars
  for (var i = 0; i < stars.length; i++){
    stars[i].draw();
  }
  
  //cocentric circles 
  noFill();
  stroke(245, 241, 5);
  ellipse(-120, 60, 60, 60);
  ellipse(-120, 60, 70, 70);
  ellipse(-120, 60, 80, 80);
  noFill();
  stroke(245,245,245);
  //maybe use another for loop here?
  ellipse(-200, 60, 60, 60);
  ellipse(-200, 60, 50, 50);
  ellipse(-200, 60, 40, 40);
  ellipse(-200, 60, 30, 30);
  ellipse(-200, 60, 20, 20);
  ellipse(-200, 60, 10, 10);
  
  //venus
  fill(98,52,18);
  noStroke();
  rect(-110, -90, 75, 75, 50);
  //uranus
  fill(0, 111, 133); 
  noStroke();
  rect(30, 20, 90, 55);
  //mercury
  fill(225, 239, 242); 
  ellipse(120, 75, 72, 72);
  //saturn
  stroke(251, 175, 33);
  noFill();
  arc(105, 105, 100, 50, PI / 2, 3 * PI / 2, OPEN);
  for (let i = 0; i < width/10; i += 10) {
    if (i % 20 === 0) {
      stroke(191, 4, 13); //mars
      line(i, 90, i, height / 4);
    } else {
      stroke(152,152,152); //mercury
      line(i, 70, i, 180);
    }
  }

  //moon 
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  texture(img);
  stroke(1);
  sphere(80);
  theta += 0.05;


}
