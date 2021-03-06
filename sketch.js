function setup() {
  createCanvas(innerWidth, innerWidth);
  stroke(220,220,220);
  strokeWeight(1);
  frameRate(5);
  noFill();
}

function draw() {
  clear();
  background(255,255,255);
  var margin = 30;
  var width = innerWidth - 2*margin;
  var height = innerWidth - 2*margin;
  var spotX = mouseX;//random(0,width);
  var spotY = mouseY;//random(0,height);
  var radius = innerWidth/3;

  var shift = 10;
  var space = 20;
  var numSquares = 20;
  var sideLen = width/numSquares;

  translate(margin,margin);
  for(var y=0; y < height; y = y+sideLen){
    for(var x=0; x < width; x = x+sideLen){

      // vary shift more slowly

      if (sqrt(pow(spotX - x,2) + pow(spotY-y,2)) > radius){
        shift = 0;
        // fill(240,200, 0);
        quad(x + space + random(-shift, shift),y + space + random(-shift, shift),x+sideLen - space + random(-shift, shift),y + space + random(-shift, shift), x+sideLen - space + random(-shift, shift),y+sideLen - space + random(-shift, shift), x + space + random(-shift, shift),y+sideLen - space + random(-shift, shift));
        shift = 7;

      }
      else{
        // fill(240,random(170,220), 0);
        quad(x + space + random(-shift, shift),y + space + random(-shift, shift),x+sideLen - space + random(-shift, shift),y + space + random(-shift, shift), x+sideLen - space + random(-shift, shift),y+sideLen - space + random(-shift, shift), x + space + random(-shift, shift),y+sideLen - space + random(-shift, shift));
      }

    }
  }
  //noLoop();
}
